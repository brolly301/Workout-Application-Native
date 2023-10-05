import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HistoryModalWorkouts = ({
  setCancelModalVisible,
  cancelModalVisible,
  setModalVisible,
  modalVisible,
  routine,
}) => {
  const navigation = useNavigation();

  const date = new Date(routine?.date).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            setCancelModalVisible(!cancelModalVisible);
            setModalVisible(!modalVisible);
          }}
        >
          <EvilIcons
            style={styles.modalIconDelete}
            name='trash'
            size={39}
            color='red'
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditWorkout", { workout: routine });
            setModalVisible(!modalVisible);
          }}
        >
          <EvilIcons
            style={styles.modalIconClose}
            name='pencil'
            size={39}
            color='#D5A8F8'
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <EvilIcons
            style={styles.modalIconClose}
            name='close'
            size={32}
            color='black'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{routine?.name}</Text>
        <Text style={styles.subTitle}>{date || "No description"}</Text>
      </View>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "72%" }}
        >
          {routine?.exercises?.map((exercise, index) => {
            return (
              <View key={exercise._id}>
                <Text style={styles.exerciseName}>
                  Exercises {index + 1} - {exercise?.name}
                </Text>
                <View style={styles.exerciseContainer}>
                  <View style={styles.setsContainer}>
                    <Text style={styles.exerciseText}>Set</Text>
                    {exercise?.sets?.map((set, index) => (
                      <Text key={set._id + set.set} style={styles.setText}>
                        {set.set}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.setsContainer}>
                    <Text style={styles.exerciseText}>Reps</Text>
                    {exercise?.sets?.map((set, index) => (
                      <Text key={set._id + set.reps} style={styles.setText}>
                        {set.reps || 0}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.setsContainer}>
                    <Text style={styles.exerciseText}>KG</Text>
                    {exercise?.sets?.map((set, index) => (
                      <Text key={set._id + set.kg} style={styles.setText}>
                        {set.kg || 0}
                      </Text>
                    ))}
                  </View>
                </View>
                <View />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HistoryModalWorkouts;

const styles = StyleSheet.create({
  exerciseName: {
    textAlign: "center",
    fontSize: 17,
    marginVertical: 10,
    fontWeight: "bold",
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },

  modalIconClose: {
    marginBottom: 10,
  },
  modalIconDelete: {
    marginBottom: 10,
  },
  exerciseContainer: {
    borderColor: "black",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    padding: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 5,
    marginBottom: 20,
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  titleContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingVertical: 10,
    marginBottom: 20,
  },
  exerciseName: {
    textAlign: "center",
    fontWeight: "bold",
  },
  exerciseText: {
    fontWeight: "bold",
  },
  setsContainer: {
    alignItems: "center",
  },
  setText: {
    marginVertical: 4,
  },
});
