import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import useUserContext from "../../hooks/useUserContext";
import { useNavigation } from "@react-navigation/native";
import HeaderPanel from "../../components/HeaderPanel";
import { Ionicons } from "@expo/vector-icons";
import useExerciseContext from "../../hooks/useExerciseContext";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import useRoutineContext from "../../hooks/useRoutineContext";
import useExerciseSetsContext from "../../hooks/useExerciseSetsContext";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const { state, login, getUserDetails } = useUserContext();
  const { getExercises } = useExerciseContext();
  const { getRoutines } = useRoutineContext();
  const { getWorkouts } = useWorkoutContext();
  const { getExerciseSets } = useExerciseSetsContext();

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={{ opacity: 0.13 }}
      source={{
        uri: "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      }}>
      <HeaderPanel>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <Input field={"Email Address"} setText={setEmail} />
          <Input field={"Password"} setText={setPassword} />
          {state.errorMessage && (
            <Text style={styles.error}>{state.errorMessage}</Text>
          )}
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              login({ email, password });
              getExercises();
              getRoutines();
              getWorkouts();
              getExerciseSets();
              getUserDetails();
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </HeaderPanel>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 15,
  },
  login: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
  },
  forgotPassword: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  error: {
    color: "red",
    fontSize: 14,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});
