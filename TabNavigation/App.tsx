import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashyScreen from './Flashy'
import Notification from "../screens/Notification";
import Reports from "../screens/Reports"
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }} initialRouteName={'App'}>
        <Stack.Screen name="App" component={FlashyScreen} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Reports" component={Reports} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
