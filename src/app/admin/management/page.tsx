'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, ChevronUp, ChevronDown, AlertCircle, CheckCircle, User, Upload, X, Image, GripVertical } from 'lucide-react';

interface Manager {
  id: string;
  name: string;
  position: string;
  roles: string[];
  image: string;
  order: number;
}

interface ManagementData {
  team: Manager[];
}

export default function ManagementAdmin() {
  const [data, setData] = useState<ManagementData>({ team: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=management.json', { credentials: 'include' });
      const result = await res.json();
      if (result.success && result.data) {
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
        body: JSON.stringify({ file: 'management.json', data }),
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

  const team = data.team || [];

  const updateManager = (id: string, field: keyof Manager, value: any) => {
    setData(prev => ({
      ...prev,
      team: prev.team.map(m => m.id === id ? { ...m, [field]: value } : m)
    }));
  };

  const addManager = () => {
    const newId = `manager_${Date.now()}`;
    const maxOrder = Math.max(...team.map(m => m.order || 0), 0);
    setData(prev => ({
      ...prev,
      team: [...prev.team, {
        id: newId,
        name: 'Новый руководитель',
        position: 'Должность',
        roles: [],
        image: '',
        order: maxOrder + 1
      }]
    }));
    setExpandedId(newId);
  };

  const deleteManager = (id: string) => {
    if (confirm('Удалить этого руководителя?')) {
      setData(prev => ({
        ...prev,
        team: prev.team.filter(m => m.id !== id)
      }));
    }
  };

  const moveUp = (id: string) => {
    const index = team.findIndex(m => m.id === id);
    if (index > 0) {
      const newTeam = [...team];
      [newTeam[index - 1], newTeam[index]] = [newTeam[index], newTeam[index - 1]];
      // Пересчитываем order
      newTeam.forEach((m, i) => m.order = i + 1);
      setData(prev => ({ ...prev, team: newTeam }));
    }
  };

  const moveDown = (id: string) => {
    const index = team.findIndex(m => m.id === id);
    if (index < team.length - 1) {
      const newTeam = [...team];
      [newTeam[index], newTeam[index + 1]] = [newTeam[index + 1], newTeam[index]];
      // Пересчитываем order
      newTeam.forEach((m, i) => m.order = i + 1);
      setData(prev => ({ ...prev, team: newTeam }));
    }
  };

  const handlePhotoUpload = async (managerId: string, file: File) => {
    setUploadingId(managerId);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'specialists');
      
      const manager = team.find(m => m.id === managerId);
      if (manager) {
        const safeName = manager.name.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '_');
        formData.append('name', `manager-${safeName}`);
      }

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const result = await res.json();

      if (result.success) {
        updateManager(managerId, 'image', result.url);
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

  // Сортируем по order
  const sortedTeam = [...team].sort((a, b) => (a.order || 0) - (b.order || 0));

  if (isLoading) {
    return (
      <AdminLayout title="Руководство" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Руководство" description="Управление списком руководителей центра">
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
          onClick={addManager}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          <Plus className="w-5 h-5" />
          Добавить руководителя
        </button>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6 text-sm text-blue-700">
        <strong>Подсказка:</strong> Используйте стрелки ↑↓ справа для изменения порядка отображения. Первые двое будут показаны рядом на странице.
      </div>

      <div className="space-y-4">
        {sortedTeam.map((manager, index) => (
          <div key={manager.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div 
              className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setExpandedId(expandedId === manager.id ? null : manager.id)}
            >
              <div className="flex flex-col gap-1">
                <button
                  onClick={(e) => { e.stopPropagation(); moveUp(manager.id); }}
                  disabled={index === 0}
                  className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); moveDown(manager.id); }}
                  disabled={index === sortedTeam.length - 1}
                  className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <span className="text-sm text-gray-400 font-mono w-6">{index + 1}</span>
              
              {manager.image ? (
                <img 
                  src={manager.image} 
                  alt={manager.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-800 truncate">{manager.name}</div>
                <div className="text-sm text-gray-500 truncate">{manager.position}</div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); deleteManager(manager.id); }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {expandedId === manager.id && (
              <div className="p-4 space-y-4 border-t border-gray-200">
                {/* Фото */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Фотография</label>
                  <div className="flex items-start gap-4">
                    {manager.image ? (
                      <div className="relative">
                        <img 
                          src={manager.image} 
                          alt={manager.name}
                          className="w-32 h-32 rounded-lg object-cover border border-gray-200"
                        />
                        <button
                          onClick={() => updateManager(manager.id, 'image', '')}
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
                        id={`file-${manager.id}`}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handlePhotoUpload(manager.id, file);
                        }}
                      />
                      <button
                        onClick={() => {
                          const input = document.getElementById(`file-${manager.id}`) as HTMLInputElement;
                          if (input) input.click();
                        }}
                        disabled={uploadingId === manager.id}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition disabled:opacity-50"
                      >
                        <Upload className="w-4 h-4" />
                        {uploadingId === manager.id ? 'Загрузка...' : 'Загрузить фото'}
                      </button>
                      <p className="text-xs text-gray-500 mt-2">JPG, PNG. Рекомендуется 400x400px</p>
                      <input
                        type="text"
                        value={manager.image || ''}
                        onChange={(e) => updateManager(manager.id, 'image', e.target.value)}
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
                      value={manager.name}
                      onChange={(e) => updateManager(manager.id, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Должность</label>
                    <input
                      type="text"
                      value={manager.position}
                      onChange={(e) => updateManager(manager.id, 'position', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Роли / специализации (каждая с новой строки)
                  </label>
                  <textarea
                    value={(manager.roles || []).join('\n')}
                    onChange={(e) => updateManager(manager.id, 'roles', e.target.value.split('\n').filter(x => x.trim()))}
                    rows={4}
                    placeholder="Главный поведенческий аналитик (АВА)&#10;Клинический психолог&#10;Супервизор"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {sortedTeam.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Нет руководителей. Нажмите "Добавить руководителя" чтобы создать.
        </div>
      )}
    </AdminLayout>
  );
}
