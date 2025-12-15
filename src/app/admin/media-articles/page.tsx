'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, AlertCircle, CheckCircle, Calendar, Eye, EyeOff, ExternalLink, Play, FileText } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  source: string;
  date: string;
  type: 'article' | 'video';
  url: string;
  excerpt: string;
  image: string;
  published: boolean;
}

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: boolean;
}

interface MediaData {
  articles: Article[];
  videos: Video[];
}

export default function MediaArticlesAdmin() {
  const [data, setData] = useState<MediaData>({ articles: [], videos: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'articles' | 'videos'>('articles');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=media-articles.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'media-articles.json', data }),
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

  const addArticle = () => {
    setData(prev => ({
      ...prev,
      articles: [...prev.articles, {
        id: Date.now().toString(),
        title: 'Новая публикация',
        source: '',
        date: new Date().toISOString().split('T')[0],
        type: 'article',
        url: '',
        excerpt: '',
        image: '',
        published: false
      }]
    }));
  };

  const addVideo = () => {
    setData(prev => ({
      ...prev,
      videos: [...prev.videos, {
        id: Date.now().toString(),
        title: 'Новое видео',
        url: '',
        thumbnail: '',
        published: false
      }]
    }));
  };

  const updateArticle = (id: string, field: keyof Article, value: any) => {
    setData(prev => ({
      ...prev,
      articles: prev.articles.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const updateVideo = (id: string, field: keyof Video, value: any) => {
    setData(prev => ({
      ...prev,
      videos: prev.videos.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const deleteArticle = (id: string) => {
    if (confirm('Удалить эту публикацию?')) {
      setData(prev => ({ ...prev, articles: prev.articles.filter(item => item.id !== id) }));
    }
  };

  const deleteVideo = (id: string) => {
    if (confirm('Удалить это видео?')) {
      setData(prev => ({ ...prev, videos: prev.videos.filter(item => item.id !== id) }));
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Медиа (СМИ)" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Медиа (СМИ)" description="Статьи, репортажи и видео о центре">
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
      </div>

      {/* Табы */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('articles')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${activeTab === 'articles' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          <FileText className="w-4 h-4" />
          Публикации ({data.articles.length})
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${activeTab === 'videos' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          <Play className="w-4 h-4" />
          Видео ({data.videos.length})
        </button>
      </div>

      {activeTab === 'articles' && (
        <>
          <div className="mb-4">
            <button onClick={addArticle} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
              <Plus className="w-5 h-5" />
              Добавить публикацию
            </button>
          </div>

          <div className="space-y-4">
            {data.articles.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateArticle(item.id, 'published', !item.published)}
                      className={`p-2 rounded-lg ${item.published ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                    >
                      {item.published ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>
                    <select
                      value={item.type}
                      onChange={(e) => updateArticle(item.id, 'type', e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="article">Статья</option>
                      <option value="video">Видеорепортаж</option>
                    </select>
                  </div>
                  <button onClick={() => deleteArticle(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updateArticle(item.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Источник (СМИ)</label>
                    <input
                      type="text"
                      value={item.source}
                      onChange={(e) => updateArticle(item.id, 'source', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="НСК ТВ, Комсомольская правда..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Дата
                    </label>
                    <input
                      type="date"
                      value={item.date}
                      onChange={(e) => updateArticle(item.id, 'date', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <ExternalLink className="w-4 h-4 inline mr-1" />
                      Ссылка
                    </label>
                    <input
                      type="url"
                      value={item.url}
                      onChange={(e) => updateArticle(item.id, 'url', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
                  <textarea
                    value={item.excerpt}
                    onChange={(e) => updateArticle(item.id, 'excerpt', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            ))}

            {data.articles.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-500">Публикаций нет. Нажмите "Добавить публикацию".</p>
              </div>
            )}
          </div>
        </>
      )}

      {activeTab === 'videos' && (
        <>
          <div className="mb-4">
            <button onClick={addVideo} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
              <Plus className="w-5 h-5" />
              Добавить видео
            </button>
          </div>

          <div className="space-y-4">
            {data.videos.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <button
                    onClick={() => updateVideo(item.id, 'published', !item.published)}
                    className={`p-2 rounded-lg ${item.published ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                  >
                    {item.published ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                  <button onClick={() => deleteVideo(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Название видео</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updateVideo(item.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Play className="w-4 h-4 inline mr-1" />
                      Ссылка на видео (YouTube)
                    </label>
                    <input
                      type="url"
                      value={item.url}
                      onChange={(e) => updateVideo(item.id, 'url', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="https://youtube.com/watch?v=..."
                    />
                  </div>
                </div>
              </div>
            ))}

            {data.videos.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-500">Видео нет. Нажмите "Добавить видео".</p>
              </div>
            )}
          </div>
        </>
      )}
    </AdminLayout>
  );
}
