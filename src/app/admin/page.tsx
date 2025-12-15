'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Lock, LogOut, FileText, Users, Stethoscope, Phone,
  HelpCircle, DollarSign, Building2, FileCheck,
  ChevronRight, Settings, Home, Truck, Image,
  Layout, UserCog, CreditCard, GraduationCap, BookOpen,
  Newspaper, FlaskConical, Camera, FileSignature, Inbox
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/auth', {
        credentials: 'include'
      });
      if (res.ok) {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.error('Auth check failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        credentials: 'include'
      });

      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setError(data.error || 'Ошибка авторизации');
      }
    } catch (e) {
      setError('Ошибка соединения');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', {
      method: 'DELETE',
      credentials: 'include'
    });
    setIsAuthenticated(false);
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Админ-панель</h1>
            <p className="text-gray-500 mt-2">Ариель Центр</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Пароль администратора
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Введите пароль..."
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
            >
              Войти
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Вернуться на сайт
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const menuItems = [
    { href: '/admin/applications', icon: Inbox, label: 'Заявки', description: 'Все обращения с сайта', color: 'red' },
    { href: '/admin/hero', icon: Layout, label: 'Главная страница', description: 'Шапка и информационный блок', color: 'blue' },
    { href: '/admin/management', icon: UserCog, label: 'Руководство', description: 'Директор и руководители', color: 'purple' },
    { href: '/admin/specialists', icon: Users, label: 'Специалисты', description: 'Управление командой', color: 'green' },
    { href: '/admin/services', icon: Stethoscope, label: 'Услуги', description: 'Редактировать услуги центра', color: 'blue' },
    { href: '/admin/prices', icon: DollarSign, label: 'Цены', description: 'Прайс-лист', color: 'yellow' },
    { href: '/admin/requisites', icon: CreditCard, label: 'Реквизиты', description: 'Юридические и банковские', color: 'indigo' },
    { href: '/admin/education', icon: GraduationCap, label: 'Образование', description: 'Программы и лицензия', color: 'teal' },
    { href: '/admin/documents', icon: FileCheck, label: 'Документы', description: 'Лицензии и документы', color: 'purple' },
    { href: '/admin/faq', icon: HelpCircle, label: 'FAQ', description: 'Вопросы и ответы', color: 'pink' },
    { href: '/admin/contacts', icon: Phone, label: 'Контакты', description: 'Контактная информация', color: 'teal' },
    { href: '/admin/company', icon: Building2, label: 'О компании', description: 'Информация о центре', color: 'indigo' },
    { href: '/admin/logistics', icon: Truck, label: 'Логистика', description: 'Проживание и логистика', color: 'orange' },
    { href: '/admin/media', icon: Image, label: 'Медиафайлы', description: 'Фото и документы', color: 'cyan' },
    { href: '/admin/site', icon: Settings, label: 'Настройки сайта', description: 'Шапка, подвал, соцсети, лицензии', color: 'gray' },
    { href: '/admin/offers', icon: FileSignature, label: 'Договоры оферты', description: 'Интенсив и маткапитал', color: 'amber' },
    { href: '/admin/news', icon: Newspaper, label: 'Новости', description: 'Новости центра', color: 'blue' },
    { href: '/admin/science', icon: FlaskConical, label: 'Наука', description: 'Публикации и исследования', color: 'violet' },
    { href: '/admin/gallery', icon: Camera, label: 'Фотогалерея', description: 'Фотоальбомы', color: 'rose' },
    { href: '/admin/media-articles', icon: FileText, label: 'Медиа (СМИ)', description: 'Статьи и репортажи', color: 'sky' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Админ-панель</h1>
                <p className="text-sm text-gray-500">Ариель Центр</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/admin/help"
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
              >
                <BookOpen className="w-5 h-5" />
                <span className="hidden sm:inline">Инструкция</span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">На сайт</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Выйти</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Добро пожаловать! 👋
          </h2>
          <p className="text-gray-600">
            Выберите раздел для редактирования содержимого сайта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition duration-200 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Info */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="font-semibold text-blue-800 mb-2">💡 Подсказка</h3>
          <p className="text-blue-700 text-sm">
            После внесения изменений нажмите кнопку "Сохранить". Изменения вступят в силу
            после перезагрузки страницы на сайте. Перед сохранением автоматически создаётся
            резервная копия данных.
          </p>
        </div>
      </main>
    </div>
  );
}
