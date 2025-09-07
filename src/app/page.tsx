import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicTestmonialCards from "@/components/TestmonialCards";
import Webinars from "@/components/Webinars";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]"> 
          <HeroSection/>
          <FeaturedCourses/>
          <ChooseUs/>
          <MusicTestmonialCards/>
          <Webinars/>
          <Instructors/>
          <Footer/>
    </main>
    
  );
}
