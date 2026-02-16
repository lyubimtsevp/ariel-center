'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, ChevronDown, ChevronUp, AlertCircle, CheckCircle, FileText, FolderPlus, Upload, File, ExternalLink } from 'lucide-react';

interface Document {
  title: string;
  number?: string;
  file: string;
}

interface DocumentGroup {
  id: string;
  title: string;
  items: Document[];
}

interface DocumentsData {
  groups: DocumentGroup[];
}

export default function DocumentsAdmin() {
  const [data, setData] = useState<DocumentsData>({ groups: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [uploadingDoc, setUploadingDoc] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=documents.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'documents.json', data }),
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

  const addGroup = () => {
    const newGroup: DocumentGroup = {
      id: `group_${Date.now()}`,
      title: 'Новая группа документов',
      items: []
    };
    setData(prev => ({ groups: [...prev.groups, newGroup] }));
    setExpandedGroup(newGroup.id);
  };

  const deleteGroup = (groupId: string) => {
    if (confirm('Удалить эту группу документов?')) {
      setData(prev => ({
        groups: prev.groups.filter(g => g.id !== groupId)
      }));
    }
  };

  const updateGroup = (groupId: string, field: keyof DocumentGroup, value: any) => {
    setData(prev => ({
      groups: prev.groups.map(g =>
        g.id === groupId ? { ...g, [field]: value } : g
      )
    }));
  };

  const addDocument = (groupId: string) => {
    const newDoc: Document = {
      title: 'Новый документ',
      file: ''
    };
    setData(prev => ({
      groups: prev.groups.map(g =>
        g.id === groupId ? { ...g, items: [...g.items, newDoc] } : g
      )
    }));
  };

  const updateDocument = (groupId: string, docIndex: number, field: keyof Document, value: string) => {
    setData(prev => ({
      groups: prev.groups.map(g => {
        if (g.id !== groupId) return g;
        const newItems = [...g.items];
        newItems[docIndex] = { ...newItems[docIndex], [field]: value };
        return { ...g, items: newItems };
      })
    }));
  };

  const deleteDocument = (groupId: string, docIndex: number) => {
    setData(prev => ({
      groups: prev.groups.map(g => {
        if (g.id !== groupId) return g;
        return { ...g, items: g.items.filter((_, i) => i !== docIndex) };
      })
    }));
  };

  const handleFileUpload = async (groupId: string, docIndex: number, file: File) => {
    const uploadKey = `${groupId}-${docIndex}`;
    setUploadingDoc(uploadKey);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'docs');

      const group = data.groups.find(g => g.id === groupId);
      const doc = group?.items[docIndex];
      if (doc) {
        const safeName = doc.title.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '_');
        formData.append('name', safeName);
      }

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const result = await res.json();

      if (result.success) {
        updateDocument(groupId, docIndex, 'file', result.url);
        setMessage({ type: 'success', text: 'Документ загружен!' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Ошибка загрузки' });
      }
    } catch (e) {
      setMessage({ type: 'error', text: 'Ошибка загрузки документа' });
    } finally {
      setUploadingDoc(null);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Документы" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Документы" description="Управление лицензиями и документами">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
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
          onClick={addGroup}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          <FolderPlus className="w-5 h-5" />
          Добавить группу
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 space-y-2">
        <p className="text-blue-800 text-sm font-medium">📋 Как добавить документы:</p>
        <ol className="text-blue-700 text-sm list-decimal list-inside space-y-1">
          <li>Найдите нужную группу (например, "Финансово-хозяйственная деятельность")</li>
          <li>Нажмите на группу чтобы раскрыть её</li>
          <li>Нажмите "Добавить" внутри группы</li>
          <li>Укажите название документа и загрузите файл (PDF или HTML)</li>
          <li>Нажмите "Сохранить изменения"</li>
        </ol>
        <p className="text-blue-600 text-xs mt-2">
          💡 Нужна новая группа? Нажмите "Добавить группу" выше. Пустые группы не отображаются на сайте.
        </p>
      </div>

      <div className="space-y-4">
        {data.groups.map((group) => (
          <div key={group.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div
              className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setExpandedGroup(expandedGroup === group.id ? null : group.id)}
            >
              <FileText className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <div className="font-medium text-gray-800">{group.title}</div>
                <div className="text-sm text-gray-500">{group.items.length} документов</div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); deleteGroup(group.id); }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              {expandedGroup === group.id ?
                <ChevronUp className="w-5 h-5 text-gray-400" /> :
                <ChevronDown className="w-5 h-5 text-gray-400" />
              }
            </div>

            {expandedGroup === group.id && (
              <div className="p-4 border-t border-gray-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID группы</label>
                    <input
                      type="text"
                      value={group.id}
                      onChange={(e) => updateGroup(group.id, 'id', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Название группы</label>
                    <input
                      type="text"
                      value={group.title}
                      onChange={(e) => updateGroup(group.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-gray-700">Документы в группе</h4>
                    <button
                      onClick={() => addDocument(group.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                    >
                      <Plus className="w-4 h-4" />
                      Добавить
                    </button>
                  </div>

                  <div className="space-y-3">
                    {group.items.map((doc, docIndex) => {
                      const uploadKey = `${group.id}-${docIndex}`;
                      return (
                        <div key={docIndex} className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <div className="flex justify-between items-start">
                            <span className="text-xs text-gray-500 font-medium">Документ #{docIndex + 1}</span>
                            <button
                              onClick={() => deleteDocument(group.id, docIndex)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <input
                            type="text"
                            value={doc.title}
                            onChange={(e) => updateDocument(group.id, docIndex, 'title', e.target.value)}
                            placeholder="Название документа"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />

                          <input
                            type="text"
                            value={doc.number || ''}
                            onChange={(e) => updateDocument(group.id, docIndex, 'number', e.target.value)}
                            placeholder="Номер документа (необязательно)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />

                          <input
                              type="file"
                              id={`doc-${uploadKey}`}
                              accept=".pdf,.html"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleFileUpload(group.id, docIndex, file);
                              }}
                            />

                          {doc.file && doc.file.startsWith('/') ? (
                            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                              <File className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="flex-1 text-sm text-green-800 font-medium truncate">{doc.file.split('/').pop()}</span>
                              <a
                                href={doc.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-2 py-1 text-xs text-blue-600 hover:bg-blue-50 rounded transition"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                Открыть
                              </a>
                              <button
                                onClick={() => document.getElementById(`doc-${uploadKey}`)?.click()}
                                disabled={uploadingDoc === uploadKey}
                                className="flex items-center gap-1 px-2 py-1 text-xs text-orange-600 hover:bg-orange-50 rounded transition disabled:opacity-50"
                              >
                                <Upload className="w-3.5 h-3.5" />
                                {uploadingDoc === uploadKey ? '...' : 'Заменить'}
                              </button>
                            </div>
                          ) : (
                            <div
                              onClick={() => { if (uploadingDoc !== uploadKey) document.getElementById(`doc-${uploadKey}`)?.click(); }}
                              className={`flex flex-col items-center justify-center gap-2 py-6 border-2 border-dashed rounded-lg cursor-pointer transition ${
                                uploadingDoc === uploadKey
                                  ? 'border-blue-300 bg-blue-50'
                                  : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                              }`}
                            >
                              <Upload className={`w-8 h-8 ${uploadingDoc === uploadKey ? 'text-blue-400 animate-pulse' : 'text-gray-400'}`} />
                              <span className="text-sm text-gray-600">
                                {uploadingDoc === uploadKey ? 'Загрузка...' : 'Нажмите, чтобы загрузить файл'}
                              </span>
                              <span className="text-xs text-gray-400">PDF или HTML</span>
                            </div>
                          )}

                          <details className="text-xs">
                            <summary className="text-gray-400 cursor-pointer hover:text-gray-600">
                              Указать URL вручную (для опытных)
                            </summary>
                            <input
                              type="text"
                              value={doc.file}
                              onChange={(e) => updateDocument(group.id, docIndex, 'file', e.target.value)}
                              placeholder="/docs/filename.pdf"
                              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                            />
                          </details>
                        </div>
                      );
                    })}
                  </div>

                  {group.items.length === 0 && (
                    <div className="text-center py-4 text-gray-400 text-sm">
                      Нет документов в группе
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {data.groups.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Нет групп документов. Нажмите "Добавить группу" чтобы создать первую.
        </div>
      )}
    </AdminLayout>
  );
}
