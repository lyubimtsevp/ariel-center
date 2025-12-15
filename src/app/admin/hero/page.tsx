'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, AlertCircle, CheckCircle, Layout, Type, Phone, MapPin, Clock, Mail, MousePointer, BarChart3, Layers } from 'lucide-react';

interface CtaButton {
  text: string;
  href: string;
  icon: string;
  primary: boolean;
}

interface ServiceCard {
  title: string;
  subtitle: string;
  href: string;
  icon: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  organization: {
    fullName: string;
    shortName: string;
  };
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  serviceCards: ServiceCard[];
  ctaButtons: CtaButton[];
  stats: {
    show: boolean;
    items: StatItem[];
  };
}

export default function HeroAdmin() {
  const [data, setData] = useState<HeroData>({
    title: '',
    subtitle: '',
    description: '',
    organization: { fullName: '', shortName: '' },
    address: '',
    phone: '',
    email: '',
    workingHours: '',
    serviceCards: [],
    ctaButtons: [],
    stats: { show: false, items: [] }
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
      setTimeout(() => setMessage(null), 3000);
    }
  };

  // CTA Buttons
  const addCtaButton = () => {
    setData(prev => ({
      ...prev,
      ctaButtons: [...prev.ctaButtons, { text: 'Новая кнопка', href: '/contacts', icon: 'calendar', primary: false }]
    }));
  };

  const updateCtaButton = (index: number, field: keyof CtaButton, value: any) => {
    setData(prev => ({
      ...prev,
      ctaButtons: prev.ctaButtons.map((btn, i) => i === index ? { ...btn, [field]: value } : btn)
    }));
  };

  const deleteCtaButton = (index: number) => {
    setData(prev => ({
      ...prev,
      ctaButtons: prev.ctaButtons.filter((_, i) => i !== index)
    }));
  };

  // Service Cards
  const addServiceCard = () => {
    setData(prev => ({
      ...prev,
      serviceCards: [...prev.serviceCards, { title: 'Новая услуга', subtitle: 'Описание', href: '/services', icon: 'medical' }]
    }));
  };

  const updateServiceCard = (index: number, field: keyof ServiceCard, value: string) => {
    setData(prev => ({
      ...prev,
      serviceCards: prev.serviceCards.map((card, i) => i === index ? { ...card, [field]: value } : card)
    }));
  };

  const deleteServiceCard = (index: number) => {
    setData(prev => ({
      ...prev,
      serviceCards: prev.serviceCards.filter((_, i) => i !== index)
    }));
  };

  // Stats
  const addStat = () => {
    setData(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        items: [...prev.stats.items, { value: '0+', label: 'описание' }]
      }
    }));
  };

  const updateStat = (index: number, field: keyof StatItem, value: string) => {
    setData(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        items: prev.stats.items.map((item, i) => i === index ? { ...item, [field]: value } : item)
      }
    }));
  };

  const deleteStat = (index: number) => {
    setData(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        items: prev.stats.items.filter((_, i) => i !== index)
      }
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
    <AdminLayout title="Главная страница" description="Редактирование шапки, кнопок и информационного блока">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
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
            <h3 className="font-semibold text-gray-800">Заголовки и описание</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Главный заголовок</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => setData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Подзаголовок</label>
              <textarea
                value={data.subtitle}
                onChange={(e) => setData(prev => ({ ...prev, subtitle: e.target.value }))}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Описание (под заголовком)</label>
              <textarea
                value={data.description || ''}
                onChange={(e) => setData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
            <h3 className="font-semibold text-gray-800">Контактная информация (в блоке на главной)</h3>
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

        {/* Карточки услуг */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-600" />
              <h3 className="font-semibold text-gray-800">Карточки услуг (2 блока вверху)</h3>
            </div>
            <button
              onClick={addServiceCard}
              className="flex items-center gap-1 px-3 py-1.5 bg-teal-50 text-teal-600 hover:bg-teal-100 rounded-lg text-sm transition"
            >
              <Plus className="w-4 h-4" />
              Добавить
            </button>
          </div>

          <div className="space-y-3">
            {data.serviceCards?.map((card, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3">
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => updateServiceCard(index, 'title', e.target.value)}
                    placeholder="Название"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={card.subtitle}
                    onChange={(e) => updateServiceCard(index, 'subtitle', e.target.value)}
                    placeholder="Подзаголовок"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={card.href}
                    onChange={(e) => updateServiceCard(index, 'href', e.target.value)}
                    placeholder="Ссылка"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                  />
                  <select
                    value={card.icon}
                    onChange={(e) => updateServiceCard(index, 'icon', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="medical">Медицина (синяя)</option>
                    <option value="education">Образование (оранж.)</option>
                  </select>
                </div>
                <button
                  onClick={() => deleteServiceCard(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопки CTA */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MousePointer className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-gray-800">Кнопки записи</h3>
            </div>
            <button
              onClick={addCtaButton}
              className="flex items-center gap-1 px-3 py-1.5 bg-orange-50 text-orange-600 hover:bg-orange-100 rounded-lg text-sm transition"
            >
              <Plus className="w-4 h-4" />
              Добавить
            </button>
          </div>

          <div className="space-y-3">
            {data.ctaButtons?.map((btn, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3">
                  <input
                    type="text"
                    value={btn.text}
                    onChange={(e) => updateCtaButton(index, 'text', e.target.value)}
                    placeholder="Текст кнопки"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={btn.href}
                    onChange={(e) => updateCtaButton(index, 'href', e.target.value)}
                    placeholder="Ссылка (/contacts)"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                  />
                  <select
                    value={btn.icon}
                    onChange={(e) => updateCtaButton(index, 'icon', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="calendar">Календарь</option>
                    <option value="baby">Ребёнок</option>
                    <option value="file">Документ</option>
                  </select>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={btn.primary}
                      onChange={(e) => updateCtaButton(index, 'primary', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-600">Основная (яркая)</span>
                  </label>
                </div>
                <button
                  onClick={() => deleteCtaButton(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {(!data.ctaButtons || data.ctaButtons.length === 0) && (
              <p className="text-gray-500 text-sm text-center py-4">Нет кнопок. Нажмите "Добавить".</p>
            )}
          </div>
        </div>

        {/* Статистика */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-gray-800">Статистика (8+ лет, 1000+ семей)</h3>
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.stats?.show || false}
                  onChange={(e) => setData(prev => ({
                    ...prev,
                    stats: { ...prev.stats, show: e.target.checked }
                  }))}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-600">Показывать</span>
              </label>
              <button
                onClick={addStat}
                className="flex items-center gap-1 px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg text-sm transition"
              >
                <Plus className="w-4 h-4" />
                Добавить
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {data.stats?.items?.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => updateStat(index, 'value', e.target.value)}
                    placeholder="8+"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-bold"
                  />
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => updateStat(index, 'label', e.target.value)}
                    placeholder="лет успешной работы"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <button
                  onClick={() => deleteStat(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            💡 Если "Показывать" выключен — блок со статистикой не отображается на сайте
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}
