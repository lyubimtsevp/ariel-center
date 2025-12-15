'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Upload, Trash2, AlertCircle, CheckCircle, Image, FolderOpen, RefreshCw, ExternalLink } from 'lucide-react';

interface FileItem {
  name: string;
  url: string;
  size: number;
  modified: string;
}

const FOLDERS = [
  { id: 'specialists', name: 'Фото специалистов', path: 'images/specialists' },
  { id: 'services', name: 'Изображения услуг', path: 'images/services' },
  { id: 'hero', name: 'Главный экран', path: 'images/hero' },
  { id: 'banners', name: 'Баннеры', path: 'images/banners' },
  { id: 'docs', name: 'Документы', path: 'docs' },
];

export default function MediaAdmin() {
  const [activeFolder, setActiveFolder] = useState('specialists');
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadFiles();
  }, [activeFolder]);

  const loadFiles = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/upload?folder=${activeFolder}`, { credentials: 'include' });
      const result = await res.json();
      if (result.success) {
        setFiles(result.files);
      }
    } catch (e) {
      setMessage({ type: 'error', text: 'Ошибка загрузки файлов' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;

    setIsUploading(true);
    setMessage(null);

    let successCount = 0;
    let errorCount = 0;

    for (const file of Array.from(fileList)) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', activeFolder);

        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
          credentials: 'include'
        });

        const result = await res.json();
        if (result.success) {
          successCount++;
        } else {
          errorCount++;
        }
      } catch {
        errorCount++;
      }
    }

    setIsUploading(false);
    
    if (successCount > 0) {
      setMessage({ 
        type: errorCount > 0 ? 'error' : 'success', 
        text: `Загружено: ${successCount}${errorCount > 0 ? `, ошибок: ${errorCount}` : ''}` 
      });
      loadFiles();
    } else {
      setMessage({ type: 'error', text: 'Ошибка загрузки файлов' });
    }

    // Сбросить input
    e.target.value = '';
  };

  const handleDelete = async (fileName: string) => {
    if (!confirm(`Удалить файл "${fileName}"?`)) return;

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder: activeFolder, fileName }),
        credentials: 'include'
      });

      const result = await res.json();
      if (result.success) {
        setMessage({ type: 'success', text: 'Файл удалён' });
        loadFiles();
      } else {
        setMessage({ type: 'error', text: result.error || 'Ошибка удаления' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Ошибка удаления файла' });
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setMessage({ type: 'success', text: 'URL скопирован!' });
    setTimeout(() => setMessage(null), 2000);
  };

  const currentFolder = FOLDERS.find(f => f.id === activeFolder);
  const isImageFolder = activeFolder !== 'docs';

  return (
    <AdminLayout title="Медиафайлы" description="Управление изображениями и документами">
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      {/* Папки */}
      <div className="flex flex-wrap gap-2 mb-6">
        {FOLDERS.map((folder) => (
          <button
            key={folder.id}
            onClick={() => setActiveFolder(folder.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeFolder === folder.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FolderOpen className="w-4 h-4" />
            {folder.name}
          </button>
        ))}
      </div>

      {/* Действия */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="file"
          id="file-upload"
          multiple
          accept={isImageFolder ? 'image/*' : '.pdf,.html'}
          className="hidden"
          onChange={handleUpload}
        />
        <label
          htmlFor="file-upload"
          className={`flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition cursor-pointer ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <Upload className="w-5 h-5" />
          {isUploading ? 'Загрузка...' : 'Загрузить файлы'}
        </label>
        <button
          onClick={loadFiles}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition"
        >
          <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          Обновить
        </button>
      </div>

      {/* Информация о папке */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600">
          <strong>Папка:</strong> <code className="bg-gray-200 px-2 py-0.5 rounded">{currentFolder?.path}</code>
          <span className="mx-2">•</span>
          <strong>Файлов:</strong> {files.length}
        </p>
      </div>

      {/* Файлы */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      ) : files.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <Image className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>Нет файлов в этой папке</p>
          <p className="text-sm mt-1">Загрузите файлы с помощью кнопки выше</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {files.map((file) => (
            <div
              key={file.name}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition"
            >
              {isImageFolder ? (
                <div className="aspect-square bg-gray-100 relative">
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100"
                      title="Открыть"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleDelete(file.name)}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                      title="Удалить"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="aspect-square bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <FolderOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-500">{file.name.split('.').pop()?.toUpperCase()}</span>
                  </div>
                </div>
              )}
              
              <div className="p-3">
                <p 
                  className="text-sm font-medium text-gray-800 truncate cursor-pointer hover:text-blue-600"
                  onClick={() => copyUrl(file.url)}
                  title="Нажмите, чтобы скопировать URL"
                >
                  {file.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatSize(file.size)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
