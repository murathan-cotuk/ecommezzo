import Banner from "../components/Banner";
import Navbar from '../components/Navbar'; // Navbar bileşenini doğru yoldan import edin / Import the Navbar component from the correct path
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";
import StyledComponentsRegistry from '../lib/registry';
import GoogleAnalytics from '../components/GoogleAnalytics';
import GoogleSearchConsole from '../components/GoogleSearchConsole';
import { generateStructuredData } from '../lib/seo';


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});


export const metadata = {
  title: "Effiziente E-Commerce Systeme & Marketplace Lösungen für Ihr Business | ecommezzo",
  description: "Professionelle E-Commerce Lösungen, Digital Marketing und Web Design für nachhaltiges Business-Wachstum. Shopify Experts mit über 5 Jahren Erfahrung.",
  keywords: "E-Commerce, Shopify, Digital Marketing, Web Design, Online Shop, Marketplace, Business Lösungen, Google Analytics, SEO, Conversion Optimierung",
  authors: [{ name: "ecommezzo" }],
  creator: "ecommezzo",
  publisher: "ecommezzo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Ecommezzo-Logo.png',
    shortcut: '/Ecommezzo-Logo.png',
    apple: '/Ecommezzo-Logo.png',
  },
  openGraph: {
    title: "Effiziente E-Commerce Systeme & Marketplace Lösungen für Ihr Business | ecommezzo",
    description: "Professionelle E-Commerce Lösungen, Digital Marketing und Web Design für nachhaltiges Business-Wachstum.",
    type: "website",
    url: "https://ecommezzo.com",
    siteName: "ecommezzo",
    images: [
      {
        url: "https://ecommezzo.com/Ecommezzo-Logo.png",
        width: 1200,
        height: 630,
        alt: "ecommezzo - E-Commerce Solutions",
      },
    ],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Effiziente E-Commerce Systeme & Marketplace Lösungen für Ihr Business | ecommezzo",
    description: "Professionelle E-Commerce Lösungen, Digital Marketing und Web Design für nachhaltiges Business-Wachstum.",
    images: ["https://ecommezzo.com/Ecommezzo-Logo.png"],
  },
  alternates: {
    canonical: "https://ecommezzo.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/Ecommezzo-Logo.png" />
        <link rel="shortcut icon" href="/Ecommezzo-Logo.png" />
        <link rel="apple-touch-icon" href="/Ecommezzo-Logo.png" />
        <GoogleSearchConsole GSC_VERIFICATION_CODE={process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE} />
        
        {/* Google Analytics - Manuel Etiket */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3TVCJVTXYB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3TVCJVTXYB');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <StyledComponentsRegistry>
          {/* <SplashScreen /> */}
          {/*<Banner />*/}
          <Navbar />
          {children}
          <ScrollToTop />
          <Loader />
          <Footer />
        </StyledComponentsRegistry>
        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      </body>
    </html>
  );
}
