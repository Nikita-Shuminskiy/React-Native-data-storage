import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/Bll/Redux_Store";
import NavBar from "./src/Pages/NavBar";
import Todo from "./src/Pages/Todo";
import Users from "./src/Pages/Users";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <NavBar {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Todo"
            component={Todo}
            options={{ title: "Welcome Friends" }}
          />
          <Stack.Screen
            name="Users"
            component={Users}
            options={{ title: "Users" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
