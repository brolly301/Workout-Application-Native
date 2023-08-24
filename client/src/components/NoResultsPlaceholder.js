import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NoResultsPlaceholder = ({ redirect, buttonText, message }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>{message}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(redirect)}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoResultsPlaceholder;

const styles = StyleSheet.create({});
