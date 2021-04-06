import Sc1 from "../screens/Sc1";
import Sc2 from "../screens/Sc2";
import Sc3 from "../screens/Sc3";
import Sc4 from "../screens/Sc4";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-ionicons";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const MainNavigator = createBottomTabNavigator(
 {
  SCREEN01: {
   screen: Sc1,
   showLabel: false,
   navigationOptions: {
    headerShown: false,
    tabBarIcon: ({ focused }) => (
     <Ionicons size={40} name={focused ? `battery-dead` : `battery-full`} />
    ),
   },
  },
  SCREEN02: {
   screen: Sc2,
   navigationOptions: { headerShown: false },
  },
  SCREEN03: {
   screen: Sc3,
   navigationOptions: { headerShown: false },
  },
  SCREEN04: {
   screen: Sc4,
   navigationOptions: { headerShown: false },
  },
 },
 {
  headerMode: "screen",
  mode: "modal",
  tabBarOptions: {
   showLabel: false,
  },
 }
);

export default createAppContainer(MainNavigator);
