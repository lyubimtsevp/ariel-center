import { NextRequest, NextResponse } from 'next/server';

interface ApplicationData {
  type: 'intensive' | 'matkapital' | 'contact' | 'callback';
  data: Record<string, any>;
  paymentFileName?: string;
  childPhotoFileName?: string;
}

// Форматирование данных для email
function formatEmailContent(appData: ApplicationData): string {
  const typeLabels: Record<string, string> = {
    intensive: 'Заявка на интенсив',
    matkapital: 'Заявка на интенсив (Маткапитал)',
    contact: 'Обратный звонок',
    callback: 'Обратный звонок'
  };

  const fieldLabels: Record<string, string> = {
    childName: 'ФИО ребёнка',
    childBirthDate: 'Дата рождения ребёнка',
    parentName: 'ФИО родителя',
    phone: 'Телефон',
    email: 'Email',
    region: 'Откуда (регион, город)',
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
    matkapDate: 'Дата сертификата МК',
    comment: 'Комментарий'
  };

  let content = typeLabels[appData.type] || 'Новая заявка';
  content += '\nДата: ' + new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' }) + '\n\n';

  for (const [key, value] of Object.entries(appData.data)) {
    if (value === null || value === undefined || value === '') continue;

    const label = fieldLabels[key] || key;
    let displayValue = value;

    if (typeof value === 'boolean') {
      displayValue = value ? 'Да' : 'Нет';
    }

    content += label + ': ' + displayValue + '\n';
  }

  if (appData.paymentFileName) {
    content += '\nПлатёжный документ: ' + appData.paymentFileName;
  }

  if (appData.childPhotoFileName) {
    content += '\nФото ребёнка: ' + appData.childPhotoFileName;
  }

  return content;
}

// POST - принять заявку
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data, paymentFileName, childPhotoFileName } = body;

    const emailContent = formatEmailContent({ type, data, paymentFileName, childPhotoFileName });

    console.log('=== НОВАЯ ЗАЯВКА ===');
    console.log(emailContent);
    console.log('====================');

    // Отправляем email через PHP
    const targetEmail = '829892@gmail.com';
    const typeLabels: Record<string, string> = {
      intensive: 'Заявка на интенсив',
      matkapital: 'Заявка на интенсив (Маткапитал)',
      contact: 'Обратный звонок',
      callback: 'Обратный звонок'
    };
    const subject = typeLabels[type] || 'Новая заявка с сайта';

    try {
      const mailResponse = await fetch('https://mdi-ariel.ru/api/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: targetEmail,
          subject: subject,
          body: emailContent
        })
      });
      
      if (!mailResponse.ok) {
        console.error('Email send failed:', await mailResponse.text());
      } else {
        console.log('Email sent to', targetEmail);
      }
    } catch (mailError) {
      console.error('Email error:', mailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Заявка принята',
      id: 'app_' + Date.now()
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
    message: 'API заявок работает. Заявки отправляются на 829892@gmail.com'
  });
}
