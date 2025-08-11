'use client';

import dynamic from 'next/dynamic';

const ThreeDBanner = dynamic(() => import('./ThreeDBanner'), {
  ssr: false,
});

export default function ThreeDBannerWrapper() {
  return <ThreeDBanner />;
}
