import { useEffect } from 'react';
import { useThemeStore } from '@/stores/themeStore';

const useTheme = () => {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    // Check the theme in localStorage or match the OS preference
    const storedTheme = localStorage.getItem('theme');
    const isDark =
      storedTheme === 'dark' ||
      (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Apply the theme to the document
    setTheme(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-ag-theme-mode', 'dark-blue');
    document.documentElement.setAttribute('data-ag-theme-mode', isDark ? 'dark-blue' : 'light');
  }, [setTheme]); // Run once when the component mounts
};

export default useTheme;
