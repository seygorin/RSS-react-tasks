import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import ReactHookForm from '../components/ReactHookForm';
import Title from '../components/Title';

const ReactHookFormPage: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ padding: '20px' }}>
      <Title>React Hook Form</Title>
      <ReactHookForm />
    </div>
  );
};

export default ReactHookFormPage;
