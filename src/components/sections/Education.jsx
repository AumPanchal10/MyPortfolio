import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import styled from 'styled-components';
import { education } from '../../data/constants';
import EducationCard from '../cards/EducationCard';
import StarCanvas from '../canvas/Stars';
import EarthCanvas from '../canvas/Earth';

// Container for the Education section
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  overflow: hidden; /* Ensures StarCanvas stays within the bounds */
`;

// Wrapper for the content inside the Education section
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

// StarWrapper for positioning the StarCanvas in the background
const StarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none; /* Prevent any interaction with StarCanvas */
`;

// Title styling
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  z-index: 1; /* Keep Title above StarCanvas */
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
  z-index: 1; /* Keep Desc above StarCanvas */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Main Education component
const Education = () => {
  return (
    <Container id="Education">
      {/* StarCanvas is positioned in the background */}
      <StarWrapper>
        <StarCanvas />
      </StarWrapper>

      <Wrapper>
        <Title>Education</Title>
        <Desc style={{ marginBottom: "40px" }}>
          My education has been a journey of self-discovery.
        </Desc>

        {/* Vertical timeline for displaying education history */}
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard 
              key={`education-${index}`}
              education={education} 
            />
          ))}
        </VerticalTimeline>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
}

export default Education;
