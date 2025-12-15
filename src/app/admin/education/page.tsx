'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Save, Plus, Trash2, ChevronDown, ChevronUp, AlertCircle, CheckCircle, GraduationCap, FileText, Users, Award } from 'lucide-react';

interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  ageGroup: string;
}

interface StudyPlan {
  id: string;
  title: string;
  file: string;
}

interface Teacher {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
}

interface EducationData {
  license: {
    number: string;
    date: string;
    issuer: string;
  };
  programs: Program[];
  studyPlans: StudyPlan[];
  teachers: Teacher[];
}

const defaultData: EducationData = {
  license: { number: '', date: '', issuer: '' },
  programs: [],
  studyPlans: [],
  teachers: []
};

export default function EducationAdmin() {
  const [data, setData] = useState<EducationData>(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>('programs');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/data?file=education.json', { credentials: 'include' });
      const result = await res.json();
      if (result.success && result.data) {
        setData({ ...defaultData, ...result.data });
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
        body: JSON.stringify({ file: 'education.json', data }),
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

  // Programs
  const addProgram = () => {
    setData(prev => ({
      ...prev,
      programs: [...prev.programs, {
        id: `program_${Date.now()}`,
        name: 'Новая программа',
        description: '',
        duration: '',
        ageGroup: ''
      }]
    }));
  };

  const updateProgram = (id: string, field: keyof Program, value: string) => {
    setData(prev => ({
      ...prev,
      programs: prev.programs.map(p => p.id === id ? { ...p, [field]: value } : p)
    }));
  };

  const deleteProgram = (id: string) => {
    if (confirm('Удалить эту программу?')) {
      setData(prev => ({ ...prev, programs: prev.programs.filter(p => p.id !== id) }));
    }
  };

  // Study Plans
  const addStudyPlan = () => {
    setData(prev => ({
      ...prev,
      studyPlans: [...prev.studyPlans, {
        id: `plan_${Date.now()}`,
        title: 'Новый документ',
        file: '/docs/'
      }]
    }));
  };

  const updateStudyPlan = (id: string, field: keyof StudyPlan, value: string) => {
    setData(prev => ({
      ...prev,
      studyPlans: prev.studyPlans.map(p => p.id === id ? { ...p, [field]: value } : p)
    }));
  };

  const deleteStudyPlan = (id: string) => {
    if (confirm('Удалить этот документ?')) {
      setData(prev => ({ ...prev, studyPlans: prev.studyPlans.filter(p => p.id !== id) }));
    }
  };

  // Teachers
  const addTeacher = () => {
    setData(prev => ({
      ...prev,
      teachers: [...prev.teachers, {
        id: `teacher_${Date.now()}`,
        name: 'ФИО педагога',
        qualification: '',
        specialization: ''
      }]
    }));
  };

  const updateTeacher = (id: string, field: keyof Teacher, value: string) => {
    setData(prev => ({
      ...prev,
      teachers: prev.teachers.map(t => t.id === id ? { ...t, [field]: value } : t)
    }));
  };

  const deleteTeacher = (id: string) => {
    if (confirm('Удалить этого педагога?')) {
      setData(prev => ({ ...prev, teachers: prev.teachers.filter(t => t.id !== id) }));
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Образование" description="Загрузка...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Образование" description="Управление образовательными программами и документами">
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
      </div>

      <div className="space-y-6">
        {/* Лицензия */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-yellow-600" />
            <h3 className="font-semibold text-gray-800">Лицензия на образовательную деятельность</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Номер лицензии</label>
              <input
                type="text"
                value={data.license?.number || ''}
                onChange={(e) => setData(prev => ({ ...prev, license: { ...prev.license, number: e.target.value } }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Дата выдачи</label>
              <input
                type="text"
                value={data.license?.date || ''}
                onChange={(e) => setData(prev => ({ ...prev, license: { ...prev.license, date: e.target.value } }))}
                placeholder="29.09.2017"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Кем выдана</label>
              <input
                type="text"
                value={data.license?.issuer || ''}
                onChange={(e) => setData(prev => ({ ...prev, license: { ...prev.license, issuer: e.target.value } }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Программы */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div 
            className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100"
            onClick={() => setExpandedSection(expandedSection === 'programs' ? null : 'programs')}
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Образовательные программы ({data.programs?.length || 0})</h3>
            </div>
            {expandedSection === 'programs' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
          
          {expandedSection === 'programs' && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={addProgram}
                className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-lg text-sm mb-4"
              >
                <Plus className="w-4 h-4" />
                Добавить программу
              </button>
              
              <div className="space-y-4">
                {data.programs?.map((program) => (
                  <div key={program.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <input
                        type="text"
                        value={program.name}
                        onChange={(e) => updateProgram(program.id, 'name', e.target.value)}
                        className="text-lg font-medium bg-transparent border-b border-transparent hover:border-gray-300 focus:border-blue-500 outline-none"
                        placeholder="Название программы"
                      />
                      <button
                        onClick={() => deleteProgram(program.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="md:col-span-3">
                        <label className="block text-xs text-gray-500 mb-1">Описание</label>
                        <textarea
                          value={program.description}
                          onChange={(e) => updateProgram(program.id, 'description', e.target.value)}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Длительность</label>
                        <input
                          type="text"
                          value={program.duration}
                          onChange={(e) => updateProgram(program.id, 'duration', e.target.value)}
                          placeholder="от 3 месяцев"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Возрастная группа</label>
                        <input
                          type="text"
                          value={program.ageGroup}
                          onChange={(e) => updateProgram(program.id, 'ageGroup', e.target.value)}
                          placeholder="от 2 до 12 лет"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Учебные планы */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div 
            className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100"
            onClick={() => setExpandedSection(expandedSection === 'plans' ? null : 'plans')}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-gray-800">Учебные планы и документы ({data.studyPlans?.length || 0})</h3>
            </div>
            {expandedSection === 'plans' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
          
          {expandedSection === 'plans' && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={addStudyPlan}
                className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-lg text-sm mb-4"
              >
                <Plus className="w-4 h-4" />
                Добавить документ
              </button>
              
              <div className="space-y-3">
                {data.studyPlans?.map((plan) => (
                  <div key={plan.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={plan.title}
                        onChange={(e) => updateStudyPlan(plan.id, 'title', e.target.value)}
                        placeholder="Название документа"
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <input
                        type="text"
                        value={plan.file}
                        onChange={(e) => updateStudyPlan(plan.id, 'file', e.target.value)}
                        placeholder="/docs/document.html"
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                      />
                    </div>
                    <button
                      onClick={() => deleteStudyPlan(plan.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Педагоги */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div 
            className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100"
            onClick={() => setExpandedSection(expandedSection === 'teachers' ? null : 'teachers')}
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-800">Педагогический состав ({data.teachers?.length || 0})</h3>
            </div>
            {expandedSection === 'teachers' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
          
          {expandedSection === 'teachers' && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={addTeacher}
                className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-lg text-sm mb-4"
              >
                <Plus className="w-4 h-4" />
                Добавить педагога
              </button>
              
              <div className="space-y-3">
                {data.teachers?.map((teacher) => (
                  <div key={teacher.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={teacher.name}
                        onChange={(e) => updateTeacher(teacher.id, 'name', e.target.value)}
                        placeholder="ФИО"
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <input
                        type="text"
                        value={teacher.qualification}
                        onChange={(e) => updateTeacher(teacher.id, 'qualification', e.target.value)}
                        placeholder="Категория"
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <input
                        type="text"
                        value={teacher.specialization}
                        onChange={(e) => updateTeacher(teacher.id, 'specialization', e.target.value)}
                        placeholder="Специализация"
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <button
                      onClick={() => deleteTeacher(teacher.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
