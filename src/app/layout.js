import Navbar from '../components/Navbar'; // Navbar bileşenini doğru yoldan import edin / Import the Navbar component from the correct path
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import DynamicMetadata from "../components/DynamicMetadata"; // ✅ Yeni metadata bileşeni

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
        <DynamicMetadata /> {/* ✅ Sayfa başlığını güncelleyen component */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
