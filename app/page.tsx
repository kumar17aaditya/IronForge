import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileWhatsAppBar } from "@/components/layout/MobileWhatsAppBar";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Programs } from "@/components/sections/Programs";
import { TrainingEnvironment } from "@/components/sections/TrainingEnvironment";
import { Memberships } from "@/components/sections/Memberships";
import { WhyIronForge } from "@/components/sections/WhyIronForge";
import { FacilityGallery } from "@/components/sections/FacilityGallery";
import { Coaches } from "@/components/sections/Coaches";
import { Transformations } from "@/components/sections/Transformations";
import { Testimonials } from "@/components/sections/Testimonials";
import { Enquiry } from "@/components/sections/Enquiry";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Programs />
        <TrainingEnvironment />
        <Memberships />
        <WhyIronForge />
        <FacilityGallery />
        <Coaches />
        <Transformations />
        <Testimonials />
        <Enquiry />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileWhatsAppBar />
    </>
  );
}
