import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <main className="min-h-screen bg-dark-mode-bg text-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}