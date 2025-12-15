'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, AlertCircle, CheckCircle, Truck, GripVertical } from 'lucide-react';

interface LogisticsData {
  title: string;
  description: string;
  features: string[];
  process: string[];
  priceRange: string;
  note: string;
}

export default function LogisticsAdmin() {
  const [data, setData] = useState<LogisticsData>({
    title: '',
    description: '',
    features: [],
    process: [],
    priceRange: '',
    note: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=logistics.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'logistics.json', data }),
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

  const updateField = (field: keyof LogisticsData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const addFeature = () => {
    setData(prev => ({ ...prev, features: [...prev.features, ''] }));
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...data.features];
    newFeatures[index] = value;
    setData(prev => ({ ...prev, features: newFeatures }));
  };

  const removeFeature = (index: number) => {
    setData(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }));
  };

  const addProcessStep = () => {
    setData(prev => ({ ...prev, process: [...prev.process, ''] }));
  };

  const updateProcessStep = (index: number, value: string) => {
    const newProcess = [...data.process];
    newProcess[index] = value;
    setData(prev => ({ ...prev, process: newProcess }));
  };

  const removeProcessStep = (index: number) => {
    setData(prev => ({ ...prev, process: prev.process.filter((_, i) => i !== index) }));
  };

  if (isLoading) {
    return (
      <AdminLayout title="Логистика" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Логистика и проживание" description="Информация о жилье и логистике">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      <div className="mb-6">
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
        {/* Основная информация */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-800">Основная информация</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок раздела</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => updateField('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
              <textarea
                value={data.description}
                onChange={(e) => updateField('description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Диапазон цен</label>
                <input
                  type="text"
                  value={data.priceRange}
                  onChange={(e) => updateField('priceRange', e.target.value)}
                  placeholder="от 1500 рублей в сутки"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Примечание</label>
                <input
                  type="text"
                  value={data.note}
                  onChange={(e) => updateField('note', e.target.value)}
                  placeholder="Мы не навязываем. Выбор за Вами!"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Особенности */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Особенности и преимущества</h3>
            <button
              onClick={addFeature}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-50 text-green-600 hover:bg-green-100 rounded-lg transition"
            >
              <Plus className="w-4 h-4" />
              Добавить
            </button>
          </div>
          
          <div className="space-y-2">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <GripVertical className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  placeholder="Особенность..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => removeFeature(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {data.features.length === 0 && (
              <p className="text-gray-400 text-sm text-center py-4">Нет особенностей</p>
            )}
          </div>
        </div>

        {/* Процесс бронирования */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Процесс бронирования</h3>
            <button
              onClick={addProcessStep}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition"
            >
              <Plus className="w-4 h-4" />
              Добавить шаг
            </button>
          </div>
          
          <div className="space-y-2">
            {data.process.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium shrink-0">
                  {index + 1}
                </div>
                <input
                  type="text"
                  value={step}
                  onChange={(e) => updateProcessStep(index, e.target.value)}
                  placeholder="Шаг процесса..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => removeProcessStep(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {data.process.length === 0 && (
              <p className="text-gray-400 text-sm text-center py-4">Нет шагов</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
