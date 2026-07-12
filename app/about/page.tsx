import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-500 selection:bg-blue-500 selection:text-white">
      
      {/* Navbar (Identik dengan halaman utama) */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#f5f5f7]/70 dark:bg-black/70 border-b border-black/5 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
            Rivaldy Fernando.
          </Link>
          <div className="flex gap-6 items-center font-medium text-sm">
            <Link href="/" className="hover:text-black/50 dark:hover:text-white/50 transition-colors">Work</Link>
            <Link href="/about" className="hover:text-black/50 dark:hover:text-white/50 transition-colors">About</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Konten About - Spacing Lega, Teks Elegan */}
      <section className="flex-grow max-w-4xl mx-auto px-6 pt-32 pb-32 flex flex-col w-full">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center md:text-left border-b border-black/5 dark:border-white/10 pb-8">
          About Me
        </h2>
        
        <div className="max-w-3xl flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold tracking-tight mb-1">Rivaldy Fernando</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#86868b]">Graphic Designer</p>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg md:text-xl text-[#86868b] dark:text-zinc-400 font-medium leading-relaxed tracking-tight">
              I am a graphic designer with over 5 years of experience working on various visual projects. 
              I focus on design quality, creativity, and consistency. 
            </p>
            <p className="mt-6 text-lg md:text-xl text-[#86868b] dark:text-zinc-400 font-medium leading-relaxed tracking-tight">
              Additionally, I have a deep interest in photography and videography, and I am always striving to grow within the creative industry.
            </p>
          </div>
        </div>
      </section>

      {/* Footer (Identik dengan halaman utama) */}
      <footer className="w-full border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#1d1d1f] transition-colors duration-500 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#86868b] text-sm font-medium">© 2026 Rivaldy Fernando. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-semibold">
            <a href="https://www.linkedin.com/in/rivaldy-fernando/" target="_blank" rel="noopener noreferrer" className="hover:text-black/50 dark:hover:text-white/50 transition-colors">LinkedIn</a>
            <a href="https://www.behance.net/rivaldyfernando2" target="_blank" rel="noopener noreferrer" className="hover:text-black/50 dark:hover:text-white/50 transition-colors">Behance</a>
          </div>
        </div>
      </footer>

    </main>
  )
}