import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ActiveTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  activeTheme: ActiveTheme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  isSystemTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  activeTheme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
  isDark: false,
  isSystemTheme: true,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [activeTheme, setActiveTheme] = useState<ActiveTheme>('light');
  const isDark = activeTheme === 'dark';
  const isSystemTheme = theme === 'system';

  // Function to get system preference
  const getSystemTheme = useCallback((): ActiveTheme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  // Apply theme to document
  const applyTheme = useCallback((newTheme: ActiveTheme) => {
    setActiveTheme(newTheme);
    
    // Start transition
    document.documentElement.classList.add('theme-transition');
    
    // Remove all theme classes and add the new one
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    
    // End transition after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  }, []);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme);
      
      if (savedTheme === 'system') {
        applyTheme(getSystemTheme());
      } else {
        applyTheme(savedTheme as ActiveTheme);
      }
    } else {
      // Default to system
      setThemeState('system');
      applyTheme(getSystemTheme());
    }
    
    // Add transition style
    const style = document.createElement('style');
    style.innerHTML = `
      .theme-transition {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [applyTheme, getSystemTheme]);

  // Listen for system preference changes
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = () => {
        applyTheme(getSystemTheme());
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, applyTheme, getSystemTheme]);

  // Set theme function that updates state and localStorage
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'system') {
      applyTheme(getSystemTheme());
    } else {
      applyTheme(newTheme as ActiveTheme);
    }
  }, [applyTheme, getSystemTheme]);

  // Toggle between light and dark
  const toggleTheme = useCallback(() => {
    if (theme === 'system') {
      // If currently system, switch to opposite of system preference
      setTheme(getSystemTheme() === 'light' ? 'dark' : 'light');
    } else {
      // Otherwise toggle between light/dark
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  }, [theme, setTheme, getSystemTheme]);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      activeTheme, 
      toggleTheme, 
      setTheme, 
      isDark, 
      isSystemTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;