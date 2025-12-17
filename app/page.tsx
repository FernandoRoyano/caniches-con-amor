import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Community from "./components/sections/Community";
import Newsletter from "./components/sections/Newsletter";
import ContactForm from "./components/forms/ContactForm";
import Footer from "./components/Footer";
import AboutElena from "./components/sections/AboutElena";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutElena/>
        <Features />
        <Testimonials />
        <Community />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer/>

    </>
  );
}
