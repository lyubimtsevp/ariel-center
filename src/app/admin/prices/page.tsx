'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, AlertCircle, CheckCircle, DollarSign} from 'lucide-react';

interface PriceItem {
  code?: string;
  name: string;
  price: number;
  note?: string;
}

interface PricesData {
  mainServices?: PriceItem[];
  [key: string]: any;
}

export default function PricesAdmin() {
  const [data, setData] = useState<PricesData>({ mainServices: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=prices.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'prices.json', data }),
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

  const services = data.mainServices || [];

  const addService = () => {
    setData(prev => ({
      ...prev,
      mainServices: [...(prev.mainServices || []), { name: 'Новая услуга', price: 0 }]
    }));
  };

  const updateService = (index: number, field: keyof PriceItem, value: any) => {
    const newServices = [...services];
    newServices[index] = { ...newServices[index], [field]: value };
    setData(prev => ({ ...prev, mainServices: newServices }));
  };

  const deleteService = (index: number) => {
    if (confirm('Удалить эту позицию?')) {
      setData(prev => ({
        ...prev,
        mainServices: (prev.mainServices || []).filter((_, i) => i !== index)
      }));
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Цены" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Прайс-лист" description="Управление ценами на услуги">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
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
        <button
          onClick={addService}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          <Plus className="w-5 h-5" />
          Добавить услугу
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-600" />
          <span className="font-semibold">Основные услуги ({services.length})</span>
        </div>
        
        <div className="divide-y divide-gray-100">
          {services.map((item, index) => (
            <div key={index} className="p-4 hover:bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-500 mb-1">Код</label>
                  <input
                    type="text"
                    value={item.code || ''}
                    onChange={(e) => updateService(index, 'code', e.target.value)}
                    placeholder="В01.035.003"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                  />
                </div>
                <div className="md:col-span-5">
                  <label className="block text-xs text-gray-500 mb-1">Название</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => updateService(index, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-500 mb-1">Цена (руб)</label>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => updateService(index, 'price', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-bold"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-500 mb-1">Примечание</label>
                  <input
                    type="text"
                    value={item.note || ''}
                    onChange={(e) => updateService(index, 'note', e.target.value)}
                    placeholder="Примечание"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div className="md:col-span-1 flex items-end">
                  <button
                    onClick={() => deleteService(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {services.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Нет услуг. Нажмите "Добавить услугу".
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
