'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, AlertCircle, CheckCircle, Calendar, Eye, EyeOff } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  published: boolean;
}

export default function NewsAdmin() {
  const [data, setData] = useState<{ items: NewsItem[] }>({ items: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=news.json', { credentials: 'include' });
      const result = await res.json();
      if (result.success) setData(result.data);
    } catch (e) {
      setMessage({ type: 'error', text: 'Ошибка загрузки' });
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
        body: JSON.stringify({ file: 'news.json', data }),
        credentials: 'include'
      });
      const result = await res.json();
      if (result.success) {
        setMessage({ type: 'success', text: 'Сохранено!' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Ошибка' });
      }
    } catch (e) {
      setMessage({ type: 'error', text: 'Ошибка соединения' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const addItem = () => {
    setData(prev => ({
      items: [...prev.items, {
        id: Date.now().toString(),
        title: 'Новая новость',
        date: new Date().toISOString().split('T')[0],
        excerpt: '',
        content: '',
        image: '',
        published: false
      }]
    }));
  };

  const updateItem = (id: string, field: keyof NewsItem, value: any) => {
    setData(prev => ({
      items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteItem = (id: string) => {
    if (confirm('Удалить эту новость?')) {
      setData(prev => ({ items: prev.items.filter(item => item.id !== id) }));
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Новости" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Новости" description="Управление новостями центра">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-6">
        <button onClick={handleSave} disabled={isSaving} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition disabled:opacity-50">
          <Save className="w-5 h-5" />
          {isSaving ? 'Сохранение...' : 'Сохранить'}
        </button>
        <button onClick={addItem} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
          <Plus className="w-5 h-5" />
          Добавить новость
        </button>
      </div>

      <div className="space-y-4">
        {data.items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateItem(item.id, 'published', !item.published)}
                  className={`p-2 rounded-lg ${item.published ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                  title={item.published ? 'Опубликовано' : 'Скрыто'}
                >
                  {item.published ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
                <span className="text-sm text-gray-500">{item.published ? 'Опубликовано' : 'Черновик'}</span>
              </div>
              <button onClick={() => deleteItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateItem(item.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Дата
                </label>
                <input
                  type="date"
                  value={item.date}
                  onChange={(e) => updateItem(item.id, 'date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Краткое описание</label>
              <textarea
                value={item.excerpt}
                onChange={(e) => updateItem(item.id, 'excerpt', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Полный текст (HTML)</label>
              <textarea
                value={item.content}
                onChange={(e) => updateItem(item.id, 'content', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
              />
            </div>
          </div>
        ))}

        {data.items.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500">Новостей пока нет. Нажмите "Добавить новость".</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
