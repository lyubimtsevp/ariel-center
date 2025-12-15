'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, AlertCircle, CheckCircle, Building2, Plus, Trash2 } from 'lucide-react';

interface CompanyData {
  name?: string;
  short_description?: string;
  full_description?: string[];
  philosophy?: string;
  approach?: string;
  medical_license?: string;
  educational_license?: string;
  social_project_note?: string;
  stats?: {
    years?: string;
    families?: string;
  };
}

export default function CompanyAdmin() {
  const [data, setData] = useState<CompanyData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=company.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'company.json', data }),
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

  const updateField = (field: string, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const updateStats = (field: string, value: string) => {
    setData(prev => ({ ...prev, stats: { ...prev.stats, [field]: value } }));
  };

  const updateDescription = (index: number, value: string) => {
    const newDesc = [...(data.full_description || [])];
    newDesc[index] = value;
    setData(prev => ({ ...prev, full_description: newDesc }));
  };

  const addDescription = () => {
    setData(prev => ({ ...prev, full_description: [...(prev.full_description || []), ''] }));
  };

  const removeDescription = (index: number) => {
    setData(prev => ({
      ...prev,
      full_description: (prev.full_description || []).filter((_, i) => i !== index)
    }));
  };

  if (isLoading) {
    return (
      <AdminLayout title="О компании" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Информация о центре" description="Редактирование данных о компании">
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

      <div className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600" /> Основная информация
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Название</label>
              <input type="text" value={data.name || ''}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Краткое описание</label>
              <textarea value={data.short_description || ''}
                onChange={(e) => updateField('short_description', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Полное описание (абзацы)</h3>
            <button onClick={addDescription} className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
              <Plus className="w-4 h-4" /> Добавить абзац
            </button>
          </div>
          <div className="space-y-3">
            {(data.full_description || []).map((para, index) => (
              <div key={index} className="flex gap-2">
                <textarea value={para}
                  onChange={(e) => updateDescription(index, e.target.value)}
                  rows={3}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                <button onClick={() => removeDescription(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy & Approach */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Философия и подход</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Философия</label>
              <textarea value={data.philosophy || ''}
                onChange={(e) => updateField('philosophy', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Подход к работе</label>
              <textarea value={data.approach || ''}
                onChange={(e) => updateField('approach', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Примечание о социальном проекте</label>
              <textarea value={data.social_project_note || ''}
                onChange={(e) => updateField('social_project_note', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Licenses */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Лицензии</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Медицинская лицензия</label>
              <input type="text" value={data.medical_license || ''}
                onChange={(e) => updateField('medical_license', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Образовательная лицензия</label>
              <input type="text" value={data.educational_license || ''}
                onChange={(e) => updateField('educational_license', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Статистика</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Лет работы</label>
              <input type="text" value={data.stats?.years || ''}
                onChange={(e) => updateStats('years', e.target.value)}
                placeholder="8+"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Количество семей</label>
              <input type="text" value={data.stats?.families || ''}
                onChange={(e) => updateStats('families', e.target.value)}
                placeholder="1000+"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
