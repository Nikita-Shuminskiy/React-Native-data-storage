import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Todo = () => {
  const [todo, setTodo] = useState<{ name: string; id: number }[]>([]);
  const [textInput, setTextInput] = useState("");
  return (
    <>
      <Text style={styles.header}>TODO</Text>
      <Text style={styles.header}>TODO</Text>
      <Text style={styles.header}>TODO</Text>
      <Text style={styles.header}>TODO</Text>
      <View style={styles.blockAddTodo}>
        <TextInput
          placeholder={"Useless Text"}
          onChangeText={setTextInput}
          value={textInput}
          style={styles.input}
        />
        <Button
          onPress={() => {
            if (!!textInput) {
              setTodo([...todo, { name: textInput, id: new Date().getTime() }]);
              setTextInput("");
            } else {
              alert("Enter message");
            }
          }}
          title={"добавить"}
        />
      </View>
      <View>
        {todo.map((i) => {
          return (
            <View key={i.id} style={styles.blockTodo}>
              <Text>{i.name}</Text>
              <Button
                title={"X"}
                color={"red"}
                onPress={() => setTodo(todo.filter((task) => task.id !== i.id))}
              />
            </View>
          );
        })}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  blockAddTodo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
  },
  btnRemove: {},
  blockTodo: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    width: "100%",
    height: 60,
  },
});
export default Todo;
