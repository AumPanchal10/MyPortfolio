import React, { useState } from 'react';
import styled from "styled-components";
import { projects } from '../../data/constants';
import ProjectCard from '../cards/ProjectCard';
import StarCanvas from '../canvas/Stars'; // Import StarCanvas

// Background container to hold StarCanvas
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; // Place behind other components
  pointer-events: none; // Prevent interference with interactions
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  background: ${({ active, theme }) => (active ? theme.primary + 20 : 'transparent')};
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  // Filter projects based on the selected category
  const filteredProjects = toggle === "all" 
    ? projects 
    : projects.filter((project) => project.category.toLowerCase() === toggle.toLowerCase());

  return (
    <>
      <BackgroundContainer>
        <StarCanvas /> {/* StarCanvas runs in the background */}
      </BackgroundContainer>

      <Container id="Projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc style={{ marginBottom: "40px" }}>
            I have worked on these projects.
          </Desc>

          <ToggleButtonGroup>
            <ToggleButton 
              active={toggle === "all"}
              onClick={() => setToggle("all")}
            >
              ALL
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={toggle === "web app"}
              onClick={() => setToggle("web app")}
            >
              Web APPS
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={toggle === "android app"}
              onClick={() => setToggle("android app")}
            >
              Android apps
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={toggle === "machine learning"}
              onClick={() => setToggle("machine learning")}
            >
              Machine Learning
            </ToggleButton>
          </ToggleButtonGroup>

          <CardContainer>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p>No projects available in this category</p>
            )}
          </CardContainer>
        </Wrapper>
      </Container>
    </>
  );
}

export default Projects;