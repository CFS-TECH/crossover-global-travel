export const travelServices = [
  {
    slug: 'flight-booking',
    title: 'Flight Booking Services',
    heroTitle: 'Premium Flight Booking',
    heroTagline: 'Seamless Connections Worldwide',
    desc: 'Navigate the skies with ease. Our flight booking services offer exclusive access to premium airlines, ensuring your journey is as comfortable and efficient as possible. From securing the best corporate rates to orchestrating complex multi-city itineraries, we handle the details so you can focus on the destination.',
    image: '/assets/flight_booking.png',
    heroImage: '/assets/flight_booking.png',
    tag: 'Essential',
    highlights: [
      'First & Business Class Reservations',
      'Exclusive Corporate Rates',
      'Complex Multi-City Routing',
      '24/7 Flight Monitoring'
    ],
    servicesTitle: 'Our Flight Services',
    services: [
      'Priority check-in assistance',
      'Lounge access coordination',
      'Special meal & seating requests',
      'Rapid rebooking during disruptions'
    ],
    whyChooseText: 'We don’t just book flights; we engineer seamless travel experiences from takeoff to landing.',
    ctaText: 'Book Your Flight',
    gallery: [
      '/assets/flight_booking.png',
      '/assets/travel_planning.png',
      '/assets/dest_hero.png',
      '/assets/hero_main.png',
      '/assets/europe_main.png',
      '/assets/lead_bg.png'
    ],
    packages: [
      { title: 'Global Business Pass', duration: 'Flexible', price: 'Custom', image: '/assets/flight_booking.png' },
      { title: 'First Class Upgrade', duration: 'One-Way/Round', price: 'Inquire', image: '/assets/luxury.png' }
    ]
  },
  {
    slug: 'hotel-booking',
    title: 'Hotel & Resort Booking',
    heroTitle: 'Luxury Hotel Booking',
    heroTagline: 'Handpicked Luxury Stays',
    desc: 'Rest in unparalleled comfort. We hold exclusive partnerships with the world’s most prestigious hotel brands and boutique properties. Allow us to secure the perfect accommodations for your journey, complete with VIP perks, room upgrades, and exceptional service.',
    image: '/assets/hotel_booking.png',
    heroImage: '/assets/hotel_booking.png',
    tag: 'Luxury',
    highlights: [
      '5-Star Luxury Resorts',
      'Boutique City Hotels',
      'Private Villas & Estates',
      'All-Inclusive Escapes'
    ],
    servicesTitle: 'Accommodation Perks',
    services: [
      'Complimentary room upgrades (when available)',
      'Early check-in & late check-out',
      'Daily complimentary breakfast',
      'Resort credits & spa vouchers'
    ],
    whyChooseText: 'Your accommodation is the foundation of your trip. We ensure it’s nothing short of extraordinary.',
    ctaText: 'Find Your Hotel',
    gallery: [
      '/assets/hotel_booking.png',
      '/assets/luxury.png',
      '/assets/honeymoon.png',
      '/assets/mexico_main.png',
      '/assets/why_us.png',
      '/assets/canada_main.png'
    ],
    packages: [
      { title: 'Luxury Resort Getaway', duration: '5 Nights', price: '$2,500', image: '/assets/hotel_booking.png' },
      { title: 'Boutique City Stay', duration: '3 Nights', price: '$1,200', image: '/assets/europe_main.png' }
    ]
  },
  {
    slug: 'travel-planning',
    title: 'Custom Travel Planning',
    heroTitle: 'Bespoke Travel Planning',
    heroTagline: 'Curated For Your Wanderlust',
    desc: 'Experience the world on your terms. Our expert travel designers craft entirely bespoke itineraries tailored to your unique preferences, pace, and passions. From hidden gem restaurants to private guided tours, every moment is meticulously planned.',
    image: '/assets/travel_planning.png',
    heroImage: '/assets/travel_planning.png',
    tag: 'Bespoke',
    highlights: [
      'End-to-End Itinerary Design',
      'Private Guided Tours',
      'Culinary & Cultural Experiences',
      'Adventure & Expedition Planning'
    ],
    servicesTitle: 'Our Planning Process',
    services: [
      'In-depth personal consultation',
      'Customized daily schedules',
      'Exclusive local experiences',
      '24/7 on-trip concierge support'
    ],
    whyChooseText: 'Time is your most valuable asset. Let us invest it into creating the perfect journey.',
    ctaText: 'Start Planning',
    gallery: [
      '/assets/travel_planning.png',
      '/assets/hero_main.png',
      '/assets/why_us.png',
      '/assets/dest_hero.png',
      '/assets/usa_main.png',
      '/assets/family.png'
    ],
    packages: [
      { title: 'Full Itinerary Design', duration: 'Unlimited', price: 'Custom', image: '/assets/travel_planning.png' },
      { title: 'Weekend Getaway Planner', duration: '3 Days', price: '$500', image: '/assets/dest_hero.png' }
    ]
  },
  {
    slug: 'visa-assistance',
    title: 'Visa & Passport Assistance',
    heroTitle: 'Expert Visa Assistance',
    heroTagline: 'Stress-Free Travel Documentation',
    desc: 'Cross borders with confidence. Navigating global visa requirements and passport regulations can be a complex and frustrating process. Our dedicated specialists provide expert guidance, ensuring your travel documentation is processed accurately and efficiently.',
    image: '/assets/visa_assistance.png',
    heroImage: '/assets/visa_assistance.png',
    tag: 'Support',
    highlights: [
      'Tourist & Business Visas',
      'Passport Renewal Assistance',
      'Document Translation & Notarization',
      'Embassy Appointment Scheduling'
    ],
    servicesTitle: 'Visa Services',
    services: [
      'Comprehensive application review',
      'Expedited processing options',
      'Real-time status tracking',
      'Pre-travel entry requirement consulting'
    ],
    whyChooseText: 'We handle the red tape, so you can focus on the excitement of your upcoming journey.',
    ctaText: 'Get Visa Help',
    gallery: [
      '/assets/visa_assistance.png',
      '/assets/travel_planning.png',
      '/assets/why_us.png',
      '/assets/lead_bg.png',
      '/assets/flight_booking.png',
      '/assets/hotel_booking.png'
    ],
    packages: [
      { title: 'Tourist Visa Processing', duration: 'Standard', price: 'Inquire', image: '/assets/visa_assistance.png' },
      { title: 'Expedited Business Visa', duration: 'Fast-Track', price: 'Custom', image: '/assets/lead_bg.png' }
    ]
  }
];

export function getServiceBySlug(slug) {
  return travelServices.find(service => service.slug === slug);
}
