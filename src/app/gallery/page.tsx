import { FadeIn } from '@/components/ui/FadeIn';
import { Images, Camera } from 'lucide-react';
import Link from 'next/link';
import galleryData from '@/data/gallery.json';

export const metadata = {
  title: 'Фотогалерея | Центр «Ариель»',
  description: 'Фотографии центра, занятий и мероприятий',
};

export default function GalleryPage() {
  const albums = galleryData.albums;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Фотогалерея</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Фотографии нашего центра, занятий и мероприятий
            </p>
          </div>
        </FadeIn>

        {albums.length === 0 ? (
          <FadeIn delay={0.1}>
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">Фотографий пока нет</h3>
              <p className="text-gray-500">Раздел находится в разработке</p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album, index) => (
              <FadeIn key={album.id} delay={0.1 * index}>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="h-56 bg-gradient-to-br from-[#4A90A4]/20 to-[#4A90A4]/5 relative flex items-center justify-center">
                    <Images className="w-16 h-16 text-[#4A90A4]/50 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 rounded-full text-sm text-gray-600 flex items-center gap-1">
                      <Camera className="w-4 h-4" />
                      {album.images.length} фото
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#4A90A4] transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {album.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200 text-center">
            <Camera className="w-12 h-12 text-[#4A90A4] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Добавление фотографий</h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Фотографии можно добавить через админ-панель в разделе «Фотогалерея»
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
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
