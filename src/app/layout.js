import Banner from "../components/Banner";
import Navbar from '../components/Navbar'; // Navbar bileşenini doğru yoldan import edin / Import the Navbar component from the correct path
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicMetadata from "../components/DynamicMetadata"; // ✅ Yeni metadata bileşeni
import SplashScreen from '../components/SplashScreen';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <SplashScreen /> */}
        <DynamicMetadata /> {/* ✅ Sayfa başlığını güncelleyen component */}
        {/*<Banner />*/}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
