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
          backgroundImage: `linear-gradient(to right, var(--home-gradient-start), var(--home-gradient-end)), url('${Profile.src}')`
        }}
      >
        <Hero />
      </section>
      <section id='about' className='animate-slide-in-left'>
        <About />
      </section>
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
