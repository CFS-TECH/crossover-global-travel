export const travelPackages = [
  {
    slug: 'honeymoon',
    title: 'Honeymoon Packages',
    heroTitle: 'Romantic Honeymoon Packages',
    heroTagline: 'Celebrate Love Around the World',
    desc: 'Begin your new journey with unforgettable experiences in the world’s most romantic destinations. Our honeymoon packages are designed to offer privacy, luxury, and magical moments that you’ll cherish forever.',
    image: '/assets/honeymoon.png',
    heroImage: '/assets/honeymoon.png',
    tag: 'Romantic',
    highlights: [
      'Maldives',
      'Paris',
      'Switzerland',
      'Bali'
    ],
    servicesTitle: 'What’s Included',
    services: [
      'Luxury hotel stays',
      'Romantic setups & experiences',
      'Private transfers',
      'Customized itinerary'
    ],
    whyChooseText: 'Every honeymoon we design is unique, just like your story.',
    ctaText: 'Plan Your Honeymoon Now',
    gallery: [
      '/assets/honeymoon.png',
      '/assets/luxury.png',
      '/assets/europe_main.png',
      '/assets/mexico_main.png',
      '/assets/dest_hero.png',
      '/assets/lead_bg.png'
    ],
    packages: [
      { title: 'Maldives Overwater Bliss', duration: '7 Days', price: '$4,500', image: '/assets/honeymoon.png' },
      { title: 'Paris Romance', duration: '5 Days', price: '$2,800', image: '/assets/europe_main.png' }
    ]
  },
  {
    slug: 'family',
    title: 'Family Packages',
    heroTitle: 'Family Travel Packages',
    heroTagline: 'Create Memories Together',
    desc: 'Travel with your loved ones and enjoy stress-free vacations designed for all age groups. Our family packages focus on comfort, safety, and fun experiences for everyone.',
    image: '/assets/family.png',
    heroImage: '/assets/family.png',
    tag: 'Popular',
    highlights: [
      'USA Theme Parks',
      'Canada Nature Trips',
      'Europe Family Tours'
    ],
    servicesTitle: 'What’s Included',
    services: [
      'Family-friendly hotels',
      'Activity planning',
      'Transportation support',
      'Guided tours'
    ],
    whyChooseText: 'We make family travel easy, enjoyable, and unforgettable.',
    ctaText: 'Plan Your Family Trip',
    gallery: [
      '/assets/family.png',
      '/assets/usa_main.png',
      '/assets/canada_main.png',
      '/assets/why_us.png',
      '/assets/hero_main.png',
      '/assets/travel_planning.png'
    ],
    packages: [
      { title: 'Disney & Universal Magic', duration: '6 Days', price: '$3,200', image: '/assets/family.png' },
      { title: 'Canadian Rockies Family', duration: '8 Days', price: '$4,100', image: '/assets/canada_main.png' }
    ]
  },
  {
    slug: 'luxury',
    title: 'Luxury Packages',
    heroTitle: 'Luxury Travel Packages',
    heroTagline: 'Experience the Extraordinary',
    desc: 'Indulge in world-class travel experiences with our premium luxury packages. From five-star hotels to exclusive services, we ensure your journey is nothing less than exceptional.',
    image: '/assets/luxury.png',
    heroImage: '/assets/luxury.png',
    tag: 'Premium',
    highlights: [
      'Dubai',
      'Switzerland',
      'Maldives',
      'Europe Luxury Tours'
    ],
    servicesTitle: 'What’s Included',
    services: [
      '5-star accommodations',
      'Private transfers',
      'VIP experiences',
      'Personalized services'
    ],
    whyChooseText: 'Luxury is not just about travel—it’s about how you experience it.',
    ctaText: 'Explore Luxury Travel',
    gallery: [
      '/assets/luxury.png',
      '/assets/hotel_booking.png',
      '/assets/flight_booking.png',
      '/assets/europe_main.png',
      '/assets/lead_bg.png',
      '/assets/honeymoon.png'
    ],
    packages: [
      { title: 'Dubai Extravagance', duration: '5 Days', price: '$5,900', image: '/assets/luxury.png' },
      { title: 'Swiss Alps Premium', duration: '7 Days', price: '$6,500', image: '/assets/europe_main.png' }
    ]
  },
  {
    slug: 'budget',
    title: 'Budget Packages',
    heroTitle: 'Budget Travel Packages',
    heroTagline: 'Travel Smart, Spend Less',
    desc: 'Explore the world without stretching your budget. Our budget-friendly packages are designed to offer the best value while maintaining comfort and quality.',
    image: '/assets/budget.png',
    heroImage: '/assets/budget.png',
    tag: 'Smart',
    highlights: [
      'Mexico Budget Trips',
      'USA City Tours',
      'Southeast Asia'
    ],
    servicesTitle: 'What’s Included',
    services: [
      'Affordable hotels',
      'Cost-effective travel plans',
      'Essential services',
      'Flexible options'
    ],
    whyChooseText: 'Smart travel is about experiences, not expenses.',
    ctaText: 'Start Your Budget Trip',
    gallery: [
      '/assets/budget.png',
      '/assets/mexico_main.png',
      '/assets/dest_hero.png',
      '/assets/travel_planning.png',
      '/assets/hero_main.png',
      '/assets/usa_main.png'
    ],
    packages: [
      { title: 'Mexico Explorer', duration: '5 Days', price: '$699', image: '/assets/mexico_main.png' },
      { title: 'Asia Backpacking Starter', duration: '14 Days', price: '$1,200', image: '/assets/budget.png' }
    ]
  }
];

export function getPackageBySlug(slug) {
  return travelPackages.find(pkg => pkg.slug === slug);
}
