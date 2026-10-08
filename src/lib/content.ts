export const CONTENT = {
  nav: {
    links: ['Features', 'How it works', 'For Organizers', 'FAQ'],
    cta: 'Join the Alpha',
  },
  hero: {
    headline: 'EVERY EVENT.\nONE APP.',
    tagline: 'Hunt Smarter, Collect Better.',
    sub: "Find collector events in Manila, post what you're hunting, and get offers from verified sellers.",
    ctaPrimary: 'Join the Close Alpha',
    ctaSecondary: 'Available on iOS & Android',
    alphaUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdbXqQ2VlfJT-AKS_47hcuR2UNXiQkW_6Cbf8EgfuZPA20JcA/viewform?usp=dialog',
    appStoreUrl: 'https://apps.apple.com/app/buzaar/id6800176852',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=app.buzaar.collector',
  },
  marquee: [
    'Trading Cards','TCG/CCG','Action Figures','Anime & Manga',
    'Toys','Comics','Gunpla','LEGO','Hot Wheels','Vinyl','Retro Games',
  ],
  features: [
    {
      id: 'events',
      label: '🔥 HOT EVENTS!',
      headline: 'EVERY EVENT.\nONE APP.',
      body: 'Hot events, Near You countdowns, calendar view, entry fees, people going, and directions — all in one place.',
      side: 'right' as const,
      pills: ["In 7 days", "● Live now", "I'm going", "₱100 entry"],
      stat: { num: '1,241', label: 'attending' },
    },
    {
      id: 'board',
      label: '📋 BOUNTY BOARD',
      headline: 'MULTIPLE BOUNTIES.\nONE BOARD.',
      body: "Post what you're hunting with condition (PSA 10, Mint, Sealed) and your target price. Upgrade to Hot Chase for premium visibility.",
      side: 'left' as const,
      pills: ['Mint', 'PSA 10', 'Sealed', 'Pre-event'],
      stat: { num: '20', label: 'bounties posted' },
    },
    {
      id: 'offers',
      label: '⚡ BUZ IT!',
      headline: 'POST IT.\nGET OFFERS.',
      body: 'Hit "Buz it!" and sellers at the event come to you with offers. Post before the event for early-bird deals.',
      side: 'right' as const,
      pills: ['5 Posted', '0 Found', '9 Offers'],
      stat: { num: '9', label: 'offers received' },
    },
    {
      id: 'prices',
      label: '💰 REAL PRICES',
      headline: 'REAL FINDS.\nREAL PRICES.',
      body: 'See actual transaction prices from real collectors. No guesswork — just collector-to-collector honesty.',
      side: 'left' as const,
      pills: [],
      stat: { num: '', label: '' },
      items: [
        { name: "Hot Wheels '67 Camaro", price: '₱800',    tag: 'Mint'    },
        { name: 'LEGO Millennium Falcon', price: '₱9,000',  tag: 'Sealed'  },
        { name: 'PSA 10 Charizard Base',  price: '₱45,000', tag: 'PSA 10'  },
        { name: 'RX-78-2 PG Gundam',      price: '₱4,500',  tag: 'Mint'    },
      ],
    },
    {
      id: 'verified',
      label: '✅ VERIFIED',
      headline: 'VERIFIED HUNTERS\nONLY.',
      body: 'Every profile shows ratings, Posted/Found/Offers stats, and FB & IG links. Top Bounty Hunters leaderboard coming soon.',
      side: 'right' as const,
      pills: ['Organizer', 'Verified', 'Top Hunter'],
      stat: { num: '4.9★', label: 'avg seller rating' },
    },
  ] as Feature[],
  howItWorks: [
    { step: '01', title: 'Find an event',       body: 'Browse hot collector events near you — toy fairs, card cons, hobby meets.' },
    { step: '02', title: 'Post your bounty',     body: "Tell the community what you're hunting, your condition, and target price." },
    { step: '03', title: 'Get offers & collect', body: 'Sellers at the event send you offers. Meet up, inspect, trade, and rate.' },
  ],
  shareCards: [
    { type: 'Event',   label: 'Share an Event'   },
    { type: 'Profile', label: 'Share your Profile' },
    { type: 'Chase',   label: 'Share a Chase'    },
  ],
  organizers: {
    headline: 'GROW YOUR EVENT.',
    sub: 'Tools built for event organizers.',
    perks: [
      'List your event in minutes',
      'Post updates & announcements',
      'Merchant Group Chat',
      'Live attendance stats',
      'HOT placement & Sponsored slots',
    ],
    cta: 'List your event',
    ctaUrl: 'https://apps.apple.com/app/buzaar/id6800176852',
  },
  pricing: {
    headline: 'FREE TO COLLECT.\nMORE WHEN YOU NEED IT.',
    sub: 'No lock-ins. Cancel anytime. Billed monthly.',
    tiers: [
      {
        name: 'Free',
        price: '₱0',
        period: '/ month',
        desc: 'For casual collectors getting started.',
        image: null,
        popular: false,
        features: [
          'Browse all collector events',
          '2 Event Chase slots per event',
          '2 Hot Chases active',
          '5 Open Chases (90-day duration)',
          '3 keyword alerts',
          '1 Hot Event slot',
          '3 km nearby radius',
          'Collector profile + QR share card',
        ],
      },
      {
        name: 'Collector+',
        price: '₱199',
        period: '/ month',
        desc: 'For serious collectors who hunt regularly.',
        image: '/logo/sub-collector.png',
        popular: true,
        features: [
          '10 Event Chase slots per event',
          '15 Hot Chases active',
          '20 Open Chases (180-day duration)',
          '25 keyword alerts',
          '3 Hot Event slots',
          '50% Hot Event discount',
          '10 min early access to new chases',
          '22 km adjustable nearby radius',
          'Open Chase chat unlocked',
        ],
      },
      {
        name: 'Organizer+',
        price: '₱499',
        period: '/ month',
        desc: 'For event organizers and power vendors.',
        image: '/logo/sub-organizer.png',
        popular: false,
        features: [
          'Everything in Collector+',
          'Unlimited event posts',
          '10 Hot Event slots',
          'Vendor roster management',
          'Vendor & booth chat',
          'Booth assignment tools',
          'Event analytics dashboard',
          'Verified Organizer+ badge',
        ],
      },
    ],
  },
  faq: [
    { q: 'What is Buzaar?',                          a: 'Buzaar is a mobile marketplace for Philippine collector events. Find events, post chases for items you want, and get offers from sellers on the spot.' },
    { q: 'Is it free?',                              a: 'Yes — free to download and use. Optional Collector+ (₱199/mo) and Organizer+ (₱499/mo) plans unlock more slots and features.' },
    { q: 'Where is it available?',                   a: 'Currently focused on Metro Manila and nearby areas, expanding to all major Philippine cities.' },
    { q: 'Bounty vs. chase — what\'s the difference?', a: '"Chase" is the in-app term, "bounty" is how we describe it to newcomers. Both mean posting what you\'re hunting for.' },
    { q: 'How do I get verified?',                   a: 'Apply through the app. We review your profile and transaction history, then grant the Verified badge.' },
    { q: 'How do organizers list events?',           a: 'Apply for Organizer status in-app, then use the Post Event screen. Organizer+ subscribers get HOT placement.' },
  ],
  finalCta: {
    headline: 'HUNT SMARTER.\nCOLLECT BETTER.',
    sub: 'Join the collector community. Free to download.',
    alphaCta: 'Join the Close Alpha',
    alphaUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdbXqQ2VlfJT-AKS_47hcuR2UNXiQkW_6Cbf8EgfuZPA20JcA/viewform?usp=dialog',
  },
  footer: {
    facebook:  'https://www.facebook.com/profile.php?id=61595126664104',
    instagram: 'https://instagram.com/buzaarapp',
    links: ['Terms of Service', 'Privacy Policy', 'Delete Account', 'Support'],
    hrefs: [
      'https://buzaar.thepixelclub.app/terms',
      'https://buzaar.thepixelclub.app/privacy',
      'https://buzaar.thepixelclub.app/delete-account.html',
      'mailto:support@thepixelclub.app',
    ],
  },
}

export type Feature = {
  id: string
  label: string
  headline: string
  body: string
  side: 'left' | 'right'
  pills: string[]
  stat: { num: string; label: string }
  items?: { name: string; price: string; tag: string }[]
}
