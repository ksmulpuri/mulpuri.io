import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 100px 50px;
  background-color: ${props => props.theme.sectionAlt};

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const SectionLabel = styled(motion.span)`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 12px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: ${props => props.theme.text};
  letter-spacing: -0.5px;
`;

const SectionDesc = styled(motion.p)`
  font-size: 1.05rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 40px;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
`;

const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 10px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}15;
  }

  &::placeholder {
    color: ${props => props.theme.secondary};
    opacity: 0.6;
  }
`;

const TextArea = styled.textarea`
  padding: 14px 16px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 10px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  font-size: 0.95rem;
  font-family: inherit;
  min-height: 140px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}15;
  }

  &::placeholder {
    color: ${props => props.theme.secondary};
    opacity: 0.6;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 14px 32px;
  background: linear-gradient(135deg, ${props => props.theme.gradientStart}, ${props => props.theme.gradientEnd});
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${props => props.theme.primary}40;
  }
`;

const EMAIL = 'krishnasaimulpuri@gmail.com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ContactSection id="contact">
      <ContactContent>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </SectionTitle>
        <SectionDesc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new opportunities, interesting projects, or just saying hello.
        </SectionDesc>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope size={16} />
              {submitted ? 'Opening Email Client...' : 'Send Message'}
            </SubmitButton>
          </Form>
        </motion.div>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
