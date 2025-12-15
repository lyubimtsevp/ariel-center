'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, AlertCircle, CheckCircle, Image, Upload } from 'lucide-react';

interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  images: string[];
}

export default function GalleryAdmin() {
  const [data, setData] = useState<{ albums: Album[] }>({ albums: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=gallery.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'gallery.json', data }),
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

  const addAlbum = () => {
    setData(prev => ({
      albums: [...prev.albums, {
        id: Date.now().toString(),
        title: 'Новый альбом',
        description: '',
        cover: '',
        images: []
      }]
    }));
  };

  const updateAlbum = (id: string, field: keyof Album, value: any) => {
    setData(prev => ({
      albums: prev.albums.map(album => album.id === id ? { ...album, [field]: value } : album)
    }));
  };

  const deleteAlbum = (id: string) => {
    if (confirm('Удалить этот альбом?')) {
      setData(prev => ({ albums: prev.albums.filter(album => album.id !== id) }));
    }
  };

  const addImageToAlbum = (albumId: string) => {
    const url = prompt('Введите URL изображения:');
    if (url) {
      setData(prev => ({
        albums: prev.albums.map(album =>
          album.id === albumId
            ? { ...album, images: [...album.images, url] }
            : album
        )
      }));
    }
  };

  const removeImageFromAlbum = (albumId: string, imageIndex: number) => {
    setData(prev => ({
      albums: prev.albums.map(album =>
        album.id === albumId
          ? { ...album, images: album.images.filter((_, i) => i !== imageIndex) }
          : album
      )
    }));
  };

  if (isLoading) {
    return (
      <AdminLayout title="Фотогалерея" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Фотогалерея" description="Управление фотоальбомами">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-800 text-sm">
          <strong>💡 Подсказка:</strong> Сначала загрузите фотографии через раздел "Медиафайлы", затем добавьте их URL сюда.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <button onClick={handleSave} disabled={isSaving} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition disabled:opacity-50">
          <Save className="w-5 h-5" />
          {isSaving ? 'Сохранение...' : 'Сохранить'}
        </button>
        <button onClick={addAlbum} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
          <Plus className="w-5 h-5" />
          Добавить альбом
        </button>
      </div>

      <div className="space-y-6">
        {data.albums.map((album) => (
          <div key={album.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Image className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <span className="font-medium text-gray-800">{album.title}</span>
                  <span className="text-sm text-gray-500 block">{album.images.length} фото</span>
                </div>
              </div>
              <button onClick={() => deleteAlbum(album.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Название альбома</label>
                <input
                  type="text"
                  value={album.title}
                  onChange={(e) => updateAlbum(album.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Обложка (URL)</label>
                <input
                  type="text"
                  value={album.cover}
                  onChange={(e) => updateAlbum(album.id, 'cover', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="/images/gallery/..."
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
              <input
                type="text"
                value={album.description}
                onChange={(e) => updateAlbum(album.id, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Фотографии</label>
                <button
                  onClick={() => addImageToAlbum(album.id)}
                  className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  Добавить фото
                </button>
              </div>

              {album.images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {album.images.map((img, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image className="w-8 h-8 text-gray-300" />
                      </div>
                      <button
                        onClick={() => removeImageFromAlbum(album.id, index)}
                        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                      <p className="text-xs text-gray-500 truncate mt-1">{img}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 text-center py-4 bg-gray-50 rounded-lg">
                  Нет фотографий
                </p>
              )}
            </div>
          </div>
        ))}

        {data.albums.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500">Альбомов пока нет. Нажмите "Добавить альбом".</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
