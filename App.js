import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import DrawerNavigation from './navigation/DrawerNavigation';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    // <DrawerNavigation/>
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
