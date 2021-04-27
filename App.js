import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import calculo from "./src/calculo";
import result from "./src/result";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="calculo"
          component={calculo}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="result"
          component={result}
          options={{
            title: "",
            headerTitleAlign: "left",
            headerTitleStyle: {
              fontSize: 18,
              marginLeft: -30,
              marginBottom: 2,
            },
            headerStyle: {
              elevation: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
