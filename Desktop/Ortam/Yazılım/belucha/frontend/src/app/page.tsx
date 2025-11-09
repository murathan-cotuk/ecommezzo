import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import TopCategories from '@/components/TopCategories';

export default function Home() {
  return (
    <div>
      <Hero />
      <TopCategories />
      <FeaturedProducts />
    </div>
  );
}

