import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const type = formData.get('type') as string | null; // 'payment' or 'photo'

    if (!file) {
      return NextResponse.json({ error: 'Файл не выбран' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'Недопустимый тип файла' }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'Файл слишком большой (макс 10MB)' }, { status: 400 });
    }

    // Создаём папку для загрузок заявок
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'booking');
    await mkdir(uploadDir, { recursive: true });

    // Генерируем уникальное имя
    const ext = file.name.split('.').pop() || 'bin';
    const prefix = type === 'photo' ? 'photo' : 'payment';
    const filename = prefix + '_' + Date.now() + '_' + Math.random().toString(36).substring(7) + '.' + ext;
    const filepath = path.join(uploadDir, filename);

    // Сохраняем файл
    const bytes = await file.arrayBuffer();
    await writeFile(filepath, Buffer.from(bytes));

    // Возвращаем URL
    const url = 'https://mdi-ariel.ru/uploads/booking/' + filename;

    return NextResponse.json({ 
      success: true, 
      url: url,
      filename: filename
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Ошибка загрузки' }, { status: 500 });
  }
}
