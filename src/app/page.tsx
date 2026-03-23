import Hero from "../components/sections/Hero";
import Units from "../components/sections/Units";
import Burgers from "../components/sections/Burgers";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import  Contact  from "../components/sections/Contact";

export default function Home() {
  return (
    <main >
      <Hero />
      <About />
      <Burgers />
      <Units />
      <Testimonials />
      <Contact />
    </main>
  );
}
