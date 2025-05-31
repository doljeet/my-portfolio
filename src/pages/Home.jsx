import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { FiSmartphone, FiCode, FiTool, FiBox, FiCpu, FiZap, FiMonitor } from "react-icons/fi";
import { SiPython, SiArduino } from "react-icons/si";
import MobileMenu from '@/components/MobileMenu'
import AnimatedSkillBar from '@/components/AnimatedSkillBar'

export default function Portfolio() {
  return (
    <main className="...">
      {/* Header with Navigation */}
      <header className="fixed top-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 shadow-lg border-b border-gray-800">
        <nav className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto">
          {/* <h1 className="text-2xl font-extrabold text-blue-500 tracking-wide">Portfolio</h1> */}
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-400 transition duration-300">O mnie</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projekty</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition duration-300">Umiejętności</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Kontakt</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <MobileMenu />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-t from-black via-gray-900 to-gray-950 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl"
        >
          <img
            src="/profile.jpg"
            alt="Profilowe"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-800"
          />
        </motion.div>
        <motion.h2
          className="text-4xl mt-6 font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Cześć, jestem Bartek!
        </motion.h2>
        <p className="mt-4 text-gray-400 max-w-xl text-lg">
          Pasjonat nowych technologii, łączący wiedzę techniczną z kreatywnością i doświadczeniem w różnych dziedzinach inżynierii i programowania.
        </p>

        <div className="flex space-x-4 mt-6">
          <a href="/cv.pdf" download="CV.pdf">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition">
              Pobierz CV
            </button>
          </a>
          <a href="#contact">
            <button className="border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-600 px-6 py-2 rounded-lg transition">
              Kontakt
            </button>
          </a>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/doljeet" target="_blank" rel="noopener noreferrer">
            <Github className="text-white hover:text-blue-400 transition" size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-white hover:text-blue-400 transition" size={24} />
          </a>
          <a href="mailto:bartekc858@gmail.com">
            <Mail className="text-white hover:text-blue-400 transition" size={24} />
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      </section>

{/* About Section */}
<section id="about" className="mt-24 px-4 max-w-4xl mx-auto">
  <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-xl">
    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
      O mnie
    </h3>
    <p className="text-gray-300 text-lg leading-relaxed mb-6">
      Jestem technikiem mechatronikiem oraz studentem informatyki z dużym doświadczeniem w tworzeniu różnych rozwiązań technicznych. Moje umiejętności obejmują programowanie mikrokontrolerów, modelowanie 3D, integrację systemów smart home, a także elektrykę i mechanikę.
    </p>
    <p className="text-gray-300 text-lg leading-relaxed mb-6">
      Potrafię łączyć wiedzę z kilku dziedzin, co pozwala mi skutecznie rozwiązywać różnorodne problemy techniczne — od projektowania sprzętu, przez programowanie systemów embedded, aż po wdrażanie rozwiązań IoT.
    </p>
    <p className="text-gray-300 text-lg leading-relaxed mb-6">
      Szukam możliwości współpracy przy ciekawych projektach, które pozwolą mi rozwijać się zawodowo i zdobywać nowe doświadczenia. Chętnie angażuję się w mniejsze lub większe inicjatywy, gdzie moje umiejętności mogą przynieść realną wartość.
    </p>
    <p className="text-gray-300 text-lg leading-relaxed">
      Jeśli szukasz osoby z praktycznym podejściem, łączącej techniczną wiedzę z kreatywnością — zapraszam do kontaktu!
    </p>
  </div>
</section>



      {/* Projects Section */}
      <section id="projects" className="mt-24 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Projekty</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

{/* Skills Section */}
<section id="skills" className="mt-24 px-4 max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
    Umiejętności
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { name: "Programowanie mikrokontrolerów", level: 85, icon: <SiArduino size={40} /> },
      { name: "Embedded Systems", level: 80, icon: <FiCpu size={40} /> },
      { name: "IoT", level: 75, icon: <FiSmartphone size={40} /> },
      { name: "Modelowanie 3D", level: 70, icon: <FiBox size={40} /> },
      { name: "Smart Home Integracja", level: 80, icon: <FiZap size={40} /> },
      { name: "Programowanie (C, C++)", level: 85, icon: <FiCode size={40} /> },
      { name: "Elektryka i Mechanika", level: 75, icon: <FiTool size={40} /> },
      { name: "Python", level: 70, icon: <SiPython size={40} /> }
    ].map((skill, i) => (
      <AnimatedSkillBar key={i} skill={skill} />
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="mt-24 px-4 max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Skontaktuj się ze mną</h3>
        <form className="space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
          <input 
            type="text" 
            placeholder="Imię i nazwisko" 
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          />
          <input 
            type="email" 
            placeholder="Adres email" 
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          />
          <textarea 
            placeholder="Wiadomość" 
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none" 
            rows={5}
          ></textarea>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full font-semibold py-3 rounded-lg hover:shadow-lg transition"
          >
            Wyślij wiadomość
          </button>
        </form>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-20 pb-6">
        © {new Date().getFullYear()} Bartłomiej Chociaj. Wszystkie prawa zastrzeżone.
      </footer>
    </main>
  )
}