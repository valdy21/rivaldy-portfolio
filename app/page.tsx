import { ThemeToggle } from '@/components/ThemeToggle'
import ProjectGrid from '@/components/ProjectGrid'
import { client } from "@/sanity/lib/client"
import Link from 'next/link'

export const revalidate = 0; // <-- INI BARIS SAKTINYA (Artinya: jangan cache data)

async function getProjects() {
  const query = `*[_type == "project"] | order(urutan asc, _createdAt desc) {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    category,
    description
  }`;
  return client.fetch(query);
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-500 selection:bg-blue-500 selection:text-white">
      
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Crafting visual <br className="hidden md:block"/> experiences.
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-[#86868b] font-medium max-w-2xl leading-relaxed tracking-tight">
          Graphic Designer based in Indonesia. Specializing in branding and visual storytelling.
        </p>
        <div className="mt-12">
          <a 
            href="https://wa.me/6285781064052" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1d1d1f] text-white dark:bg-[#f5f5f7] dark:text-black px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 transition-all inline-block shadow-lg"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="work" className="max-w-6xl mx-auto px-6 pb-32">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold tracking-tight">Selected Works</h3>
        </div>

        <ProjectGrid projects={projects} />

        {projects.length === 0 && (
          <div className="text-center py-24 bg-white dark:bg-[#1d1d1f] rounded-[2rem] mt-8 shadow-sm">
            <p className="text-lg text-[#86868b] font-medium">Belum ada karya yang di-upload ke Sanity.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#1d1d1f] transition-colors duration-500">
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