'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, AlertCircle, CheckCircle, Calendar, Eye, EyeOff, ExternalLink } from 'lucide-react';

interface ScienceItem {
  id: string;
  title: string;
  date: string;
  authors: string;
  excerpt: string;
  content: string;
  link: string;
  published: boolean;
}

export default function ScienceAdmin() {
  const [data, setData] = useState<{ items: ScienceItem[] }>({ items: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=science.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'science.json', data }),
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
        title: 'Новая публикация',
        date: new Date().toISOString().split('T')[0],
        authors: '',
        excerpt: '',
        content: '',
        link: '',
        published: false
      }]
    }));
  };

  const updateItem = (id: string, field: keyof ScienceItem, value: any) => {
    setData(prev => ({
      items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteItem = (id: string) => {
    if (confirm('Удалить эту публикацию?')) {
      setData(prev => ({ items: prev.items.filter(item => item.id !== id) }));
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Наука" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Наука" description="Управление научными публикациями">
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
          Добавить публикацию
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Название</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateItem(item.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Авторы</label>
                <input
                  type="text"
                  value={item.authors}
                  onChange={(e) => updateItem(item.id, 'authors', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Иванов И.И., Петров П.П."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Дата публикации
                </label>
                <input
                  type="date"
                  value={item.date}
                  onChange={(e) => updateItem(item.id, 'date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <ExternalLink className="w-4 h-4 inline mr-1" />
                  Ссылка на публикацию
                </label>
                <input
                  type="url"
                  value={item.link}
                  onChange={(e) => updateItem(item.id, 'link', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
              <textarea
                value={item.excerpt}
                onChange={(e) => updateItem(item.id, 'excerpt', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        ))}

        {data.items.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500">Публикаций пока нет. Нажмите "Добавить публикацию".</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
