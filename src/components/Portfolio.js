'use client';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Portfolio() {
  const kundenLogos = [
    '/Kinetiq-Logo.png',
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white via-white to-white relative overflow-hidden">
    
      <div className="max-w-7xl mx-auto relative z-10">
   

        {/* Portfolio Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-gray-800">Unsere Website-Projekte</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreichen Website-Projekte und sehen Sie, wie wir 
            <span className="font-bold text-cyan-600"> Ihre Vision</span> in die Realität umsetzen.
          </p>
        </motion.div>

        {/* Portfolio Images - Yan Yana */}
        <div className="grid md:grid-cols-3 gap-8 mt-8 bg-white">
          {[
            {
              title: "Kinetiq PhysioMed",
              category: "Blog Website",
              description: "Moderne Physiotherapie-Website mit Online-Terminbuchung",
              image: "/KinetiqPhysioMed/Kinetiq1.jpg",
              video: "/KinetiqPhysioMed/KinetiqMobile.mp4",
              link: "/projekte/kinetiq-physiomed",
            },
            {
              title: "Megaman Fashion",
              category: "Online-Shop",
              description: "Professioneller E-Commerce Shop mit optimierter Conversion und modernem Design",
              image: "/Megaman/Megaman-Logo.png",
              video: "/KinetiqPhysioMed/KinetiqMobile.mp4",
              link: "/projekte/megaman",
            },
            {
              title: "Moongirl Lingerie",
              category: "Online-Shop",
              description: "Professioneller E-Commerce Shop mit optimierter Conversion und modernem Design",
              image: "/KinetiqPhysioMed/KinetiqPhysiomed.jpg",
              video: "/KinetiqPhysioMed/KinetiqMobile.mp4",
              link: "/projekte/moongirl",
            }
            
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Sadece Görsel - Kart Dışında */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[500px] object-contain bg-white/10 p-4 group-hover:opacity-0 transition-opacity duration-500"
                />
                
                {/* Video Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <video
                    className="w-full h-full object-contain bg-white/10 p-4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Görsel Altındaki Yazılar */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-cyan-600 transition-colors duration-300 flex items-center justify-center gap-2">
                  {project.title}
                  <motion.span
                    className="text-cyan-600"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
