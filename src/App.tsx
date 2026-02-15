import Header from './sections/Header';
import Hero from './sections/Hero';
import Partners from './sections/Partners'; // <-- 1. Добавили импорт
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
    // Изменил фон на #222, чтобы совпадал с Hero и Services (кроме белой секции Partners)
    <div className="min-h-screen bg-[#222] text-white selection:bg-[#e85d04] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Partners /> {/* <-- 2. Вставили секцию сюда */}
        
        {/* Можно временно скрыть Products, если они не нужны, или оставить */}
        <Services />
        <Products /> 
        
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