'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <motion.div 
            key={project._id} 
            onClick={() => setSelectedProject(project)}
            // Style kartu dibikin kontras halus: putih di atas background abu muda (light), atau abu gelap di atas hitam murni (dark)
            className="group cursor-pointer flex flex-col rounded-[2rem] bg-white dark:bg-[#1d1d1f] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/5 transition-all duration-500"
            whileHover={{ y: -4, scale: 0.99 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-full aspect-square overflow-hidden relative bg-[#f5f5f7] dark:bg-black/50">
              {project.imageUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[#86868b] text-sm">No image</span>
                </div>
              )}
            </div>

            <div className="p-8">
              <span className="text-xs font-semibold tracking-wider text-[#86868b] uppercase mb-2 block">
                {project.category ? project.category.replace('-', ' ') : 'Karya'}
              </span>
              <h4 className="text-xl font-bold tracking-tight group-hover:text-blue-500 transition-colors">
                {project.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
            // Efek blur maksimal ala VisionOS / iOS
            className="fixed inset-0 bg-[#f5f5f7]/60 dark:bg-black/60 backdrop-blur-3xl z-50 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl flex flex-col md:flex-row bg-white/80 dark:bg-[#1d1d1f]/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 dark:border-white/10 cursor-default"
            >
              <div className="flex-1 bg-[#f5f5f7]/50 dark:bg-black/30 flex items-center justify-center overflow-hidden p-6 md:p-12">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain rounded-2xl shadow-sm"
                />
              </div>

              <div className="w-full md:w-96 p-8 md:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#86868b] uppercase mb-3 block">
                    {selectedProject.category ? selectedProject.category.replace('-', ' ') : 'Karya'}
                  </span>
                  <h3 className="text-3xl font-bold tracking-tight mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[#86868b] text-[15px] leading-relaxed overflow-y-auto max-h-48 md:max-h-96 pr-2">
                    {selectedProject.description || "Tidak ada deskripsi untuk karya ini."}
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 w-full bg-[#f5f5f7] text-[#1d1d1f] dark:bg-white/10 dark:text-white py-4 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/20 active:scale-95 transition-all text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}