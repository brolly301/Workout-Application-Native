import { StyleSheet, Text, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchBar({ setText, placeholder }) {
  return (
    <View style={styles.container}>
      <EvilIcons style={styles.icon} name="search" size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder={`Search ${placeholder}...`}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    paddingVertical: 10,
    borderRadius: "5%",
    marginVertical: 10,
  },
  input: {
    width: "100%",
  },
  icon: {
    marginHorizontal: 5,
  },
});
