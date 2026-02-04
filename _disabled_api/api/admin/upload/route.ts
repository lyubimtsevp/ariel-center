import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Проверка авторизации
function checkAuth(request: NextRequest): boolean {
  const authCookie = request.cookies.get('admin_auth');
  return authCookie?.value === 'authenticated';
}

// Разрешённые типы файлов
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const ALLOWED_DOC_TYPES = ['application/pdf', 'text/html'];

// Папки для загрузки
const UPLOAD_FOLDERS: Record<string, string> = {
  'specialists': 'images/specialists',
  'services': 'images/services',
  'hero': 'images/hero',
  'banners': 'images/banners',
  'docs': 'docs'
};

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const folder = formData.get('folder') as string | null;
    const customName = formData.get('name') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'Файл не выбран' }, { status: 400 });
    }

    if (!folder || !UPLOAD_FOLDERS[folder]) {
      return NextResponse.json({ error: 'Неверная папка' }, { status: 400 });
    }

    // Проверка типа файла
    const isImage = ALLOWED_IMAGE_TYPES.includes(file.type);
    const isDoc = ALLOWED_DOC_TYPES.includes(file.type);
    
    if (folder === 'docs' && !isDoc && !isImage) {
      return NextResponse.json({ error: 'Разрешены только PDF, HTML файлы' }, { status: 400 });
    }
    
    if (folder !== 'docs' && !isImage) {
      return NextResponse.json({ error: 'Разрешены только изображения (JPG, PNG, WebP)' }, { status: 400 });
    }

    // Создаём имя файла
    const ext = file.name.split('.').pop() || 'jpg';
    const baseName = customName 
      ? customName.replace(/[^a-zA-Z0-9а-яА-ЯёЁ_-]/g, '_')
      : file.name.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9а-яА-ЯёЁ_-]/g, '_');
    const timestamp = Date.now();
    const fileName = `${baseName}-${timestamp}.${ext}`;

    // Путь для сохранения
    const uploadDir = path.join(process.cwd(), 'public', UPLOAD_FOLDERS[folder]);
    const filePath = path.join(uploadDir, fileName);

    // Создаём директорию если не существует
    await mkdir(uploadDir, { recursive: true });

    // Сохраняем файл
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Возвращаем URL файла
    const fileUrl = `/${UPLOAD_FOLDERS[folder]}/${fileName}`;
    
    return NextResponse.json({ 
      success: true, 
      url: fileUrl,
      fileName: fileName
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Ошибка загрузки файла' }, { status: 500 });
  }
}

// GET - список файлов в папке
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  if (!folder || !UPLOAD_FOLDERS[folder]) {
    return NextResponse.json({ error: 'Неверная папка' }, { status: 400 });
  }

  try {
    const { readdir, stat } = await import('fs/promises');
    const uploadDir = path.join(process.cwd(), 'public', UPLOAD_FOLDERS[folder]);
    
    try {
      const files = await readdir(uploadDir);
      const fileList = await Promise.all(
        files
          .filter(f => !f.startsWith('.'))
          .map(async (fileName) => {
            const filePath = path.join(uploadDir, fileName);
            const fileStat = await stat(filePath);
            return {
              name: fileName,
              url: `/${UPLOAD_FOLDERS[folder]}/${fileName}`,
              size: fileStat.size,
              modified: fileStat.mtime
            };
          })
      );
      
      return NextResponse.json({ success: true, files: fileList });
    } catch (e) {
      // Папка не существует
      return NextResponse.json({ success: true, files: [] });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка чтения папки' }, { status: 500 });
  }
}

// DELETE - удаление файла
export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
  }

  try {
    const { folder, fileName } = await request.json();

    if (!folder || !UPLOAD_FOLDERS[folder]) {
      return NextResponse.json({ error: 'Неверная папка' }, { status: 400 });
    }

    if (!fileName) {
      return NextResponse.json({ error: 'Имя файла не указано' }, { status: 400 });
    }

    // Защита от path traversal
    if (fileName.includes('..') || fileName.includes('/')) {
      return NextResponse.json({ error: 'Недопустимое имя файла' }, { status: 400 });
    }

    const { unlink } = await import('fs/promises');
    const filePath = path.join(process.cwd(), 'public', UPLOAD_FOLDERS[folder], fileName);
    
    await unlink(filePath);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка удаления файла' }, { status: 500 });
  }
}
