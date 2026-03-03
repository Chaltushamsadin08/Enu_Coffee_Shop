import Hero from "../components/home/Hero"
import ProductsPreview from "../components/home/ProductsPreview";
import CTA from "../components/home/CTA";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsPreview />
      <CTA />
      <About />
      <Testimonials />
    </>
  );
}
