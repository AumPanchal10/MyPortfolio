
import React, { useState } from 'react';
import styled from 'styled-components';

const LanguageSelect = styled.select`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  cursor: pointer;
  margin-left: 16px;
`;

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'mr', name: 'मराठी' },
];

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageChange = (e) => {
    setCurrentLang(e.target.value);
    // Add translation logic here
  };

  return (
    <LanguageSelect value={currentLang} onChange={handleLanguageChange}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </LanguageSelect>
  );
};

export default LanguageSwitcher;
