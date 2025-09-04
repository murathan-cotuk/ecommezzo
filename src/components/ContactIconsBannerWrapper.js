'use client';

import dynamic from 'next/dynamic';

const ContactIconsBanner = dynamic(() => import('./ContactIconsBanner'), {
  ssr: false,
});

export default function ContactIconsBannerWrapper() {
  return <ContactIconsBanner />;
}
