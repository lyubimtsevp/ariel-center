'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, AlertCircle, CheckCircle, Layout, Type, Phone, MapPin, Clock, Mail, MousePointer } from 'lucide-react';

interface Button {
  text: string;
  href: string;
  primary: boolean;
}

interface HeroData {
  title: string;
  subtitle: string;
  organization: {
    fullName: string;
    shortName: string;
  };
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  buttons: Button[];
}

export default function HeroAdmin() {
  const [data, setData] = useState<HeroData>({
    title: '',
    subtitle: '',
    organization: { fullName: '', shortName: '' },
    address: '',
    phone: '',
    email: '',
    workingHours: '',
    buttons: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=hero.json', { credentials: 'include' });
      const result = await res.json();
      if (result.success && result.data) {
        setData(result.data);
      }
    } catch (e) {
      setMessage({ type: 'error', text: 'Ошибка загрузки данных' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);
    
    try {
      const res = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file: 'hero.json', data }),
        credentials: 'include'
      });
      
      const result = await res.json();
      
      if (result.success) {
        setMessage({ type: 'success', text: 'Изменения сохранены!' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Ошибка сохранения' });
      }
    } catch (e) {
      setMessage({ type: 'error', text: 'Ошибка соединения' });
    } finally {
      setIsSaving(false);
    }
  };

  const addButton = () => {
    setData(prev => ({
      ...prev,
      buttons: [...prev.buttons, { text: 'Новая кнопка', href: '/', primary: false }]
    }));
  };

  const updateButton = (index: number, field: keyof Button, value: any) => {
    setData(prev => ({
      ...prev,
      buttons: prev.buttons.map((btn, i) => i === index ? { ...btn, [field]: value } : btn)
    }));
  };

  const deleteButton = (index: number) => {
    setData(prev => ({
      ...prev,
      buttons: prev.buttons.filter((_, i) => i !== index)
    }));
  };

  if (isLoading) {
    return (
      <AdminLayout title="Главная страница" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Главная страница" description="Редактирование шапки и информационного блока">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition disabled:opacity-50"
        >
          <Save className="w-5 h-5" />
          {isSaving ? 'Сохранение...' : 'Сохранить изменения'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Заголовки */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-800">Заголовки</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Главный заголовок</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => setData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Центр коррекции речи и поведения"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Подзаголовок</label>
              <textarea
                value={data.subtitle}
                onChange={(e) => setData(prev => ({ ...prev, subtitle: e.target.value }))}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Помогаем детям..."
              />
            </div>
          </div>
        </div>

        {/* Наименование организации */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Layout className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-800">Наименование организации</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Полное наименование</label>
              <textarea
                value={data.organization?.fullName || ''}
                onChange={(e) => setData(prev => ({ 
                  ...prev, 
                  organization: { ...prev.organization, fullName: e.target.value }
                }))}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Сокращённое наименование</label>
              <input
                type="text"
                value={data.organization?.shortName || ''}
                onChange={(e) => setData(prev => ({ 
                  ...prev, 
                  organization: { ...prev.organization, shortName: e.target.value }
                }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Контактная информация */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-800">Контактная информация (в шапке)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <MapPin className="w-4 h-4 inline mr-1" />
                Адрес
              </label>
              <input
                type="text"
                value={data.address}
                onChange={(e) => setData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Phone className="w-4 h-4 inline mr-1" />
                Телефон
              </label>
              <input
                type="text"
                value={data.phone}
                onChange={(e) => setData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Mail className="w-4 h-4 inline mr-1" />
                Email
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Clock className="w-4 h-4 inline mr-1" />
                Режим работы
              </label>
              <input
                type="text"
                value={data.workingHours}
                onChange={(e) => setData(prev => ({ ...prev, workingHours: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Кнопки */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MousePointer className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-gray-800">Кнопки призыва к действию</h3>
            </div>
            <button
              onClick={addButton}
              className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 hover:bg-green-100 rounded-lg text-sm transition"
            >
              <Plus className="w-4 h-4" />
              Добавить
            </button>
          </div>
          
          <div className="space-y-3">
            {data.buttons?.map((btn, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={btn.text}
                    onChange={(e) => updateButton(index, 'text', e.target.value)}
                    placeholder="Текст кнопки"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={btn.href}
                    onChange={(e) => updateButton(index, 'href', e.target.value)}
                    placeholder="Ссылка (/contacts)"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                  />
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={btn.primary}
                      onChange={(e) => updateButton(index, 'primary', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-600">Основная (яркая)</span>
                  </label>
                </div>
                <button
                  onClick={() => deleteButton(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {(!data.buttons || data.buttons.length === 0) && (
              <p className="text-gray-500 text-sm text-center py-4">Нет кнопок. Нажмите "Добавить".</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
