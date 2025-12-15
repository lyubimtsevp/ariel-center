'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Settings, Home, LogOut, ChevronLeft, Stethoscope, Users, 
  FileCheck, Phone, Building2, HelpCircle, DollarSign, Truck, Image
} from 'lucide-react';

const menuItems = [
  { href: '/admin/services', icon: Stethoscope, label: 'Услуги' },
  { href: '/admin/specialists', icon: Users, label: 'Специалисты' },
  { href: '/admin/documents', icon: FileCheck, label: 'Документы' },
  { href: '/admin/prices', icon: DollarSign, label: 'Цены' },
  { href: '/admin/faq', icon: HelpCircle, label: 'FAQ' },
  { href: '/admin/logistics', icon: Truck, label: 'Логистика' },
  { href: '/admin/contacts', icon: Phone, label: 'Контакты' },
  { href: '/admin/company', icon: Building2, label: 'О компании' },
  { href: '/admin/media', icon: Image, label: 'Медиафайлы' },
];

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function AdminLayout({ children, title, description }: AdminLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
      } else {
        router.push('/admin');
      }
    } catch (e) {
      router.push('/admin');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { 
      method: 'DELETE',
      credentials: 'include'
    });
    router.push('/admin');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-800">Админ-панель</h1>
            <p className="text-xs text-gray-500">Ариель Центр</p>
          </div>
        </div>
        
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="p-3 border-t border-gray-200 space-y-1">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            <Home className="w-5 h-5" />
            <span>На сайт</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            <span>Выйти</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64 flex-1">
        {/* Mobile header */}
        <header className="lg:hidden bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="flex justify-between items-center px-4 py-3">
            <Link href="/admin" className="flex items-center gap-2 text-gray-600">
              <ChevronLeft className="w-5 h-5" />
              <span>Меню</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-600 p-2"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page header */}
        <div className="bg-white border-b border-gray-200 px-4 lg:px-8 py-6">
          <div className="max-w-5xl mx-auto">
            <Link 
              href="/admin" 
              className="hidden lg:inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-3"
            >
              <ChevronLeft className="w-4 h-4" />
              Назад к меню
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            {description && (
              <p className="text-gray-600 mt-1">{description}</p>
            )}
          </div>
        </div>

        {/* Page content */}
        <main className="px-4 lg:px-8 py-6">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
