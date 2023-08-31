import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// setting initial state values
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    // setMode will be used to change the theme mode
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);

    setThemeSettings(false);
  };

  const setColor = (color) => {
    // setColor will be used to change the theme color
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);

    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  // passing values to the context

  return (
    <StateContext.Provider
      value={{
        activeMenu: activeMenu,
        setActiveMenu: setActiveMenu,
        isClicked: isClicked,
        setIsClicked: setIsClicked,
        handleClick: handleClick,
        screenSize: screenSize,
        setScreenSize: setScreenSize,
        currentColor: currentColor,
        currentMode: currentMode,
        themeSettings: themeSettings,
        setThemeSettings: setThemeSettings,
        setMode: setMode,
        setColor: setColor,
      }}>
      {children}
    </StateContext.Provider>
  );
};

// exporting context to use in other components
export const useStateContext = () => useContext(StateContext);
