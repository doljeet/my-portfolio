import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Github, Link2, ArrowLeft } from 'lucide-react'
import { projects } from '@/data/projects'
import * as LucideIcons from 'lucide-react'

export default function ProjectDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Projekt nie został znaleziony</p>
      </div>
    )
  }

  const getIconComponent = (iconName) => {
    const Icon = LucideIcons[iconName]
    return Icon ? <Icon size={18} /> : null
  }

  return (
    <main className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-white px-6 py-16 max-w-5xl mx-auto font-sans">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center space-x-2 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition"
      >
        <ArrowLeft size={20} />
        <span>Powrót</span>
      </button>

      <motion.h1
        className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.title}
      </motion.h1>

      <motion.p
        className="text-gray-300 mb-10 leading-relaxed text-lg max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {project.longDescription}
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-6 mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {project.images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Zrzut ekranu ${i + 1}`}
            className="rounded-2xl shadow-lg border border-gray-700 object-cover w-full h-60 md:h-80"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          />
        ))}
      </motion.div>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-semibold text-purple-400 mb-6">Wykorzystane technologie</h2>
        <ul className="space-y-3 max-w-sm">
          {project.skills.map((skill, i) => (
            <li
              key={i}
              className="flex items-center space-x-3 text-white text-lg font-medium"
            >
              <CheckCircle className="text-green-500" size={24} />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.div 
        className="flex flex-wrap gap-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3 }}
      >
        {project.links.map((link, i) => (
          <a
            href={link.href}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button
              className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center space-x-2 px-4 py-2 rounded-lg transition"
            >
              {getIconComponent(link.icon)}
              <span>{link.label}</span>
            </button>
          </a>
        ))}
      </motion.div>
    </main>
  )
}