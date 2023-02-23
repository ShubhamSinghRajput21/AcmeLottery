import React from "react";
import { Home, AddNumbers } from "./src/containers";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="addNumbers" component={AddNumbers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
