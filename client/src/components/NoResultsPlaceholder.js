import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NoResultsPlaceholder = ({
  redirect,
  buttonText,
  message,
  secondMessage,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.defaultContainer}>
      <Text style={styles.deafultText}>{message}</Text>
      <Text style={styles.deafultText}>{secondMessage}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(redirect)}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoResultsPlaceholder;

const styles = StyleSheet.create({
  defaultContainer: {},
  deafultText: {
    fontSize: 15,
    marginVertical: 5,
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
