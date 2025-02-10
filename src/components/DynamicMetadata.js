"use client";

import { usePathname } from "next/navigation";
import { useEffect, } from "react";

export default function DynamicMetadata() {
  const pathname = usePathname();
  const pageName = pathname
    .replace(/\//g, " ") // / ile ayrılan pathleri boşluk yap
    .trim()
    .split(" ") // Boşluklara göre parçala
    .filter(Boolean) // Boşlukları kaldır
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // İlk harfi büyük yap
    .join(" | "); // Başlığı güzelce formatla

  useEffect(() => {
    document.title = pageName ? `${pageName} | Ecommezzo` : "Home - Ecommezzo";

    // 📌 Favicon'u güncelle
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/Ecommezzo-Logo.png"; // Favicon yolunu ayarla
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "/Ecommezzo-Logo.png";
      document.head.appendChild(newFavicon); // Eğer favicon yoksa, head'e ekle
    }
  }, [pageName]); // Sayfa değişince title ve favicon güncellenir

  return null; // Hiçbir şey render etme, sadece title ve favicon güncelle
}
