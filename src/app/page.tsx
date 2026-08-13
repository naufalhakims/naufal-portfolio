import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Expertise from "@/src/components/Expertise";
import ExperienceGrid from "@/src/components/ExperienceGrid";
import Projects from "@/src/components/Projects";
import Certifications from "@/src/components/Certifications";
import ContactFooter from "@/src/components/ContactFooter";
import CustomCursor from "@/src/components/CustomCursor";

export default function Home() {
  return (
    <>
      <Navbar />
      <CustomCursor />
      <div>
        <main>
          <Hero />
          <Expertise />
          <ExperienceGrid />
          <Projects />
          <Certifications />
        </main>
        <ContactFooter />
      </div>
    </>
  );
}
