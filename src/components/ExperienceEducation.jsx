import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceEducation = () => {
  // Dane doświadczenia
  const experience = [
    {
      id: 1,
      title: "Monter Automotive",
      company: "Synerte Sp. z o.o.",
      period: "2024/07 - 2024/09",
      description: "Montaż komponentów nowoczesnych linii produkcyjnych fabryki Mercedes-Benz Group AG zgodnie z wymaganiami technicznymi i normami jakości.",
      icon: <Briefcase className="text-blue-400" />
    },
    {
      id: 2,
      title: "Operator tokarki",
      company: "Correia & Cardoso.Lda",
      period: "2023/03 - 2023/04",
      description: "Toczenie elementów według rysunku technicznego i pomiary gotowych części.",
      icon: <Briefcase className="text-blue-400" />
    },
    {
      id: 3,
      title: "Operator Programista obrabiarki 3-osiowej CNC",
      company: "Sierosławski Group",
      period: "2022/10 - 2022/11",
      description: "Przygotowywanie programu obróbki elementów według rysunku technicznego i nadzór pracy obrabiarki.",
      icon: <Briefcase className="text-blue-400" />
    },
        {
      id: 4,
      title: "Technik sieci komputerowych",
      company: "Rozanski.it",
      period: "2021/10 - 2021/11",
      description: "Planowanie i budowa sieci komputerowej, konfiguracja switchy, serwerów i AP, integracja elementów Smart Home i testy działania systemu.",
      icon: <Briefcase className="text-blue-400" />
    },
  ];

  // Dane edukacji
  const education = [
    {
      id: 1,
      title: "Informatyka",
      institution: "Politechnika Gdańska",
      period: "2024 - teraz",
      description: " ",
      icon: <GraduationCap className="text-purple-400" />
    },
    {
      id: 2,
      title: "Technik Mechatronik",
      institution: "Zespół Szkół Mechanicznych nr 7 w Rzeszowie",
      period: "2019 - 2024",
      description: "Specjalizacja: Systemy automatyki przemysłowej i programowanie sterowników PLC.",
      icon: <GraduationCap className="text-purple-400" />
    }
  ];

  // Warianty animacji
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section id="experience" className="mt-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-xl"
      >
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Doświadczenie & Edukacja
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Kolumna Doświadczenie */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-blue-400 mb-6 flex items-center"
            >
              <Briefcase className="mr-2" />
              Doświadczenie
            </motion.h4>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Linia osi czasu */}
              <motion.div
                variants={lineVariants}
                className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
              />
              
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-10 pb-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold shadow-lg"
                  >
                    {exp.icon}
                  </motion.div>
                  <h5 className="text-lg font-semibold text-white">{exp.title}</h5>
                  <p className="text-blue-400 text-sm">{exp.company} | {exp.period}</p>
                  <p className="text-gray-300 mt-2 text-sm">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Kolumna Edukacja */}
          <div>
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-purple-400 mb-6 flex items-center"
            >
              <GraduationCap className="mr-2" />
              Edukacja
            </motion.h4>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Linia osi czasu */}
              <motion.div
                variants={lineVariants}
                className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 origin-top"
              />
              
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-10 pb-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 text-white font-bold shadow-lg"
                  >
                    {edu.icon}
                  </motion.div>
                  <h5 className="text-lg font-semibold text-white">{edu.title}</h5>
                  <p className="text-purple-400 text-sm">{edu.institution} | {edu.period}</p>
                  <p className="text-gray-300 mt-2 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceEducation;