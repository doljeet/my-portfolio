import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md z-40 border-b border-gray-800"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              <a 
                href="#about" 
                className="text-white hover:text-blue-400 transition px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                O mnie
              </a>
              <a 
                href="#projects" 
                className="text-white hover:text-blue-400 transition px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Projekty
              </a>
              <a 
                href="#skills" 
                className="text-white hover:text-blue-400 transition px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Umiejętności
              </a>
              <a 
                href="#education" 
                className="text-white hover:text-blue-400 transition px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Doświadczenie i Edukacja
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-blue-400 transition px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}