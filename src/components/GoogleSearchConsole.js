'use client';

import { useEffect } from 'react';

export default function GoogleSearchConsole({ GSC_VERIFICATION_CODE }) {
  useEffect(() => {
    if (GSC_VERIFICATION_CODE) {
      // Google Search Console verification meta tag
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      meta.content = GSC_VERIFICATION_CODE;
      document.head.appendChild(meta);
    }
  }, [GSC_VERIFICATION_CODE]);

  return null;
}
