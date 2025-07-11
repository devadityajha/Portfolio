// src/context/LanguageProvider.jsx
import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("language", language);
    }
  }, [language, isLoaded]);

  if (!isLoaded) {
    return null; // Or loading spinner
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};
