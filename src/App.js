import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StarCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import SEO from "./components/SEO";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg};
`;

const StarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return(
    <ThemeProvider theme={darkTheme}>
      <SEO />
      <BrowserRouter>
        <MainContainer>
          <StarWrapper>
            <StarCanvas />
          </StarWrapper>
          <ContentWrapper>
            <Navbar />
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Wrapper>
              <Projects />
            </Wrapper>
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
          </ContentWrapper>
        </MainContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
