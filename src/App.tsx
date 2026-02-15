import Header from './sections/Header';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Services from './sections/Services';
import About from './sections/About';
import Team from './sections/Team';
import CTA from './sections/CTA';
import Blog from './sections/Blog';
import FAQ from './sections/FAQ';
import Locations from './sections/Locations';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <About />
        <Team />
        <CTA />
        <Blog />
        <FAQ />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
