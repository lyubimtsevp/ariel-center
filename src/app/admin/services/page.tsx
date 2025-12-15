'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, ChevronDown, ChevronUp, AlertCircle, CheckCircle, Stethoscope } from 'lucide-react';

interface Direction {
  id: string;
  category: string;
  name: string;
  subtitle?: string;
  description: string;
  fullDescription?: string[];
  includes?: string[];
  duration?: string;
  price?: string;
  priceNote?: string;
}

interface ServicesData {
  directions: Direction[];
}

export default function ServicesAdmin() {
  const [data, setData] = useState<ServicesData>({ directions: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=services.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'services.json', data }),
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

  const directions = data.directions || [];

  const updateDirection = (id: string, field: keyof Direction, value: any) => {
    setData(prev => ({
      ...prev,
      directions: prev.directions.map(d => d.id === id ? { ...d, [field]: value } : d)
    }));
  };

  const addDirection = () => {
    const newId = 'service_' + Date.now();
    setData(prev => ({
      ...prev,
      directions: [...prev.directions, {
        id: newId,
        category: 'medical',
        name: 'Новая услуга',
        description: 'Описание услуги'
      }]
    }));
    setExpandedId(newId);
  };

  const deleteDirection = (id: string) => {
    if (confirm('Удалить эту услугу?')) {
      setData(prev => ({
        ...prev,
        directions: prev.directions.filter(d => d.id !== id)
      }));
    }
  };

  const updateArrayField = (id: string, field: 'fullDescription' | 'includes', index: number, value: string) => {
    setData(prev => ({
      ...prev,
      directions: prev.directions.map(d => {
        if (d.id !== id) return d;
        const arr = [...(d[field] || [])];
        arr[index] = value;
        return { ...d, [field]: arr };
      })
    }));
  };

  const addArrayItem = (id: string, field: 'fullDescription' | 'includes') => {
    setData(prev => ({
      ...prev,
      directions: prev.directions.map(d => {
        if (d.id !== id) return d;
        return { ...d, [field]: [...(d[field] || []), ''] };
      })
    }));
  };

  const removeArrayItem = (id: string, field: 'fullDescription' | 'includes', index: number) => {
    setData(prev => ({
      ...prev,
      directions: prev.directions.map(d => {
        if (d.id !== id) return d;
        const arr = [...(d[field] || [])];
        arr.splice(index, 1);
        return { ...d, [field]: arr };
      })
    }));
  };

  if (isLoading) {
    return (
      <AdminLayout title="Услуги" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Услуги центра" description="Редактирование направлений и услуг">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-6">
        <button onClick={handleSave} disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition disabled:opacity-50">
          <Save className="w-5 h-5" />
          {isSaving ? 'Сохранение...' : 'Сохранить изменения'}
        </button>
        <button onClick={addDirection}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
          <Plus className="w-5 h-5" />
          Добавить услугу
        </button>
      </div>

      <div className="space-y-4">
        {directions.map((dir) => (
          <div key={dir.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100"
              onClick={() => setExpandedId(expandedId === dir.id ? null : dir.id)}>
              <Stethoscope className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-800">{dir.name}</div>
                <div className="text-sm text-gray-500 truncate">{dir.subtitle || dir.description?.slice(0, 60) + '...'}</div>
              </div>
              <span className="text-xs px-2 py-1 bg-gray-200 rounded">{dir.category}</span>
              <button onClick={(e) => { e.stopPropagation(); deleteDirection(dir.id); }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                <Trash2 className="w-4 h-4" />
              </button>
              {expandedId === dir.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </div>

            {expandedId === dir.id && (
              <div className="p-4 border-t border-gray-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                    <input type="text" value={dir.id} onChange={(e) => updateDirection(dir.id, 'id', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Категория</label>
                    <select value={dir.category} onChange={(e) => updateDirection(dir.id, 'category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="medical">Медицинская</option>
                      <option value="educational">Образовательная</option>
                      <option value="therapy">Терапия</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Название</label>
                  <input type="text" value={dir.name} onChange={(e) => updateDirection(dir.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Подзаголовок</label>
                  <input type="text" value={dir.subtitle || ''} onChange={(e) => updateDirection(dir.id, 'subtitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Краткое описание</label>
                  <textarea value={dir.description} onChange={(e) => updateDirection(dir.id, 'description', e.target.value)}
                    rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Длительность</label>
                    <input type="text" value={dir.duration || ''} onChange={(e) => updateDirection(dir.id, 'duration', e.target.value)}
                      placeholder="4 недели" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Цена</label>
                    <input type="text" value={dir.price || ''} onChange={(e) => updateDirection(dir.id, 'price', e.target.value)}
                      placeholder="от 150 000 ₽" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Примечание к цене</label>
                    <input type="text" value={dir.priceNote || ''} onChange={(e) => updateDirection(dir.id, 'priceNote', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Полное описание (абзацы)</label>
                  {(dir.fullDescription || []).map((para, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <textarea value={para} onChange={(e) => updateArrayField(dir.id, 'fullDescription', idx, e.target.value)}
                        rows={2} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                      <button onClick={() => removeArrayItem(dir.id, 'fullDescription', idx)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                  <button onClick={() => addArrayItem(dir.id, 'fullDescription')}
                    className="text-sm text-blue-600 hover:text-blue-800">+ Добавить абзац</button>
                </div>

                {/* Includes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Что входит</label>
                  {(dir.includes || []).map((item, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input type="text" value={item} onChange={(e) => updateArrayField(dir.id, 'includes', idx, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                      <button onClick={() => removeArrayItem(dir.id, 'includes', idx)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                  <button onClick={() => addArrayItem(dir.id, 'includes')}
                    className="text-sm text-blue-600 hover:text-blue-800">+ Добавить пункт</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {directions.length === 0 && (
        <div className="text-center py-12 text-gray-500">Нет услуг. Нажмите "Добавить услугу".</div>
      )}
    </AdminLayout>
  );
}
