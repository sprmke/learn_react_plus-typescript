import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
export const Box = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: themeCtx.primary.main,
        color: themeCtx.primary.text,
      }}
    >
      Theme Context
    </div>
  );
};
