import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  useEffect(() => {
    return () => {
      localStorage.setItem(key, value);
    };
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
