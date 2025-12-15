'use client';

import { useState, useEffect, useRef } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, ChevronDown, ChevronUp, AlertCircle, CheckCircle, User, Upload, X, Image } from 'lucide-react';

interface Specialist {
  id: string;
  name: string;
  position: string;
  description?: string;
  image?: string;
  education?: string[];
  experience?: string;
  specializations?: string[];
}

export default function SpecialistsAdmin() {
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=specialists.json', { credentials: 'include' });
      const result = await res.json();
      if (result.success) {
        setSpecialists(result.data.specialists || result.data || []);
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
        body: JSON.stringify({ 
          file: 'specialists.json', 
          data: { specialists } 
        }),
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

  const updateSpecialist = (id: string, field: keyof Specialist, value: any) => {
    setSpecialists(prev => prev.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const addSpecialist = () => {
    const newId = `specialist_${Date.now()}`;
    const newSpecialist: Specialist = {
      id: newId,
      name: 'Новый специалист',
      position: 'Должность',
      description: '',
      education: [],
      specializations: []
    };
    setSpecialists(prev => [...prev, newSpecialist]);
    setExpandedId(newId);
  };

  const deleteSpecialist = (id: string) => {
    if (confirm('Удалить этого специалиста?')) {
      setSpecialists(prev => prev.filter(s => s.id !== id));
    }
  };

  const handlePhotoUpload = async (specialistId: string, file: File) => {
    setUploadingId(specialistId);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'specialists');
      
      const specialist = specialists.find(s => s.id === specialistId);
      if (specialist) {
        const safeName = specialist.name.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '_');
        formData.append('name', `spec-${safeName}`);
      }

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const result = await res.json();

      if (result.success) {
        updateSpecialist(specialistId, 'image', result.url);
        setMessage({ type: 'success', text: 'Фото загружено!' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Ошибка загрузки' });
      }
    } catch (e) {
      setMessage({ type: 'error', text: 'Ошибка загрузки фото' });
    } finally {
      setUploadingId(null);
    }
  };

  const triggerFileInput = (specialistId: string) => {
    setExpandedId(specialistId);
    const input = document.getElementById(`file-${specialistId}`) as HTMLInputElement;
    if (input) input.click();
  };

  if (isLoading) {
    return (
      <AdminLayout title="Специалисты" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Специалисты" description="Управление командой специалистов">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
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
          onClick={addSpecialist}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          <Plus className="w-5 h-5" />
          Добавить специалиста
        </button>
      </div>

      <div className="space-y-4">
        {specialists.map((specialist) => (
          <div key={specialist.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div 
              className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setExpandedId(expandedId === specialist.id ? null : specialist.id)}
            >
              {specialist.image ? (
                <img 
                  src={specialist.image} 
                  alt={specialist.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-800 truncate">{specialist.name}</div>
                <div className="text-sm text-gray-500 truncate">{specialist.position}</div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); deleteSpecialist(specialist.id); }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              {expandedId === specialist.id ? 
                <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                <ChevronDown className="w-5 h-5 text-gray-400" />
              }
            </div>

            {expandedId === specialist.id && (
              <div className="p-4 space-y-4 border-t border-gray-200">
                {/* Фото */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Фотография</label>
                  <div className="flex items-start gap-4">
                    {specialist.image ? (
                      <div className="relative">
                        <img 
                          src={specialist.image} 
                          alt={specialist.name}
                          className="w-32 h-32 rounded-lg object-cover border border-gray-200"
                        />
                        <button
                          onClick={() => updateSpecialist(specialist.id, 'image', '')}
                          className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Image className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <div className="flex-1">
                      <input
                        type="file"
                        id={`file-${specialist.id}`}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handlePhotoUpload(specialist.id, file);
                        }}
                      />
                      <button
                        onClick={() => triggerFileInput(specialist.id)}
                        disabled={uploadingId === specialist.id}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition disabled:opacity-50"
                      >
                        <Upload className="w-4 h-4" />
                        {uploadingId === specialist.id ? 'Загрузка...' : 'Загрузить фото'}
                      </button>
                      <p className="text-xs text-gray-500 mt-2">JPG, PNG или WebP. Рекомендуется 400x400px</p>
                      <input
                        type="text"
                        value={specialist.image || ''}
                        onChange={(e) => updateSpecialist(specialist.id, 'image', e.target.value)}
                        placeholder="Или укажите URL вручную"
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ФИО</label>
                    <input
                      type="text"
                      value={specialist.name}
                      onChange={(e) => updateSpecialist(specialist.id, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Должность</label>
                    <input
                      type="text"
                      value={specialist.position}
                      onChange={(e) => updateSpecialist(specialist.id, 'position', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Опыт работы</label>
                    <input
                      type="text"
                      value={specialist.experience || ''}
                      onChange={(e) => updateSpecialist(specialist.id, 'experience', e.target.value)}
                      placeholder="Например: 15 лет"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
                  <textarea
                    value={specialist.description || ''}
                    onChange={(e) => updateSpecialist(specialist.id, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Образование (каждое с новой строки)
                  </label>
                  <textarea
                    value={(specialist.education || []).join('\n')}
                    onChange={(e) => updateSpecialist(specialist.id, 'education', e.target.value.split('\n').filter(x => x.trim()))}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Специализации (каждая с новой строки)
                  </label>
                  <textarea
                    value={(specialist.specializations || []).join('\n')}
                    onChange={(e) => updateSpecialist(specialist.id, 'specializations', e.target.value.split('\n').filter(x => x.trim()))}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {specialists.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Нет специалистов. Нажмите "Добавить специалиста" чтобы создать первого.
        </div>
      )}
    </AdminLayout>
  );
}
