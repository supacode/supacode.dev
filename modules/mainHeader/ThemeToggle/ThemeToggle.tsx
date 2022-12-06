import { useState } from 'react';
import { useIsomorphicLayoutEffect, useTernaryDarkMode } from 'usehooks-ts';

import { moonIcon, sunIcon } from 'assets/icons';

type ThemeType = 'system' | 'dark' | 'light';

const themes: { [key in ThemeType]: ThemeType } = {
  dark: 'dark',
  system: 'system',
  light: 'light',
};

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
    useTernaryDarkMode();

  const [theme, setTheme] = useState<ThemeType>();

  const altTheme = theme === themes.dark ? themes.light : themes.dark;

  useIsomorphicLayoutEffect(() => {
    if (ternaryDarkMode !== themes.system) {
      setTheme(ternaryDarkMode);
    } else {
      const currTheme = isDarkMode ? themes.dark : themes.light;
      setTheme(currTheme);
      setTernaryDarkMode(currTheme);
    }

    document.body.dataset.theme = theme;
    document
      .querySelector('meta[name=theme-color]')
      ?.setAttribute('content', `${theme}`);
  }, [theme, ternaryDarkMode]);

  const toggleTheme = () => {
    setTheme(altTheme);
    setTernaryDarkMode(altTheme);
  };

  return (
    <button
      aria-label={`Change to ${altTheme} mode`}
      title={`Change to ${altTheme} mode`}
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {theme === themes.dark ? sunIcon : moonIcon}
    </button>
  );
};

export default ThemeToggle;
