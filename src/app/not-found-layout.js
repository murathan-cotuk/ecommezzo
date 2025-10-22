import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function NotFoundLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/Ecommezzo-Logo.png" />
        <link rel="shortcut icon" href="/Ecommezzo-Logo.png" />
        <link rel="apple-touch-icon" href="/Ecommezzo-Logo.png" />
        <title>404 - Seite nicht gefunden | ecommezzo</title>
        <meta name="description" content="Die gesuchte Seite wurde nicht gefunden. Zurück zur Startseite von ecommezzo." />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
