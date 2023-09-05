import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderPanel = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default HeaderPanel;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 50,
  },
});
