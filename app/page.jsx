import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/about";
import Featured from "@/components/featured";
import Recommend from "@/components/recommend";
import Find from "@/components/find";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recommend />
      <Find />
      <Testimonial />
      <Footer />
    </div>
  );
}
