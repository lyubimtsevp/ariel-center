import { FadeIn } from '@/components/ui/FadeIn';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import newsData from '@/data/news.json';

export const metadata = {
  title: 'Новости | Центр «Ариель»',
  description: 'Новости и события центра коррекции речи и поведения «Ариель»',
};

export default function NewsPage() {
  const publishedNews = newsData.items.filter(item => item.published);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Новости</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Актуальные новости и события нашего центра
            </p>
          </div>
        </FadeIn>

        {publishedNews.length === 0 ? (
          <FadeIn delay={0.1}>
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">Новостей пока нет</h3>
              <p className="text-gray-500">Следите за обновлениями</p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedNews.map((news, index) => (
              <FadeIn key={news.id} delay={0.1 * index}>
                <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  {news.image && (
                    <div className="h-48 bg-gray-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <Calendar className="w-12 h-12" />
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {new Date(news.date).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-[#4A90A4] font-medium hover:gap-3 transition-all">
                      Читать далее
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
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
