'use client';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function ReferenzSection() {
  const kundenLogos = [
    '/gta.png',
    '/gta.png',
    '/gta.png',
    '/gta.png',
    '/Hero.png',
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-200/20 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-200/15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-200/10 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <span className="text-3xl">🏆</span>
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Erfolgreiche Projekte & Referenzen
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            Entdecken Sie unsere <span className="font-bold text-cyan-600">erfolgreichen Projekte</span> und 
            <span className="font-bold text-blue-600"> zufriedenen Kunden</span>. Jedes Projekt ist ein Beweis für 
            unsere Expertise und Qualität.
          </p>
        </motion.div>

        {/* Enhanced Logo Marquee - Full Width */}
        <div className="relative mb-16 -mx-6">
          <motion.div 
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-100 mx-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Unsere Kunden</h3>
            <div className="relative w-full overflow-hidden">
              <div className="logo-marquee">
                <div className="logo-track">
                  {[...kundenLogos, ...kundenLogos, ...kundenLogos, ...kundenLogos, ...kundenLogos, ...kundenLogos, ...kundenLogos].map((logo, i) => (
                    <motion.div 
                      key={i} 
                      className="logo-item"
                      whileHover={{ 
                        scale: 1.15,
                        y: -8,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <div className="relative w-full h-full group">
                        <Image
                          src={logo}
                          alt={`Kunde ${i + 1}`}
                          fill
                          className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-500"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          whileHover={{ scale: 1.1 }}
                        />
                        {/* Glow Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
                          whileHover={{ scale: 1.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Overview Cards - Only Shopify & WordPress */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {[
            {
              title: "Shopify E-Commerce",
              category: "Online-Shop",
              description: "Professionelle E-Commerce Lösungen mit Shopify. Optimierte Conversion und maximale Umsätze.",
              image: "/gta.png",
              stats: { conversion: "+45%", revenue: "+120%", traffic: "+80%" },
              color: "from-green-500 to-emerald-600",
              features: ["E-Commerce Design", "Payment Integration", "Shop Optimization"],
              gradient: "from-emerald-500/20 to-green-500/20",
              icon: "🛒"
            },
            {
              title: "WordPress Websites",
              category: "Website & Blog",
              description: "Moderne WordPress-Websites und Blogs mit SEO-Optimierung und Content Management.",
              image: "/Hero.png",
              stats: { leads: "+60%", engagement: "+90%", seo: "+75%" },
              color: "from-blue-500 to-cyan-600",
              features: ["Custom Design", "SEO Optimized", "Content Management"],
              gradient: "from-blue-500/20 to-cyan-500/20",
              icon: "🌐"
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform perspective-1000"
            >
              {/* Service Image with Creative Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Creative Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Floating Icon */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <span className="text-3xl">{service.icon}</span>
                </motion.div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features with Animation */}
                <div className="mb-6">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      className="flex items-center mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.span 
                        className="w-3 h-3 bg-cyan-500 rounded-full mr-4"
                        whileHover={{ scale: 1.5, backgroundColor: "#0891b2" }}
                      ></motion.span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats with Creative Design */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  {Object.entries(service.stats).map(([key, value], i) => (
                    <motion.div
                      key={key}
                      className="text-center group"
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl font-bold text-cyan-600 mb-1 group-hover:text-cyan-700 transition-colors duration-300">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize font-medium">
                        {key}
                      </div>
                      {/* Animated Underline */}
                      <motion.div
                        className="h-0.5 bg-cyan-500 mt-2"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: index * 0.3 + i * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div 
          className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Kundenstimmen</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Müller",
                company: "Fashion Boutique",
                text: "Ecommezzo hat unseren Online-Shop komplett transformiert. Die Conversion-Rate ist um 45% gestiegen!",
                rating: 5,
                avatar: "👩‍💼"
              },
              {
                name: "Michael Schmidt",
                company: "Tech Startup",
                text: "Professionelle Arbeit, schnelle Umsetzung und hervorragende Ergebnisse. Sehr empfehlenswert!",
                rating: 5,
                avatar: "👨‍💻"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-yellow-400 text-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
