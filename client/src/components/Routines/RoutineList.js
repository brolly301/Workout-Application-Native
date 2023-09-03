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

export default function RoutineList({ limit, allRoutines }) {
  const navigation = useNavigation();

  return (
    <View>
      {allRoutines.length >= 1 ? (
        <>
          <FlatList
            data={allRoutines.slice(0, limit)}
            key={(item) => item._id}
            renderItem={({ item }) => {
              return <RoutineShow routine={item} />;
            }}
          />
        </>
      ) : (
        <View style={styles.defaultContainer}>
          <Text style={styles.deafultText}>
            You have currently not created any routines.
          </Text>
          <Text style={styles.deafultText}>
            Please press the button below or use the plus icon in the header to
            create a new routine.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CreateRoutine")}>
            <Text style={styles.buttonText}>Create Routine</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

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
