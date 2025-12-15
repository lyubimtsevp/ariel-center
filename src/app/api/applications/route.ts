import { NextRequest, NextResponse } from 'next/server';

interface ApplicationData {
  type: 'intensive' | 'matkapital' | 'contact' | 'callback';
  data: Record<string, any>;
  paymentFileName?: string;
}

// Форматирование данных для email
function formatEmailContent(appData: ApplicationData): string {
  const typeLabels: Record<string, string> = {
    intensive: '🔵 Заявка на интенсив',
    matkapital: '🟠 Заявка на интенсив (Маткапитал)',
    contact: '📞 Обратный звонок',
    callback: '📞 Обратный звонок'
  };

  const fieldLabels: Record<string, string> = {
    childName: 'ФИО ребёнка',
    childBirthDate: 'Дата рождения ребёнка',
    parentName: 'ФИО родителя',
    phone: 'Телефон',
    email: 'Email',
    agreedDates: 'Согласованные даты',
    isFirstVisit: 'Первый визит',
    hadDiagnostics: 'Была диагностика',
    throughFund: 'Через фонд',
    fundName: 'Название фонда',
    name: 'Имя',
    service: 'Услуга',
    passportSeries: 'Серия паспорта',
    passportNumber: 'Номер паспорта',
    passportIssuer: 'Кем выдан',
    passportDate: 'Дата выдачи паспорта',
    birthCertSeries: 'Серия св-ва о рождении',
    birthCertNumber: 'Номер св-ва о рождении',
    birthCertDate: 'Дата выдачи св-ва',
    residentialAddress: 'Адрес проживания',
    postalAddress: 'Почтовый адрес',
    matkapSeries: 'Серия сертификата МК',
    matkapNumber: 'Номер сертификата МК',
    matkapDate: 'Дата сертификата МК'
  };

  let content = `${typeLabels[appData.type] || 'Новая заявка'}\n`;
  content += `Дата: ${new Date().toISOString()}\n\n`;

  for (const [key, value] of Object.entries(appData.data)) {
    if (value === null || value === undefined || value === '') continue;

    const label = fieldLabels[key] || key;
    let displayValue = value;

    if (typeof value === 'boolean') {
      displayValue = value ? 'Да' : 'Нет';
    }

    content += `${label}: ${displayValue}\n`;
  }

  if (appData.paymentFileName) {
    content += `\nПрикреплённый файл: ${appData.paymentFileName}`;
  }

  return content;
}

// POST - принять заявку
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data, paymentFileName } = body;

    // Логируем заявку (видно в Vercel logs)
    const emailContent = formatEmailContent({ type, data, paymentFileName });
    console.log('=== НОВАЯ ЗАЯВКА ===');
    console.log(emailContent);
    console.log('====================');

    // Всегда возвращаем успех - заявка принята
    return NextResponse.json({ 
      success: true, 
      message: 'Заявка принята',
      id: `app_${Date.now()}`
    });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ success: false, error: 'Ошибка обработки заявки' }, { status: 500 });
  }
}

// GET - информация
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'API заявок работает. Заявки логируются в Vercel.'
  });
}
