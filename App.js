import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Home, AddNumbers } from "./src/containers";
import reducer from "./src/services/Generic/reducer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routeName } from "./src/utils/constants";

const Stack = createNativeStackNavigator();

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={routeName?.HOME}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={routeName?.HOME} component={Home} />
          <Stack.Screen name={routeName?.ADD_NUMBERS} component={AddNumbers} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
