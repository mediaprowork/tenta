import { site } from '@data/site';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    description: site.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      email: site.email,
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['id', 'en'],
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin],
  };
}

export function serviceJsonLd(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@type': 'Organization', name: site.name, url: site.url },
    areaServed: 'ID',
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
