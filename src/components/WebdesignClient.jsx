'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import { ShoppingBagIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ShopifySection from '@/components/WebdesignShopify';
import WordpressSection from '@/components/WebdesignWordpress';
import SeoSection from '@/components/WebdesignSeo';
import ResponsiveSection from '@/components/WebdesignResponsive';
import ReferenzSection from '@/components/WebdesignReferenz';
import CTASection from '@/components/WebdesignCTA';
import Portfolio from '@/components/Portfolio';
import ShopRelaunch from '@/components/ShopRelaunch';

export default function WebdesignClient() {
  const [activeDevice, setActiveDevice] = useState('mobile');
  
  // Tüm interactive logic burada
  return (
    <div className="text-gray-900 dark:text-white bg-white dark:bg-gray-950">
      {/* Webdesign content */}
    </div>
  );
}
