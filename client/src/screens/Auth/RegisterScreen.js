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
import validation from "../../components/RegisterValidation";
import HeaderPanel from "../../components/HeaderPanel";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [errors, setErrors] = useState({});
  const { register } = useUserContext();
  const navigation = useNavigation();

  const handleValidation = () => {
    setErrors(validation(firstName, lastName, email, password));
  };

  const handleSubmit = () => {
    if (!handleValidation())
      try {
        register({ firstName, lastName, email, password });
      } catch (e) {
        console.log(e);
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
