'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, ChevronDown, ChevronUp, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  faq: FAQItem[];
}

export default function FAQAdmin() {
  const [data, setData] = useState<FAQData>({ faq: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=faq.json', { credentials: 'include' });
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
        body: JSON.stringify({ file: 'faq.json', data }),
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

  const faqItems = data.faq || [];

  const addQuestion = () => {
    const newIndex = faqItems.length;
    setData(prev => ({
      ...prev,
      faq: [...(prev.faq || []), { question: 'Новый вопрос?', answer: 'Ответ на вопрос' }]
    }));
    setExpandedIndex(newIndex);
  };

  const updateQuestion = (index: number, field: keyof FAQItem, value: string) => {
    const newFaq = [...faqItems];
    newFaq[index] = { ...newFaq[index], [field]: value };
    setData(prev => ({ ...prev, faq: newFaq }));
  };

  const deleteQuestion = (index: number) => {
    if (confirm('Удалить этот вопрос?')) {
      setData(prev => ({
        ...prev,
        faq: (prev.faq || []).filter((_, i) => i !== index)
      }));
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="FAQ" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Вопросы и ответы" description="Редактирование FAQ">
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
          onClick={addQuestion}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          <Plus className="w-5 h-5" />
          Добавить вопрос
        </button>
      </div>

      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div 
              className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <HelpCircle className="w-5 h-5 text-purple-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-800 truncate">{item.question}</div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); deleteQuestion(index); }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              {expandedIndex === index ? 
                <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                <ChevronDown className="w-5 h-5 text-gray-400" />
              }
            </div>

            {expandedIndex === index && (
              <div className="p-4 border-t border-gray-200 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Вопрос</label>
                  <input
                    type="text"
                    value={item.question}
                    onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ответ</label>
                  <textarea
                    value={item.answer}
                    onChange={(e) => updateQuestion(index, 'answer', e.target.value)}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {faqItems.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Нет вопросов. Нажмите "Добавить вопрос" чтобы создать первый.
        </div>
      )}
    </AdminLayout>
  );
}
