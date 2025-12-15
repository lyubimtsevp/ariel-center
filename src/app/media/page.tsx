import { FadeIn } from '@/components/ui/FadeIn';
import { Play, FileText, ExternalLink, Calendar, Tv } from 'lucide-react';
import Link from 'next/link';
import mediaData from '@/data/media-articles.json';

export const metadata = {
  title: 'Медиа | Центр «Ариель»',
  description: 'Статьи, репортажи и видео о центре «Ариель»',
};

export default function MediaPage() {
  const publishedArticles = mediaData.articles.filter(item => item.published);
  const publishedVideos = mediaData.videos.filter(item => item.published);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Медиа</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Статьи, репортажи и видеоматериалы о нашем центре
            </p>
          </div>
        </FadeIn>

        {/* Статьи и репортажи */}
        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#4A90A4]" />
            Публикации и репортажи
          </h2>
        </FadeIn>

        {publishedArticles.length === 0 ? (
          <FadeIn delay={0.2}>
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 mb-12">
              <Tv className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Публикаций пока нет</p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {publishedArticles.map((article, index) => (
              <FadeIn key={article.id} delay={0.1 * index}>
                <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-gray-100 relative flex items-center justify-center">
                    {article.type === 'video' ? (
                      <Play className="w-12 h-12 text-gray-400" />
                    ) : (
                      <FileText className="w-12 h-12 text-gray-400" />
                    )}
                    <span className="absolute top-3 right-3 px-2 py-1 bg-[#4A90A4] text-white text-xs rounded-full">
                      {article.type === 'video' ? 'Видео' : 'Статья'}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="font-medium text-[#4A90A4]">{article.source}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    {article.url && (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#4A90A4] font-medium hover:underline"
                      >
                        Смотреть
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Видео */}
        {publishedVideos.length > 0 && (
          <>
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Play className="w-6 h-6 text-[#4A90A4]" />
                Видео
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {publishedVideos.map((video, index) => (
                <FadeIn key={video.id} delay={0.1 * index}>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="h-48 bg-gray-900 relative flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 group-hover:text-[#4A90A4] transition-colors">
                        {video.title}
                      </h3>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4A90A4] transition-colors"
            >
              ← Вернуться на главную
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
