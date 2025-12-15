import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/applications.json');

interface Application {
  id: string;
  type: 'intensive' | 'matkapital' | 'contact' | 'callback';
  createdAt: string;
  status: 'new' | 'processing' | 'completed' | 'cancelled';
  data: Record<string, any>;
  paymentFileName?: string;
}

interface ApplicationsData {
  applications: Application[];
}

// GET - получить все заявки
export async function GET(request: NextRequest) {
  try {
    const content = await fs.readFile(dataFilePath, 'utf-8');
    const data: ApplicationsData = JSON.parse(content);

    // Сортируем по дате (новые сверху)
    data.applications.sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading applications:', error);
    return NextResponse.json({ applications: [] });
  }
}

// POST - создать новую заявку
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data, paymentFileName } = body;

    // Читаем текущие заявки
    let applicationsData: ApplicationsData = { applications: [] };
    try {
      const content = await fs.readFile(dataFilePath, 'utf-8');
      applicationsData = JSON.parse(content);
    } catch {
      // Файл не существует, создаём новый
    }

    // Создаём новую заявку
    const newApplication: Application = {
      id: `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      createdAt: new Date().toISOString(),
      status: 'new',
      data,
      paymentFileName
    };

    applicationsData.applications.push(newApplication);

    // Сохраняем
    await fs.writeFile(dataFilePath, JSON.stringify(applicationsData, null, 2), 'utf-8');

    return NextResponse.json({ success: true, id: newApplication.id });
  } catch (error) {
    console.error('Error saving application:', error);
    return NextResponse.json({ success: false, error: 'Failed to save application' }, { status: 500 });
  }
}

// PATCH - обновить статус заявки
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    const content = await fs.readFile(dataFilePath, 'utf-8');
    const applicationsData: ApplicationsData = JSON.parse(content);

    const appIndex = applicationsData.applications.findIndex(a => a.id === id);
    if (appIndex === -1) {
      return NextResponse.json({ success: false, error: 'Application not found' }, { status: 404 });
    }

    applicationsData.applications[appIndex].status = status;

    await fs.writeFile(dataFilePath, JSON.stringify(applicationsData, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json({ success: false, error: 'Failed to update application' }, { status: 500 });
  }
}

// DELETE - удалить заявку
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID required' }, { status: 400 });
    }

    const content = await fs.readFile(dataFilePath, 'utf-8');
    const applicationsData: ApplicationsData = JSON.parse(content);

    applicationsData.applications = applicationsData.applications.filter(a => a.id !== id);

    await fs.writeFile(dataFilePath, JSON.stringify(applicationsData, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting application:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete application' }, { status: 500 });
  }
}
