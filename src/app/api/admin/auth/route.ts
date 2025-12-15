import { NextRequest, NextResponse } from 'next/server';

// Простая авторизация для админки
const ADMIN_PASSWORD = 'ariel2024admin';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    if (password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true });
      // Устанавливаем cookie на 24 часа
      response.cookies.set('admin_auth', 'authenticated', {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24,
        path: '/'
      });
      return response;
    }
    
    return NextResponse.json({ success: false, error: 'Неверный пароль' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const authCookie = request.cookies.get('admin_auth');
  
  if (authCookie?.value === 'authenticated') {
    return NextResponse.json({ authenticated: true });
  }
  
  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('admin_auth');
  return response;
}
