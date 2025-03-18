import React, { useRef } from 'react'
import styled from 'styled-components';
import StarCanvas from '../canvas/Stars';
import emailjs from '@emailjs/browser';
import GlowingSphere from '../canvas/GlowingSphere';

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

const ContactForm = styled.div`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 32px;
    border-radius: 12px;
    box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
    margin-top: 28px;
`;

const ContactTitle = styled.div`
    font-size: 28px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.div`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 80}
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary}; 
    }
`;

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparant;
    border: 1px slid ${({ theme }) => theme.text_secondary}
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => "black"};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary}; 
    }
`;

const ContactButton = styled.div`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: hsla(271, 100%, 50%, 1);
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
`;

const Contact = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "Your-serviceid",
            "your_template_id",
            form.current,
            "tourapiid/tokenid"
        ).then((result) => {
            alert("Message Sent");
            form.current.result();
        },(error => {
            alert(error);
        }))
    }
  return (
    <Container id="Education">
      <Wrapper>
        <StarWrapper>
            <StarCanvas />
        </StarWrapper>
        <GlowingSphere />
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "40px", }}>
          Feel free to reach out.
        </Desc>
        <ContactForm onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder = "Your Email" name="from_email" />
            <ContactInput placeholder = "Your Name" name="from_name" />
            <ContactInput placeholder = "Subject" name="subject" />
            <ContactInputMessage placeholder = "Message" name="message" rows={4} />

            <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;