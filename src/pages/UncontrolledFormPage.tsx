import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import UncontrolledForm from '../components/UncontrolledForm';
import Title from '../components/Title';

const UncontrolledFormPage: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ padding: '20px' }}>
      <Title>Uncontrolled Form</Title>
      <UncontrolledForm />
    </div>
  );
};

export default UncontrolledFormPage;
