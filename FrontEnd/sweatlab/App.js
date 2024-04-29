import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreensProvider } from "./src/screens/general_screens/screensContext";

import ConfirmationScreen from "./src/screens/general_screens/confirmationScreen";
import Login from "./src/screens/login/login";
import Register from "./src/screens/login/register";
import Profile from "./src/screens/profile/profile";
import ProfileUpdate from "./src/screens/profile/profileUpdate";
import NewRoutine from "./src/screens/routines/newRoutine";
import RoutineDetails from "./src/screens/routines/routineDetails";
import RoutinesGeneralView from "./src/screens/routines/routinesGeneralView";
import RoutineUpdate from "./src/screens/routines/routineUpdate";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#391059" barStyle="light-content" />
      <NavigationContainer>
        <ScreensProvider>
          <Stack.Navigator initialRouteName="LoginStack">
            <Stack.Screen
              name="LoginStack"
              component={LoginStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MainStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmationScreen"
              component={ConfirmationScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </ScreensProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function LoginStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MainStack() {
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#ffffff"
      barStyle={{ backgroundColor: "#391059" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Entrenamientos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Mi Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RoutinesGeneralView"
        component={RoutinesGeneralView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoutineDetails"
        component={RoutineDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewRoutine"
        component={NewRoutine}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoutineUpdate"
        component={RoutineUpdate}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileUpdate"
        component={ProfileUpdate}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
