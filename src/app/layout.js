import Banner from "../components/Banner";
import Navbar from '../components/Navbar'; // Navbar bileşenini doğru yoldan import edin / Import the Navbar component from the correct path
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";
import StyledComponentsRegistry from '../lib/registry';


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});


export const metadata = {
  title: "Effiziente E-Commerce Systeme & Marketplace Lösungen für Ihr Business | ecommezzo",
  description: "Professionelle E-Commerce Lösungen, Digital Marketing und Web Design für nachhaltiges Business-Wachstum. Shopify Experts mit über 5 Jahren Erfahrung.",
  keywords: "E-Commerce, Shopify, Digital Marketing, Web Design, Online Shop, Marketplace, Business Lösungen",
  icons: {
    icon: '/Ecommezzo-Logo.png',
    shortcut: '/Ecommezzo-Logo.png',
    apple: '/Ecommezzo-Logo.png',
  },
  openGraph: {
    title: "Effiziente E-Commerce Systeme & Marketplace Lösungen für Ihr Business | ecommezzo",
    description: "Professionelle E-Commerce Lösungen, Digital Marketing und Web Design für nachhaltiges Business-Wachstum.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Effiziente E-Commerce Systeme & Marketplace Lösungen für Ihr Business | ecommezzo",
    description: "Professionelle E-Commerce Lösungen, Digital Marketing und Web Design für nachhaltiges Business-Wachstum.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/Ecommezzo-Logo.png" />
        <link rel="shortcut icon" href="/Ecommezzo-Logo.png" />
        <link rel="apple-touch-icon" href="/Ecommezzo-Logo.png" />
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
      </body>
    </html>
  );
}
