import About from '@/components/About';
import Contact from '@/components/Contact';
import DarkToggle from '@/components/DarkToggle';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Profile from '@/public/my-profile.jpg'

export default function Home() {

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 p-6 space-y-10">
      <section
        id='home'
        className="w-full h-[700px] bg-[var(--home-gradient-start)] relative rounded-xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: `linear-gradient(to right, var(--home-gradient-start), var(--home-gradient-end)), url('${Profile.src}')`,
          backgroundSize: '100% 200%',
          backgroundPosition: 'calc(100% + 300px) 20%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      {/* <section className="bg-[var(--card)] text-[var(--card-foreground)] rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[var(--accent)]">Projects</h2>
        <ul className="mt-4 list-disc list-inside space-y-2">
          <li><strong>NightPharm</strong> – Night-shift pharmacy app with real-time data</li>
          <li><strong>CraftHub</strong> – Artisan marketplace using Next.js & Tailwind</li>
        </ul>
      </section> */}
      <section id='projects'>
        <Projects />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <DarkToggle />
    </main>
  )
}
