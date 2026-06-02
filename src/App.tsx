import { SectionContainer } from "./components/common/SectionContainer";
import { Navbar, Hero, ProfesionalServices } from "./components/sections";

function App() {
  return (
    <main>
      <Navbar />

      <Hero />

      <SectionContainer id="services">
        <ProfesionalServices />
      </SectionContainer>
    </main>
  );
}

export { App };
