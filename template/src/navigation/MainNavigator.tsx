import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import About from './Screens/About/About';
import Home from './Screens/Home/Home';
import ScssTest from './Screens/ScssTest/ScssTest';

const BottomTab = createBottomTabNavigator();

export const BottomTabsNavigator = () => (
  <BottomTab.Navigator screenOptions={{ headerShown: false }}>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Scss" component={ScssTest} />
    <BottomTab.Screen name="About" component={About} />
  </BottomTab.Navigator>
);
