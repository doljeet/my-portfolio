import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.09 }}
      className="bg-gray-900 rounded-2xl shadow-md hover:shadow-xl border border-gray-700"
    >
      <div className="h-40 bg-gray-800 flex items-center justify-center overflow-hidden rounded-t-2xl"> {/* Dodane rounded-t-2xl */}
        {project.images && project.images.length > 0 && (
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold mb-2 text-white">{project.title}</h4>
        <p className="text-gray-400 text-sm mb-3">{project.shortDescription}</p>
        <Link to={`/project/${project.slug}`}>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            Zobacz szczegóły →
          </button>
        </Link>
      </div>
    </motion.div>
  )
}