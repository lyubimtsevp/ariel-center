'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, Phone, Mail, MapPin, Globe, FileCheck, AlertCircle, CheckCircle } from 'lucide-react';

interface PhoneEntry {
  number: string;
  label: string;
}

interface AddressEntry {
  city: string;
  street: string;
  label: string;
}

interface SocialEntry {
  name: string;
  url: string;
  icon: string;
}

interface SiteData {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phones: PhoneEntry[];
  email: string;
  addresses: AddressEntry[];
  workHours: string;
  socials: SocialEntry[];
  licenses: {
    medical: string;
    education: string;
  };
  copyright: string;
}

export default function SiteSettingsPage() {
  const [data, setData] = useState<SiteData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=site.json', { credentials: 'include' });
      const result = await res.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = async () => {
    if (!data) return;
    setIsSaving(true);
    setMessage(null);

    try {
      const res = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file: 'site.json', data }),
        credentials: 'include'
      });

      const result = await res.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Настройки сохранены!' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Ошибка сохранения' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Ошибка сохранения' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const addPhone = () => {
    if (!data) return;
    setData({
      ...data,
      phones: [...data.phones, { number: '', label: '' }]
    });
  };

  const removePhone = (index: number) => {
    if (!data) return;
    setData({
      ...data,
      phones: data.phones.filter((_, i) => i !== index)
    });
  };

  const updatePhone = (index: number, field: keyof PhoneEntry, value: string) => {
    if (!data) return;
    setData({
      ...data,
      phones: data.phones.map((p, i) => i === index ? { ...p, [field]: value } : p)
    });
  };

  const addAddress = () => {
    if (!data) return;
    setData({
      ...data,
      addresses: [...data.addresses, { city: '', street: '', label: '' }]
    });
  };

  const removeAddress = (index: number) => {
    if (!data) return;
    setData({
      ...data,
      addresses: data.addresses.filter((_, i) => i !== index)
    });
  };

  const updateAddress = (index: number, field: keyof AddressEntry, value: string) => {
    if (!data) return;
    setData({
      ...data,
      addresses: data.addresses.map((a, i) => i === index ? { ...a, [field]: value } : a)
    });
  };

  const addSocial = () => {
    if (!data) return;
    setData({
      ...data,
      socials: [...data.socials, { name: '', url: '', icon: 'link' }]
    });
  };

  const removeSocial = (index: number) => {
    if (!data) return;
    setData({
      ...data,
      socials: data.socials.filter((_, i) => i !== index)
    });
  };

  const updateSocial = (index: number, field: keyof SocialEntry, value: string) => {
    if (!data) return;
    setData({
      ...data,
      socials: data.socials.map((s, i) => i === index ? { ...s, [field]: value } : s)
    });
  };

  if (isLoading) {
    return (
      <AdminLayout title="Настройки сайта" description="Контакты, соцсети, лицензии">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  if (!data) {
    return (
      <AdminLayout title="Настройки сайта" description="Контакты, соцсети, лицензии">
        <div className="text-center py-12 text-red-600">Ошибка загрузки данных</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Настройки сайта" description="Контакты в шапке и подвале, соцсети, лицензии">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-800 text-sm">
          <strong>💡 Здесь редактируются данные в шапке и подвале сайта:</strong> телефоны, email, адреса, соцсети, лицензии.
        </p>
      </div>

      <div className="space-y-8">
        {/* Название организации */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-600" />
            Название организации
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Полное название</label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Короткое название</label>
              <input
                type="text"
                value={data.shortName}
                onChange={(e) => setData({ ...data, shortName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Слоган</label>
              <input
                type="text"
                value={data.tagline}
                onChange={(e) => setData({ ...data, tagline: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Копирайт (внизу сайта)</label>
              <input
                type="text"
                value={data.copyright}
                onChange={(e) => setData({ ...data, copyright: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-1">Описание (в подвале)</label>
            <textarea
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Телефоны */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              Телефоны
            </h3>
            <button onClick={addPhone} className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <Plus className="w-4 h-4" /> Добавить
            </button>
          </div>
          <div className="space-y-3">
            {data.phones.map((phone, index) => (
              <div key={index} className="flex gap-3 items-center">
                <input
                  type="text"
                  value={phone.number}
                  onChange={(e) => updatePhone(index, 'number', e.target.value)}
                  placeholder="+7 (xxx) xxx-xx-xx"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={phone.label}
                  onChange={(e) => updatePhone(index, 'label', e.target.value)}
                  placeholder="Основной"
                  className="w-40 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <button onClick={() => removePhone(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Email и график */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-purple-600" />
            Email и график работы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">График работы</label>
              <input
                type="text"
                value={data.workHours}
                onChange={(e) => setData({ ...data, workHours: e.target.value })}
                placeholder="Пн-Пт: 9:00-18:00"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Адреса */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              Адреса
            </h3>
            <button onClick={addAddress} className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <Plus className="w-4 h-4" /> Добавить
            </button>
          </div>
          <div className="space-y-4">
            {data.addresses.map((addr, index) => (
              <div key={index} className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={addr.city}
                    onChange={(e) => updateAddress(index, 'city', e.target.value)}
                    placeholder="Город"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    value={addr.street}
                    onChange={(e) => updateAddress(index, 'street', e.target.value)}
                    placeholder="Улица, дом"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    value={addr.label}
                    onChange={(e) => updateAddress(index, 'label', e.target.value)}
                    placeholder="Название (Основной, Подразделение)"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <button onClick={() => removeAddress(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Соцсети */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              Социальные сети
            </h3>
            <button onClick={addSocial} className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <Plus className="w-4 h-4" /> Добавить
            </button>
          </div>
          <div className="space-y-3">
            {data.socials.map((social, index) => (
              <div key={index} className="flex gap-3 items-center">
                <input
                  type="text"
                  value={social.name}
                  onChange={(e) => updateSocial(index, 'name', e.target.value)}
                  placeholder="ВКонтакте"
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="url"
                  value={social.url}
                  onChange={(e) => updateSocial(index, 'url', e.target.value)}
                  placeholder="https://vk.com/..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <select
                  value={social.icon}
                  onChange={(e) => updateSocial(index, 'icon', e.target.value)}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="vk">ВКонтакте</option>
                  <option value="telegram">Telegram</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="ok">Одноклассники</option>
                  <option value="youtube">YouTube</option>
                  <option value="link">Другое</option>
                </select>
                <button onClick={() => removeSocial(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Лицензии */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-amber-600" />
            Номера лицензий (отображаются в подвале)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Медицинская лицензия</label>
              <input
                type="text"
                value={data.licenses.medical}
                onChange={(e) => setData({ ...data, licenses: { ...data.licenses, medical: e.target.value } })}
                placeholder="№Л041-..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Образовательная лицензия</label>
              <input
                type="text"
                value={data.licenses.education}
                onChange={(e) => setData({ ...data, licenses: { ...data.licenses, education: e.target.value } })}
                placeholder="№Л035-..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={saveData}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition"
        >
          <Save className="w-5 h-5" />
          {isSaving ? 'Сохранение...' : 'Сохранить изменения'}
        </button>
      </div>
    </AdminLayout>
  );
}
