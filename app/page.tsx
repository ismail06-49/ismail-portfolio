import About from '@/components/About';
import Contact from '@/components/Contact';
import DarkToggle from '@/components/DarkToggle';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Loading from '@/components/Loading';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Profile from '@/public/my-profile.jpg';

export default function Home() {

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 p-6 space-y-10">
      <Loading />
      <Header />
      <section
        id='home'
        className="w-full h-[700px] bg-[var(--home-gradient-start)] rounded-xl overflow-hidden shadow-lg animate-slide-in-right"
        style={{
          backgroundImage: `linear-gradient(to right, var(--home-gradient-start), var(--home-gradient-end)), url('${Profile.src}')`,
          backgroundSize: '100% 200%',
          backgroundPosition: 'calc(100% + 400px) 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Hero />
      </section>
      <section id='about' className='animate-slide-in-left'>
        <About />
      </section>
      {/* <section className="bg-[var(--card)] text-[var(--card-foreground)] rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[var(--accent)]">Projects</h2>
        <ul className="mt-4 list-disc list-inside space-y-2">
          <li><strong>NightPharm</strong> – Night-shift pharmacy app with real-time data</li>
          <li><strong>CraftHub</strong> – Artisan marketplace using Next.js & Tailwind</li>
        </ul>
      </section> */}
      <section id='projects' className='animate-slide-in-right'>
        <Projects />
      </section>
      <section id='skills' className='animate-slide-in-left'>
        <Skills />
      </section>
      <section id='contact' className='animate-slide-in-right'>
        <Contact />
      </section>
      <DarkToggle />
    </main>
  )
}
