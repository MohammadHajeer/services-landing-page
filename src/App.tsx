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
} from "./components/sections";

function App() {
  return (
    <main>
      {/* <Navbar /> */}

      {/* <Hero /> */}

      {/* <SectionContainer id="services">
        <ProfesionalServices />
      </SectionContainer> */}

      {/* <SectionContainer id="our-services">
        <OurServices />
      </SectionContainer> */}

      {/* <SectionContainer id="featured" className="bg-primary rounded-3xl">
        <Featured />
      </SectionContainer> */}

      {/* <SectionContainer id="how-it-works">
        <HowWorks />
      </SectionContainer> */}

      <SectionContainer id="how-it-works">
        <Reviews />
      </SectionContainer>

      {/* <SectionContainer id="how-it-works">
        <FAQs />
      </SectionContainer> */}

      {/* <Banner /> */}

      {/* <Footer /> */}
    </main>
  );
}

export { App };
