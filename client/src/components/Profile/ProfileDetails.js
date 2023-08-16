import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProfileDetails({ image }) {
  return (
    <View>
      <Image source={image} />
      <Text>{name}</Text>
      <Button title='View Profile' />
    </View>
  );
}

const styles = StyleSheet.create({});
