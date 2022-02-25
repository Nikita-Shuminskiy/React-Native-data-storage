import { StyleSheet, Text, View } from "react-native";

const NavBar = ({ navigation }: any) => {
  return (
    <View>
      <Text
        onPress={() => navigation.navigate("Todo")}
        style={styles.container}
      >
        Link to TodoList
      </Text>
      <Text
        onPress={() => navigation.navigate("Users")}
        style={styles.container}
      >
        Link to Users
      </Text>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    color: "white",
    fontSize: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "gray",
    padding: 10,
  },
});
