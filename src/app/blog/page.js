export default function Blog() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Blog</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">SEO İpuçları</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">SEO hakkında bilmeniz gereken her şey.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Web Tasarım Trendleri</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">2023'ün en popüler web tasarım trendleri.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">E-ticaret Stratejileri</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">E-ticaret sitenizi nasıl büyütebilirsiniz?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  