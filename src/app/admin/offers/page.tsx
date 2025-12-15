'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, AlertCircle, CheckCircle, FileText, Calendar } from 'lucide-react';

interface OfferData {
  title: string;
  subtitle: string;
  content: string;
  lastUpdated: string;
}

export default function OffersAdmin() {
  const [activeTab, setActiveTab] = useState<'intensive' | 'matkapital'>('intensive');
  const [intensiveData, setIntensiveData] = useState<OfferData | null>(null);
  const [matkapitalData, setMatkapitalData] = useState<OfferData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [intensiveRes, matkapitalRes] = await Promise.all([
        fetch('/api/admin/data?file=offer-intensive.json', { credentials: 'include' }),
        fetch('/api/admin/data?file=offer-matkapital.json', { credentials: 'include' })
      ]);

      const intensiveResult = await intensiveRes.json();
      const matkapitalResult = await matkapitalRes.json();

      if (intensiveResult.success) setIntensiveData(intensiveResult.data);
      if (matkapitalResult.success) setMatkapitalData(matkapitalResult.data);
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
      const file = activeTab === 'intensive' ? 'offer-intensive.json' : 'offer-matkapital.json';
      const data = activeTab === 'intensive' ? intensiveData : matkapitalData;

      if (!data) return;

      // Обновляем дату изменения
      const updatedData = { ...data, lastUpdated: new Date().toISOString().split('T')[0] };

      const res = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file, data: updatedData }),
        credentials: 'include'
      });

      const result = await res.json();

      if (result.success) {
        if (activeTab === 'intensive') {
          setIntensiveData(updatedData);
        } else {
          setMatkapitalData(updatedData);
        }
        setMessage({ type: 'success', text: 'Изменения сохранены!' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Ошибка сохранения' });
      }
    } catch (e) {
      setMessage({ type: 'error', text: 'Ошибка соединения' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const currentData = activeTab === 'intensive' ? intensiveData : matkapitalData;
  const setCurrentData = activeTab === 'intensive' ? setIntensiveData : setMatkapitalData;

  if (isLoading) {
    return (
      <AdminLayout title="Договоры оферты" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Договоры оферты" description="Редактирование текстов договоров публичной оферты">
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
      </div>

      {/* Табы */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('intensive')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
            activeTab === 'intensive'
              ? 'bg-[#4A90A4] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Оферта (Интенсив)
        </button>
        <button
          onClick={() => setActiveTab('matkapital')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
            activeTab === 'matkapital'
              ? 'bg-[#F5A962] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          Оферта (Маткапитал)
        </button>
      </div>

      {currentData && (
        <div className="space-y-6">
          {/* Заголовок */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Заголовок договора</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок</label>
                <input
                  type="text"
                  value={currentData.title}
                  onChange={(e) => setCurrentData({ ...currentData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Подзаголовок</label>
                <input
                  type="text"
                  value={currentData.subtitle}
                  onChange={(e) => setCurrentData({ ...currentData, subtitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Текст договора */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Текст договора (HTML)</h3>
              <span className="text-sm text-gray-500">
                Последнее обновление: {currentData.lastUpdated}
              </span>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Подсказка:</strong> Используйте HTML-теги для форматирования:
                <br />
                <code className="bg-amber-100 px-1 rounded">&lt;h3&gt;Заголовок&lt;/h3&gt;</code> — заголовок раздела
                <br />
                <code className="bg-amber-100 px-1 rounded">&lt;p&gt;Текст&lt;/p&gt;</code> — абзац
                <br />
                <code className="bg-amber-100 px-1 rounded">&lt;ul&gt;&lt;li&gt;Пункт&lt;/li&gt;&lt;/ul&gt;</code> — список
              </p>
            </div>

            <textarea
              value={currentData.content}
              onChange={(e) => setCurrentData({ ...currentData, content: e.target.value })}
              rows={20}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="<p>Текст договора...</p>"
            />
          </div>

          {/* Предпросмотр */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Предпросмотр</h3>
            <div
              className="prose prose-sm max-w-none p-4 bg-gray-50 rounded-lg border max-h-[400px] overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: currentData.content }}
            />
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
