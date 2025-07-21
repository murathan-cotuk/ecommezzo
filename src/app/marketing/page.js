export default function Marketing() {
  return (
    <div className="text-gray-900 dark:text-white bg-white dark:bg-gray-950">
      {/* 1. Hero Section */}
      <section className="w-full h-[500px] bg-gradient-to-t from-cyan-950 to-gray-950 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Stratejiyle Büyü, Verilerle Kazan</h1>
        <p className="text-lg max-w-2xl">Markanızı bir üst seviyeye taşımak için dijital pazarlama gücünü kullanıyoruz. Performansa dayalı, ölçülebilir çözümler sunuyoruz.</p>
      </section>

      {/* 2. Hizmetler */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">SEO & İçerik</h3>
            <p>Google’da görünür olun. Anahtar kelime analizi, içerik stratejisi ve teknik SEO ile trafik kazanın.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Performans Reklamları</h3>
            <p>Facebook, Google, TikTok reklamları ile dönüşüm odaklı kampanyalar hazırlıyoruz.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">E-posta & CRM Otomasyonu</h3>
            <p>Potansiyel müşterilerinizi sadık birer müşteriye dönüştürmek için kişiselleştirilmiş kampanyalar.</p>
          </div>
        </div>
      </section>

      {/* 3. Başarı Hikayeleri */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Başarı Hikayeleri</h2>
          <p className="mb-8">250’den fazla marka ile çalıştık. ROI ortalamamız: %430</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow">
              <h4 className="font-semibold">Modera Fashion</h4>
              <p>90 gün içinde %370 daha fazla trafik ve %280 daha fazla satış.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow">
              <h4 className="font-semibold">Techzord</h4>
              <p>AB pazarında 3 ayda 12 ülkede bilinirlik sağlandı.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Süreç */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Nasıl Çalışıyoruz?</h2>
        <div className="grid md:grid-cols-4 gap-8 text-left">
          <div><strong>1. Analiz</strong><br />Hedef kitlenizi ve pazarı detaylı analiz ederiz.</div>
          <div><strong>2. Strateji</strong><br />Size özel bir marketing planı hazırlarız.</div>
          <div><strong>3. Uygulama</strong><br />Kampanyaları başlatır, içerikleri oluştururuz.</div>
          <div><strong>4. Raporlama</strong><br />Her adımı takip eder, size şeffaf veri sunarız.</div>
        </div>
      </section>

      {/* 5. Neden Biz? */}
      <section className="bg-cyan-950 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Neden Bizi Tercih Etmelisiniz?</h2>
        <p className="max-w-2xl mx-auto">Ekip olarak sadece reklam yapmıyoruz, markanızı büyütmek için sizinle ortak oluyoruz. Teknoloji, deneyim ve yaratıcılığı bir araya getiriyoruz.</p>
      </section>

      {/* 6. CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Hadi Markanı Birlikte Yükseltelim</h2>
        <p className="mb-6">Bize birkaç cümleyle neye ihtiyacın olduğunu söyle, en uygun çözümü üretelim.</p>
        <button className="bg-cyan-600 hover:bg-cyan-700 transition text-white font-semibold px-6 py-3 rounded">
          Ücretsiz Danışmanlık Al
        </button>
      </section>

      {/* 7. SSS */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Sık Sorulan Sorular</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Kampanyalar için minimum bütçe nedir?</h4>
            <p>Başlangıç paketimiz 500€'dan başlamaktadır. Ancak bütçenize göre özelleştirme yapılabilir.</p>
          </div>
          <div>
            <h4 className="font-semibold">Raporlama ne sıklıkla yapılır?</h4>
            <p>Haftalık ve aylık olmak üzere iki formatta düzenli raporlar sunarız.</p>
          </div>
          <div>
            <h4 className="font-semibold">Çalışmaya nasıl başlarız?</h4>
            <p>İlk adım ücretsiz bir analiz görüşmesidir. Ardından ihtiyaçlarınıza göre strateji sunarız.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
