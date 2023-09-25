import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import useUserContext from "../../hooks/useUserContext";
import validation from "../../components/RegisterValidation";
import HeaderPanel from "../../components/HeaderPanel";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useExerciseContext from "../../hooks/useExerciseContext";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import useRoutineContext from "../../hooks/useRoutineContext";
import useExerciseSetsContext from "../../hooks/useExerciseSetsContext";
import useTrackContext from "../../hooks/useTrackContext";

export default function RegisterScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [errors, setErrors] = useState({});
  const { register, getUserDetails } = useUserContext();
  const { getExercises } = useExerciseContext();
  const { getRoutines } = useRoutineContext();
  const { getWorkouts } = useWorkoutContext();
  const { getTracks } = useTrackContext();
  const { getExerciseSets } = useExerciseSetsContext();
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleValidation = () => {
    const validationErrors = validation(firstName, lastName, email, password);
    setErrors(validationErrors);

    // Check if there are any errors
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = () => {
    const isValidationSuccessful = handleValidation();

    if (isValidationSuccessful) {
      try {
        setIsLoading(true);
        register({ firstName, lastName, email, password }, () => {
          getUserDetails();
          getExercises();
          getRoutines();
          getWorkouts();
          getExerciseSets();
          getTracks();
          setIsLoading(true);
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

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
          <Text style={styles.title}>Register</Text>
          <Input
            field={"First Name"}
            setText={setFirstName}
            error={errors.firstName}
          />
          <Input
            field={"Last Name"}
            setText={setLastName}
            error={errors.lastName}
          />
          <Input
            field={"Email Address"}
            setText={setEmail}
            error={errors.email}
          />
          <Input
            field={"Password"}
            setText={setPassword}
            error={errors.password}
          />
          {isLoading && <ActivityIndicator size="large" color="#D5A8F8" />}

          <TouchableOpacity
            style={styles.register}
            onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Register</Text>
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
  register: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
