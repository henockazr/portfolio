/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const BackgroundContext = createContext();

export const useBackground = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <div style={{ backgroundColor, height: '100%', width: '100%' }}>
        {children}
      </div>
    </BackgroundContext.Provider>
  );
};
