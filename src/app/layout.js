import Banner from "../components/Banner";
import Navbar from '../components/Navbar'; // Navbar bileşenini doğru yoldan import edin / Import the Navbar component from the correct path
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";
import DynamicMetadata from "../components/DynamicMetadata"; // ✅ Yeni metadata bileşeni
import SplashScreen from '../components/SplashScreen';
import StyledComponentsRegistry from '../lib/registry';


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${roboto.variable} antialiased`}>
        <StyledComponentsRegistry>
          {/* <SplashScreen /> */}
          <DynamicMetadata /> {/* ✅ Sayfa başlığını güncelleyen component */}
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
