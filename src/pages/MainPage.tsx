import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext';

import { RootState } from '../store/store';
import UserDataTile from '../components/UserDataTile';
import Title from '../components/Title';
import './MainPage.css';

const MainPage: React.FC = () => {
  const uncontrolledFormData = useSelector(
    (state: RootState) => state.uncontrolledForm,
  );
  const reactHookFormData = useSelector(
    (state: RootState) => state.reactHookForm,
  );

  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className={'main-page'}>
      <Title>Main Page</Title>
      <nav>
        <ul>
          <li>
            <Link to="/uncontrolled-form">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/react-hook-form">React Hook Form</Link>
          </li>
        </ul>
      </nav>
      <h2>User Data</h2>
      <div className={'user-data-container'}>
        {uncontrolledFormData && (
          <UserDataTile
            data={uncontrolledFormData}
            title="Uncontrolled Form Data"
          />
        )}
        {reactHookFormData && (
          <UserDataTile data={reactHookFormData} title="React Hook Form Data" />
        )}
      </div>
    </main>
  );
};

export default MainPage;
