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
            className="fixed inset-0 bg-[#f5f5f7]/60 dark:bg-black/60 backdrop-blur-3xl z-50 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              // PERBAIKAN: Kotak modal dibuat max-h-[90vh] dan overflow-y-auto agar tombol close tidak akan pernah terpotong di HP
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-white/90 dark:bg-[#1d1d1f]/90 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] overflow-y-auto md:overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 cursor-default"
            >
              {/* PERBAIKAN SPACING GAMBAR: p-8 biar rapi, min-h dan max-h disesuaikan biar proporsional */}
              <div className="w-full md:flex-1 bg-[#f5f5f7]/50 dark:bg-black/30 flex items-center justify-center p-8 md:p-12 min-h-[30vh]">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="max-w-full max-h-[35vh] md:max-h-[70vh] object-contain rounded-xl shadow-sm mx-auto"
                />
              </div>

              {/* PERBAIKAN SPACING TEKS: Padding disamakan jadi p-8 biar ngasih ruang nafas ke tulisan "KARYA" */}
              <div className="w-full md:w-[400px] lg:w-[450px] p-8 md:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5">
                <div className="mb-6 md:mb-0 md:overflow-y-auto md:pr-4">
                  <span className="text-xs font-semibold tracking-wider text-[#86868b] uppercase mb-3 block">
                    {selectedProject.category ? selectedProject.category.replace('-', ' ') : 'Karya'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[#86868b] text-[15px] leading-relaxed">
                    {selectedProject.description || "Tidak ada deskripsi untuk karya ini."}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-4 md:mt-8 w-full bg-gray-100 dark:bg-white/10 text-black dark:text-white py-4 rounded-2xl md:rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-white/20 active:scale-95 transition-all text-sm flex-shrink-0"
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