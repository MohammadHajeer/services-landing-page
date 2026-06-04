import { SectionContainer } from "./components/common/SectionContainer";
import {
  Navbar,
  Hero,
  ProfesionalServices,
  OurServices,
  Footer,
  Featured,
  HowWorks,
  Reviews,
  Banner,
  FAQs,
  Blogs,
} from "./components/sections";

function App() {
  return (
    <main>
      <Navbar />

      <Hero />

      <SectionContainer id="about-us">
        <ProfesionalServices />
      </SectionContainer>

      <SectionContainer id="services">
        <OurServices />
      </SectionContainer>

      <SectionContainer id="featured" className="bg-primary rounded-3xl" sectionClassName="px-4">
        <Featured />
      </SectionContainer>

      <SectionContainer id="how-it-works">
        <HowWorks />
      </SectionContainer>

      <SectionContainer id="reviews">
        <Reviews />
      </SectionContainer>
      
      <SectionContainer id="our-blog">
        <Blogs />
      </SectionContainer>

      <SectionContainer id="faqs">
        <FAQs />
      </SectionContainer>

      <Banner />

      <Footer />
    </main>
  );
}

export { App };
