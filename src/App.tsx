import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainPage from './pages/MainPage';
import Header from './components/Header/Header';
import useBoundaryError from './hooks/useBoundaryError';
import UncontrolledFormPage from './pages/UncontrolledFormPage';
import ReactHookFormPage from './pages/ReactHookFormPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const { hasError, throwError } = useBoundaryError();

  if (hasError) {
    throw new Error('Test error');
  }

  return (
    <Router>
      <ThemeProvider>
        <Header throwError={throwError} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/uncontrolled-form" element={<UncontrolledFormPage />} />
          <Route path="/react-hook-form" element={<ReactHookFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
