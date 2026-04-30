import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import GlobalAirplane from "@/components/GlobalAirplane/GlobalAirplane";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Crossover Global Travel | Premium Travel Consultation & Bookings",
  description: "Experience the world with Crossover Global Travel. Expert consultation for USA, Canada, and Mexico trips. Luxury tours, flight bookings, and personalized itineraries.",
  keywords: ["Travel Agency", "Global Travel", "USA Tours", "Canada Travel", "Mexico Vacation", "Flight Booking", "Travel Consultation"],
  authors: [{ name: "Crossover Global Travel" }],
  openGraph: {
    title: "Crossover Global Travel | Premium Travel Consultation",
    description: "Your trusted partner for global travel. Personalized itineraries for USA, Canada, and Mexico.",
    url: "https://crossoverglobaltravel.com",
    siteName: "Crossover Global Travel",
    images: [
      {
        url: "/assets/hero_main.png",
        width: 1200,
        height: 630,
        alt: "Crossover Global Travel - Premium Destinations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/iconlogo.png",
    apple: "/assets/iconlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className={outfit.className} suppressHydrationWarning={true}>
        <GlobalAirplane />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Crossover Global Travel",
              "description": "Premium travel consultation and global booking services.",
              "url": "https://crossoverglobaltravel.com",
              "logo": "https://crossoverglobaltravel.com/assets/logo2.png",
              "telephone": "+1-888-400-7136",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-888-400-7136",
                "contactType": "customer service",
                "areaServed": ["US", "CA", "MX"],
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61587398464233",
                "https://www.instagram.com/crossoverfintech/",
                "https://x.com/CFintech93318",
                "https://www.linkedin.com/in/crossover-fintech-9a15b73b6/"
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const originalError = console.error;
                console.error = (...args) => {
                  if (typeof args[0] === 'string' && args[0].includes('bis_skin_checked')) return;
                  originalError.apply(console, args);
                };
                const observer = new MutationObserver((mutations) => {
                  for (const mutation of mutations) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
                      mutation.target.removeAttribute('bis_skin_checked');
                    }
                  }
                });
                observer.observe(document.documentElement, {
                  attributes: true,
                  subtree: true,
                  attributeFilter: ['bis_skin_checked']
                });
              })();
            `,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
