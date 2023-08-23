import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [selected, setSelected] = useState();

  const values = { selected, setSelected };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export default StateContext;
