'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, AlertCircle, CheckCircle, Phone, Mail, MapPin, Plus, Trash2, Send } from 'lucide-react';

interface Address {
  type: string;
  name: string;
  address: string;
  region?: string;
}

interface PhoneItem {
  number: string;
  formatted: string;
  type: string;
}

interface ContactsData {
  addresses?: Address[];
  phones?: PhoneItem[];
  email?: string;
  telegram?: string;
  workingHours?: { [key: string]: string };
}

export default function ContactsAdmin() {
  const [data, setData] = useState<ContactsData>({ addresses: [], phones: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=contacts.json', { credentials: 'include' });
      const result = await res.json();
      if (result.success) {
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
        body: JSON.stringify({ file: 'contacts.json', data }),
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

  const addresses = data.addresses || [];
  const phones = data.phones || [];

  const addAddress = () => {
    setData(prev => ({
      ...prev,
      addresses: [...(prev.addresses || []), { type: 'branch', name: 'Новый адрес', address: '', region: '' }]
    }));
  };

  const updateAddress = (index: number, field: keyof Address, value: string) => {
    const newAddresses = [...addresses];
    newAddresses[index] = { ...newAddresses[index], [field]: value };
    setData(prev => ({ ...prev, addresses: newAddresses }));
  };

  const deleteAddress = (index: number) => {
    if (confirm('Удалить этот адрес?')) {
      setData(prev => ({ ...prev, addresses: addresses.filter((_, i) => i !== index) }));
    }
  };

  const addPhone = () => {
    setData(prev => ({
      ...prev,
      phones: [...(prev.phones || []), { number: '+7 (___) ___-__-__', formatted: 'tel:+7', type: 'main' }]
    }));
  };

  const updatePhone = (index: number, field: keyof PhoneItem, value: string) => {
    const newPhones = [...phones];
    newPhones[index] = { ...newPhones[index], [field]: value };
    setData(prev => ({ ...prev, phones: newPhones }));
  };

  const deletePhone = (index: number) => {
    if (confirm('Удалить этот телефон?')) {
      setData(prev => ({ ...prev, phones: phones.filter((_, i) => i !== index) }));
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Контакты" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Контактная информация" description="Телефоны, адреса, email">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      <button onClick={handleSave} disabled={isSaving}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition disabled:opacity-50 mb-6">
        <Save className="w-5 h-5" />
        {isSaving ? 'Сохранение...' : 'Сохранить изменения'}
      </button>

      {/* Email & Telegram */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-600" /> Email и мессенджеры
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={data.email || ''}
              onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="info@ariel-center.ru"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telegram</label>
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-500" />
              <input type="text" value={data.telegram || ''}
                onChange={(e) => setData(prev => ({ ...prev, telegram: e.target.value }))}
                placeholder="@ariel_center"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Addresses */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" /> Адреса ({addresses.length})
          </h3>
          <button onClick={addAddress} className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <Plus className="w-4 h-4" /> Добавить
          </button>
        </div>
        <div className="space-y-4">
          {addresses.map((addr, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Тип</label>
                  <select value={addr.type} onChange={(e) => updateAddress(index, 'type', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option value="main">Главный</option>
                    <option value="branch">Подразделение</option>
                    <option value="partner">Партнёр</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Название</label>
                  <input type="text" value={addr.name} onChange={(e) => updateAddress(index, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-500 mb-1">Адрес</label>
                  <div className="flex gap-2">
                    <input type="text" value={addr.address} onChange={(e) => updateAddress(index, 'address', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                    <button onClick={() => deleteAddress(index)} className="p-2 text-red-500 hover:bg-red-100 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phones */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-600" /> Телефоны ({phones.length})
          </h3>
          <button onClick={addPhone} className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <Plus className="w-4 h-4" /> Добавить
          </button>
        </div>
        <div className="space-y-3">
          {phones.map((phone, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <select value={phone.type} onChange={(e) => updatePhone(index, 'type', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option value="main">Основной</option>
                <option value="reception">Регистратура</option>
                <option value="emergency">Экстренный</option>
                <option value="logistics">Логистика</option>
              </select>
              <input type="text" value={phone.number} onChange={(e) => updatePhone(index, 'number', e.target.value)}
                placeholder="+7 (383) 255-12-55"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium" />
              <input type="text" value={phone.formatted} onChange={(e) => updatePhone(index, 'formatted', e.target.value)}
                placeholder="tel:+73832551255"
                className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-500" />
              <button onClick={() => deletePhone(index)} className="p-2 text-red-500 hover:bg-red-100 rounded">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
