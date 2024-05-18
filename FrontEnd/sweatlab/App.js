import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreensProvider } from "./src/screens/general_screens/screensContext";
import Login from "./src/screens/login/loginScreen";
import Register from "./src/screens/login/registerScreen";
import ProfileScreen from "./src/screens/profile/profileScreen";
import NewRoutine from "./src/screens/routines/newRoutineScreen";
import RoutineDetails from "./src/screens/routines/routineDetailsScreen";
import RoutinesGeneralView from "./src/screens/routines/routinesGeneralViewScreen";
import RoutineUpdate from "./src/screens/routines/routineUpdateScreen";
import ExerciseUpdate from "./src/screens/routines/exerciseUpdateScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#391059" barStyle="light-content" />
      <NavigationContainer>
        <ScreensProvider>
          <Stack.Navigator initialRouteName="Main">
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
      <Stack.Screen
        name="ExerciseUpdate"
        component={ExerciseUpdate}
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
