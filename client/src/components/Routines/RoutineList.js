import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useRoutineContext from "../../hooks/useRoutineContext";
import RoutineShow from "./RoutineShow";
import { useNavigation } from "@react-navigation/native";
import NoResultsPlaceholder from "../NoResultsPlaceholder";

export default function RoutineList({ limit, allRoutines }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {allRoutines?.length >= 1 ? (
        <>
          {allRoutines.slice(0, limit).map((item) => {
            return (
              <View style={styles.defaultContainer}>
                <RoutineShow routine={item} />
              </View>
            );
          })}
        </>
      ) : (
        <NoResultsPlaceholder
          redirect={"CreateRoutine"}
          buttonText={"Create Routine"}
          message={"You have currently not created any routines."}
          secondMessage={
            "Please press the button below or use the plus icon in the header to create a new routine."
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
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
