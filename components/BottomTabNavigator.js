import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
//import createBottomTabNavigator libray -Challenge 1
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

//Add the createBottomTabNavigator to the variable called tab-Challenge 2
const Tab=createBottomTabNavigator();
export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
      <Tab.Screen name="Transtion" 
      component= {TransactionScreen} />
      <Tab.Screen name="Search" 
      component={SearchScreen} />
         </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
