import { PUBLIC_SITE_URL, PUBLIC_WA_NUMBER } from 'astro:env/client';

export const site = {
  name: 'Tentaklik',
  url: PUBLIC_SITE_URL,
  wa: PUBLIC_WA_NUMBER,
  email: 'hello@tentaklik.com',
  emailKarir: 'karir@tentaklik.com',
  phone: '085177111104',
  address: 'Jakarta, Indonesia',
  social: {
    instagram: 'https://instagram.com/tentaklik',
    facebook: 'https://facebook.com/tentaklik',
    linkedin: 'https://linkedin.com/company/tentaklik',
  },
  description: 'Agensi untuk website, Google Ads, Meta Ads, dan konsultasi digital marketing.',
  defaultOgImage: '/assets/kraken-hero.png',
} as const;

export function waLink(message = 'Halo Tentaklik') {
  return `https://wa.me/${PUBLIC_WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
