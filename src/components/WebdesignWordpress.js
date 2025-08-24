'use client';
import { motion } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function WordPressSection() {
  return (
    <section id="wordpress" className="bg-white py-32 px-6 relative overflow-hidden">
      {/* 4.1. Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <div className="absolute top-20 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-orange-300 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-100 rounded-full opacity-10"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 4.2. Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
              <GlobeAltIcon className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            WordPress Website Experte
          </h2>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700">
            <span className="font-bold text-orange-600">Website & Blog Spezialist</span> für professionelle 
            <span className="font-bold text-red-600"> Unternehmenswebsites, Blogs und Portfolios</span>. 
            WordPress ist die <span className="font-bold text-orange-600">beste Wahl für Content-Websites</span> - 
            von der Unternehmenspräsentation bis zum Blog. Ihre Website wird nicht nur modern aussehen, 
            sondern auch <span className="font-bold text-red-600">maximale Flexibilität</span> bieten.
          </p>
        </motion.div>

        {/* 4.3. Technical Skills Grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: "🌐",
              title: "HTML5 & CSS3",
              desc: "Semantic HTML, Flexbox, Grid, Animations",
              color: "from-blue-500 to-cyan-500",
              skills: ["Responsive Design", "CSS Grid", "Flexbox", "Animations"]
            },
            {
              icon: "⚡",
              title: "JavaScript ES6+",
              desc: "Modern JS, React, Vue.js Integration",
              color: "from-yellow-500 to-orange-500",
              skills: ["ES6+ Features", "DOM Manipulation", "AJAX", "React/Vue"]
            },
            {
              icon: "🐘",
              title: "PHP & MySQL",
              desc: "Custom Plugins, Database Optimization",
              color: "from-purple-500 to-pink-500",
              skills: ["Custom Plugins", "MySQL", "REST API", "Security"]
            },
            {
              icon: "🎨",
              title: "WordPress Core",
              desc: "Theme Development, Customization",
              color: "from-green-500 to-teal-500",
              skills: ["Theme Dev", "Plugin Dev", "Hooks", "Customization"]
            }
          ].map(({ icon, title, desc, color, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group bg-gradient-to-br from-gray-50 to-white border-2 border-orange-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 transform perspective-1000"
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-3xl">{icon}</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{desc}</p>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center text-xs text-gray-600 group-hover:text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 group-hover:bg-orange-500 transition-colors duration-300"></span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4.4. WordPress Features Showcase */}
        <motion.div 
          className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 mb-20 border-2 border-orange-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">WordPress für Websites & Blogs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-600 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">🌐</span>
                Website Development
              </h4>
              <div className="space-y-4">
                {[
                  { 
                    title: "Unternehmenswebsites", 
                    desc: "Professionelle Websites für Unternehmen und Dienstleister",
                    icon: "🏢",
                    features: ["Responsive Design", "SEO-optimiert", "Content Management"]
                  },
                  { 
                    title: "Blog & Portfolio", 
                    desc: "Moderne Blogs und Portfolio-Websites",
                    icon: "📝",
                    features: ["Blog System", "Portfolio Gallery", "Social Media Integration"]
                  },
                  { 
                    title: "Custom Plugins", 
                    desc: "Maßgeschneiderte Plugins für spezifische Anforderungen",
                    icon: "🔌",
                    features: ["Custom Post Types", "Advanced Forms", "API Integration"]
                  }
                ].map(({ title, desc, icon, features }, index) => (
                  <motion.div 
                    key={title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="group p-4 bg-white rounded-xl border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{title}</h5>
                        <p className="text-sm text-gray-600 mt-1">{desc}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {features.map((feature, i) => (
                            <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-red-600 flex items-center">
                <span className="w-8 h-8 bg-red-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">🔒</span>
                Content & Security
              </h4>
              <div className="space-y-4">
                {[
                  { 
                    title: "Content Management", 
                    desc: "Einfache Content-Verwaltung und Updates",
                    icon: "📝",
                    features: ["User-friendly CMS", "Media Library", "Content Editor"]
                  },
                  { 
                    title: "Security & Updates", 
                    desc: "Maximale Sicherheit und regelmäßige Updates",
                    icon: "🔒",
                    features: ["SSL Setup", "Firewall", "Regular Updates"]
                  },
                  { 
                    title: "SEO & Analytics", 
                    desc: "Suchmaschinenoptimierung und detaillierte Analysen",
                    icon: "📊",
                    features: ["Schema Markup", "Google Analytics", "Search Console"]
                  }
                ].map(({ title, desc, icon, features }, index) => (
                  <motion.div 
                    key={title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: -10,
                      transition: { duration: 0.2 }
                    }}
                    className="group p-4 bg-white rounded-xl border border-red-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">{title}</h5>
                        <p className="text-sm text-gray-600 mt-1">{desc}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {features.map((feature, i) => (
                            <span key={i} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4.5. Technical Expertise Showcase */}
        <motion.div 
          className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 mb-20 border-2 border-orange-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Technische Expertise & Best Practices</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-orange-600">Custom Development</h4>
              <p className="text-gray-600 text-sm">
                Maßgeschneiderte WordPress-Lösungen mit modernsten Technologien
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-red-600">Security First</h4>
              <p className="text-gray-600 text-sm">
                Maximale Sicherheit durch bewährte Best Practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-orange-700">Performance</h4>
              <p className="text-gray-600 text-sm">
                Optimierte Ladezeiten und beste User Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
