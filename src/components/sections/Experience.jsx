import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import styled from 'styled-components';
import { experiences } from '../../data/constants';
import ExperienceCard from '../cards/ExperienceCard';
import StarCanvas from '../canvas/Stars';

// Container for the entire Experience section
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
  overflow: hidden; /* Ensure StarCanvas stays within bounds */
`;

// Wrapper for content inside the Experience section
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

// Wrapper for positioning StarCanvas in the background
const StarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none; /* Prevent any interaction with the canvas */
`;

// Title styling
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  z-index: 1; /* Keep above StarCanvas */
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

// Description styling
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  z-index: 1; /* Keep above StarCanvas */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Main Experience component
const Experience = () => {
  return (
    <Container id="Experience">
      {/* StarCanvas positioned absolutely in the background */}
      <StarWrapper>
        <StarCanvas />
      </StarWrapper>

      <Wrapper>
        <Title>Experience</Title>
        <Desc style={{ marginBottom: "40px" }}>
          My work experience
        </Desc>

        {/* Vertical timeline for displaying experiences */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={`experience-${index}`}
              experience={experience} 
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
