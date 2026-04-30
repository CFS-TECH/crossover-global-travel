export const destinations = [
  {
    slug: 'usa',
    title: 'USA Travel Packages – Explore America Your Way',
    heroTitle: 'USA Travel Packages',
    heroTagline: 'Explore America Your Way',
    desc: 'Experience the best of the United States with customized travel plans designed around your preferences. From vibrant cities to natural wonders, we make your journey smooth and memorable. Discover the best of America, from iconic cities to breathtaking national parks.',
    image: '/assets/usa_main.png',
    heroImage: '/assets/usa_main.png',
    tag: 'Best Seller',
    highlights: [
      'New York City',
      'Los Angeles',
      'Las Vegas',
      'National Parks'
    ],
    servicesTitle: 'What We Offer',
    services: [
      'Flight booking assistance',
      'Hotel reservations',
      'Customized itineraries',
      'Travel consultation'
    ],
    ctaText: 'Get Your USA Travel Plan',
    gallery: [
      '/assets/usa_main.png',
      '/assets/hero_main.png',
      '/assets/dest_hero.png',
      '/assets/lead_bg.png',
      '/assets/why_us.png',
      '/assets/canada_main.png'
    ],
    packages: [
      { title: 'NYC City Explorer', duration: '5 Days', price: '$1,299', image: '/assets/hero_main.png' },
      { title: 'Grand Canyon Adventure', duration: '7 Days', price: '$1,899', image: '/assets/usa_main.png' }
    ]
  },
  {
    slug: 'mexico',
    title: 'Mexico Travel Packages – Beaches, Culture & Adventure',
    heroTitle: 'Mexico Travel Packages',
    heroTagline: 'Beaches, Culture & Adventure',
    desc: 'Mexico offers the perfect mix of relaxation and excitement. Enjoy stunning beaches, rich culture, and unique travel experiences with our expertly planned packages. Immerse yourself in the history of Mayan ruins or relax in Cancun.',
    image: '/assets/mexico_main.png',
    heroImage: '/assets/mexico_main.png',
    tag: 'Hot Deal',
    highlights: [
      'Cancun',
      'Tulum',
      'Mexico City'
    ],
    servicesTitle: 'Services',
    services: [
      'Resort bookings',
      'Travel planning',
      'Guided tours',
      'Transportation support'
    ],
    ctaText: 'Plan Your Mexico Trip',
    gallery: [
      '/assets/mexico_main.png',
      '/assets/why_us.png',
      '/assets/dest_hero.png',
      '/assets/hero_main.png',
      '/assets/lead_bg.png',
      '/assets/europe_main.png'
    ],
    packages: [
      { title: 'Cancun All-Inclusive', duration: '6 Days', price: '$999', image: '/assets/mexico_main.png' },
      { title: 'Mayan Ruins Tour', duration: '8 Days', price: '$1,450', image: '/assets/dest_hero.png' }
    ]
  },
  {
    slug: 'canada',
    title: 'Canada Travel Packages – Nature Meets Modern Living',
    heroTitle: 'Canada Travel Packages',
    heroTagline: 'Nature Meets Modern Living',
    desc: 'Explore the beauty of Canada with its breathtaking landscapes and vibrant cities. Our travel experts design personalized experiences for every traveler. From the towering peaks of the Rockies to the charm of Toronto.',
    image: '/assets/canada_main.png',
    heroImage: '/assets/canada_main.png',
    tag: 'Scenic',
    highlights: [
      'Toronto',
      'Vancouver',
      'Niagara Falls'
    ],
    servicesTitle: 'Services',
    services: [
      'Hotel bookings',
      'Travel assistance',
      'Custom itineraries',
      'Local experiences'
    ],
    ctaText: 'Get Your Canada Plan',
    gallery: [
      '/assets/canada_main.png',
      '/assets/hero_main.png',
      '/assets/dest_hero.png',
      '/assets/usa_main.png',
      '/assets/why_us.png',
      '/assets/lead_bg.png'
    ],
    packages: [
      { title: 'Banff Rockies Explorer', duration: '7 Days', price: '$2,100', image: '/assets/canada_main.png' },
      { title: 'Vancouver & Victoria', duration: '5 Days', price: '$1,350', image: '/assets/dest_hero.png' }
    ]
  },
  {
    slug: 'europe',
    title: 'Europe Travel Packages – Timeless Journeys',
    heroTitle: 'Europe Travel Packages',
    heroTagline: 'Timeless Journeys',
    desc: 'Travel across Europe and experience history, culture, and beauty like never before. From romantic cities to scenic landscapes, we create unforgettable journeys across the continent.',
    image: '/assets/europe_main.png',
    heroImage: '/assets/europe_main.png',
    tag: 'New',
    highlights: [
      'Paris',
      'Rome',
      'Switzerland'
    ],
    servicesTitle: 'Services',
    services: [
      'Multi-country trips',
      'Luxury travel planning',
      'Hotel & transport',
      'Guided tours'
    ],
    ctaText: 'Explore Europe Now',
    gallery: [
      '/assets/europe_main.png',
      '/assets/why_us.png',
      '/assets/dest_hero.png',
      '/assets/hero_main.png',
      '/assets/lead_bg.png',
      '/assets/mexico_main.png'
    ],
    packages: [
      { title: 'Romantic Paris', duration: '5 Days', price: '$1,800', image: '/assets/europe_main.png' },
      { title: 'Italian Highlights', duration: '10 Days', price: '$3,200', image: '/assets/dest_hero.png' }
    ]
  }
];

export function getDestinationBySlug(slug) {
  return destinations.find(dest => dest.slug === slug);
}
