import { useTheme } from '../contexts/ThemeContext';

export const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`footer ${theme}`}>
      <p>© 2023 E-Commerce Store</p>
    </footer>
  );
};

