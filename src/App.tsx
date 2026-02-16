import Header from './sections/Header';
import Hero from './sections/Hero';
import Partners from './sections/Partners';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import About from './sections/About';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Services />
        <WhyChooseUs />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;