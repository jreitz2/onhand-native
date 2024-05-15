import React, { createContext, useState, useContext } from "react";

const DietContext = createContext();

export const DietProvider = ({ children }) => {
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isDairyFree, setIsDairyFree] = useState(false);

  return (
    <DietContext.Provider
      value={{
        isVegetarian,
        setIsVegetarian,
        isGlutenFree,
        setIsGlutenFree,
        isDairyFree,
        setIsDairyFree,
      }}
    >
      {children}
    </DietContext.Provider>
  );
};

export const useDiet = () => {
  const context = useContext(DietContext);
  if (context === undefined) {
    throw new Error("useDiet must be used within a DietProvider");
  }
  return context;
};
