import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ExerciseShow from "../../components/Exercises/ExerciseShow";
import { useNavigation, useRoute } from "@react-navigation/native";
import Spacer from "../Spacer";
import { images } from "../Images";
import { FlashList } from "@shopify/flash-list";

export default function ExerciseList({
  state,
  handleSubmit,
  modalVisible,
  setModalVisible,
  setState,
}) {
  const navigation = useNavigation();

  // Get the current route
  const route = useRoute();

  // Access the name of the current route
  const currentScreen = route.name;

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>All Exercises</Text>

      <FlashList
        showsVerticalScrollIndicator={false}
        data={state}
        estimatedItemSize={800}
        key={(item) => item.id}
        renderItem={({ item, index }) => {
          const exerciseImage = images[item.id] || {};
          return (
            <>
              {currentScreen === "Exercises" ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ExerciseShow", { id: item.id });
                  }}>
                  <ExerciseShow
                    exercise={item}
                    image={exerciseImage}
                    index={index}
                    state={state}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit(
                      item.name,
                      item.category,
                      item.level,
                      setState
                    );
                    setModalVisible(!modalVisible);
                  }}>
                  <ExerciseShow
                    exercise={item}
                    image={exerciseImage}
                    index={index}
                    state={state}
                  />
                </TouchableOpacity>
              )}
            </>
          );
        }}
      />
      <Spacer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "black",
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },

  title: {},
});
