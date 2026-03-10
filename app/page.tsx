import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: 1, background: "#e4ecef" }} />
        <HowItWorks />
        <div style={{ height: 1, background: "#e4ecef" }} />
        <Products />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}