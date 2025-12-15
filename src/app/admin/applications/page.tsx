'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Inbox, Calendar, User, Phone, Mail, CheckCircle, Clock, XCircle, Trash2, Eye, Baby, CreditCard, MessageSquare, RefreshCw } from 'lucide-react';

interface Application {
  id: string;
  type: 'intensive' | 'matkapital' | 'contact' | 'callback';
  createdAt: string;
  status: 'new' | 'processing' | 'completed' | 'cancelled';
  data: Record<string, any>;
  paymentFileName?: string;
}

const typeLabels: Record<string, { label: string; color: string; icon: any }> = {
  intensive: { label: 'Интенсив', color: 'bg-blue-100 text-blue-800', icon: Calendar },
  matkapital: { label: 'Маткапитал', color: 'bg-orange-100 text-orange-800', icon: Baby },
  contact: { label: 'Контакт', color: 'bg-green-100 text-green-800', icon: MessageSquare },
  callback: { label: 'Обратный звонок', color: 'bg-purple-100 text-purple-800', icon: Phone }
};

const statusLabels: Record<string, { label: string; color: string; icon: any }> = {
  new: { label: 'Новая', color: 'bg-red-100 text-red-800', icon: Inbox },
  processing: { label: 'В обработке', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
  completed: { label: 'Завершена', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  cancelled: { label: 'Отменена', color: 'bg-gray-100 text-gray-800', icon: XCircle }
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/applications');
      const data = await res.json();
      setApplications(data.applications || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch('/api/applications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      fetchApplications();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm('Удалить заявку?')) return;
    try {
      await fetch(`/api/applications?id=${id}`, { method: 'DELETE' });
      fetchApplications();
      setSelectedApp(null);
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const filteredApps = applications.filter(app => {
    if (filter === 'all') return true;
    if (filter === 'new') return app.status === 'new';
    return app.type === filter;
  });

  const newCount = applications.filter(a => a.status === 'new').length;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <AdminLayout title="Заявки" description="Загрузка...">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      title={`Заявки ${newCount > 0 ? `(${newCount} новых)` : ''}`}
      description="Все обращения с сайта"
    >
      <div className="space-y-6">
        {/* Фильтры и обновление */}
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Все ({applications.length})
            </button>
            <button
              onClick={() => setFilter('new')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${filter === 'new' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'}`}
            >
              Новые ({newCount})
            </button>
            <button
              onClick={() => setFilter('intensive')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${filter === 'intensive' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
            >
              Интенсив
            </button>
            <button
              onClick={() => setFilter('matkapital')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${filter === 'matkapital' ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'}`}
            >
              Маткапитал
            </button>
            <button
              onClick={() => setFilter('contact')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${filter === 'contact' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-700 hover:bg-green-100'}`}
            >
              Контакты
            </button>
          </div>
          <button
            onClick={fetchApplications}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition"
          >
            <RefreshCw className="w-4 h-4" />
            Обновить
          </button>
        </div>

        {filteredApps.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <Inbox className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Заявок пока нет</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Список заявок */}
            <div className="space-y-3">
              {filteredApps.map((app) => {
                const typeInfo = typeLabels[app.type] || typeLabels.contact;
                const statusInfo = statusLabels[app.status] || statusLabels.new;
                const TypeIcon = typeInfo.icon;

                return (
                  <div
                    key={app.id}
                    onClick={() => setSelectedApp(app)}
                    className={`p-4 bg-white rounded-xl border-2 cursor-pointer transition hover:shadow-md ${selectedApp?.id === app.id ? 'border-blue-500 shadow-md' : 'border-gray-100'
                      } ${app.status === 'new' ? 'ring-2 ring-red-200' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${typeInfo.color}`}>
                          <TypeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {app.data.childName || app.data.name || 'Без имени'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {app.data.phone || app.data.email || '—'}
                          </div>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                        {statusInfo.label}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                      <span className={`px-2 py-0.5 rounded ${typeInfo.color}`}>{typeInfo.label}</span>
                      <span>{formatDate(app.createdAt)}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Детали заявки */}
            {selectedApp ? (
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Детали заявки</h3>
                  <button
                    onClick={() => deleteApplication(selectedApp.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Статус */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Статус</label>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(statusLabels).map(([key, info]) => {
                      const Icon = info.icon;
                      return (
                        <button
                          key={key}
                          onClick={() => updateStatus(selectedApp.id, key)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${selectedApp.status === key
                              ? info.color + ' ring-2 ring-offset-1 ring-gray-300'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                          <Icon className="w-4 h-4" />
                          {info.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Данные */}
                <div className="space-y-4">
                  <div className="text-xs text-gray-400 mb-2">
                    Создано: {formatDate(selectedApp.createdAt)}
                  </div>

                  {Object.entries(selectedApp.data).map(([key, value]) => {
                    if (!value || value === '') return null;

                    const labels: Record<string, string> = {
                      childName: 'ФИО ребёнка',
                      childBirthDate: 'Дата рождения',
                      parentName: 'ФИО родителя',
                      phone: 'Телефон',
                      email: 'Email',
                      agreedDates: 'Даты интенсива',
                      isFirstVisit: 'Первый визит',
                      hadDiagnostics: 'Была диагностика',
                      throughFund: 'Через фонд',
                      fundName: 'Название фонда',
                      comment: 'Комментарий',
                      name: 'Имя',
                      service: 'Услуга',
                      message: 'Сообщение',
                      registrationAddress: 'Адрес прописки',
                      postalAddress: 'Почтовый адрес',
                      passportSeries: 'Серия паспорта',
                      passportNumber: 'Номер паспорта',
                      passportIssuedBy: 'Кем выдан',
                      passportIssuedDate: 'Дата выдачи паспорта',
                      birthCertSeries: 'Серия св-ва о рождении',
                      birthCertNumber: 'Номер св-ва о рождении',
                      birthCertDate: 'Дата св-ва о рождении',
                      matkapitalSeries: 'Серия маткапитала',
                      matkapitalNumber: 'Номер маткапитала',
                      matkapitalDate: 'Дата маткапитала'
                    };

                    let displayValue = value;
                    if (typeof value === 'boolean') {
                      displayValue = value ? 'Да' : 'Нет';
                    }

                    return (
                      <div key={key} className="border-b border-gray-100 pb-3">
                        <div className="text-xs font-medium text-gray-500 mb-1">
                          {labels[key] || key}
                        </div>
                        <div className="text-gray-900">{String(displayValue)}</div>
                      </div>
                    );
                  })}

                  {selectedApp.paymentFileName && (
                    <div className="border-b border-gray-100 pb-3">
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        Платёжный документ
                      </div>
                      <div className="flex items-center gap-2 text-gray-900">
                        <CreditCard className="w-4 h-4 text-green-600" />
                        {selectedApp.paymentFileName}
                      </div>
                    </div>
                  )}
                </div>

                {/* Контакты */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex gap-3">
                  {selectedApp.data.phone && (
                    <a
                      href={`tel:${selectedApp.data.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      <Phone className="w-4 h-4" />
                      Позвонить
                    </a>
                  )}
                  {selectedApp.data.email && (
                    <a
                      href={`mailto:${selectedApp.data.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <Mail className="w-4 h-4" />
                      Написать
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400">
                <Eye className="w-12 h-12 mb-4" />
                <p>Выберите заявку для просмотра</p>
              </div>
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
