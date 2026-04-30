import { PUBLIC_SITE_URL, PUBLIC_WA_NUMBER } from 'astro:env/client';

export const site = {
  name: 'Tentaklik',
  url: PUBLIC_SITE_URL,
  wa: PUBLIC_WA_NUMBER,
  email: 'admin@mediapro.work',
  emailKarir: 'karir@tentaklik.com',
  phone: '085177111104',
  address: 'Semarang, Indonesia',
  social: {
    instagram: 'https://www.instagram.com/tentaklikaja?igsh=eW1oa25pdHdtZ3Q0',
    tiktok: 'https://www.tiktok.com/@digimarcore?_r=1&_t=ZS-95xdD3xnLTo',
    facebook: 'https://facebook.com/tentaklik',
    linkedin: 'https://linkedin.com/company/tentaklik',
  },
  description: 'Agensi untuk website, Google Ads, Meta Ads, dan konsultasi digital marketing.',
  defaultOgImage: '/assets/kraken-hero.png',
} as const;

export function waLink(message = 'Halo Tentaklik') {
  return `https://wa.me/${PUBLIC_WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
