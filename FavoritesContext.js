import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites !== null) {
        setFavorites(JSON.parse(favorites));
      }
    };

    fetchFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    };

    saveFavorites();
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a DietProvider");
  }
  return context;
};
