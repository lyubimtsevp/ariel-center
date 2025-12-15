import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

// Проверка авторизации
function checkAuth(request: NextRequest): boolean {
  const authCookie = request.cookies.get('admin_auth');
  return authCookie?.value === 'authenticated';
}

// Получение пути к файлу данных
function getDataPath(filename: string): string {
  return path.join(process.cwd(), 'src', 'data', filename);
}

// Разрешённые файлы для редактирования
const ALLOWED_FILES = [
  'services.json',
  'specialists.json',
  'documents.json',
  'contacts.json',
  'company.json',
  'faq.json',
  'prices.json',
  'logistics.json',
  'hero.json',
  'management.json',
  'requisites.json',
  'education.json',
  'site.json'
];

// GET - получить данные
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file || !ALLOWED_FILES.includes(file)) {
    return NextResponse.json({ error: 'Недопустимый файл' }, { status: 400 });
  }

  try {
    const filePath = getDataPath(file);
    const content = await readFile(filePath, 'utf-8');
    const data = JSON.parse(content);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Ошибка чтения файла' }, { status: 500 });
  }
}

// POST - сохранить данные
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
  }

  try {
    const { file, data } = await request.json();

    if (!file || !ALLOWED_FILES.includes(file)) {
      return NextResponse.json({ error: 'Недопустимый файл' }, { status: 400 });
    }

    if (!data) {
      return NextResponse.json({ error: 'Данные не предоставлены' }, { status: 400 });
    }

    const filePath = getDataPath(file);

    // Создаём бэкап перед сохранением
    try {
      const existingContent = await readFile(filePath, 'utf-8');
      const backupPath = filePath.replace('.json', `_backup_${Date.now()}.json`);
      await writeFile(backupPath, existingContent, 'utf-8');
    } catch (e) {
      // Файл может не существовать, это нормально
    }

    // Сохраняем новые данные
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

    return NextResponse.json({ success: true, message: 'Данные сохранены' });
  } catch (error) {
    console.error('Error saving file:', error);
    return NextResponse.json({ error: 'Ошибка сохранения файла' }, { status: 500 });
  }
}

// GET список всех файлов
export async function OPTIONS(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    files: ALLOWED_FILES.map(f => ({
      name: f,
      label: getFileLabel(f)
    }))
  });
}

function getFileLabel(filename: string): string {
  const labels: Record<string, string> = {
    'services.json': 'Услуги',
    'specialists.json': 'Специалисты',
    'documents.json': 'Документы',
    'contacts.json': 'Контакты',
    'company.json': 'О компании',
    'faq.json': 'Вопросы и ответы',
    'prices.json': 'Цены',
    'logistics.json': 'Логистика',
    'hero.json': 'Главная страница',
    'management.json': 'Руководство',
    'requisites.json': 'Реквизиты',
    'education.json': 'Образование',
    'site.json': 'Настройки сайта'
  };
  return labels[filename] || filename;
}
