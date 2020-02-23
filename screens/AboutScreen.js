import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function About(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SCREEN ABOUT</Text>
    </View>
  );  
}

const Stack = createStackNavigator();

export default function AboutScreen({ navigation }) {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="About" 
          component={About}
          options={{
            title: 'About',
            headerStyle: {
              backgroundColor: '#0069a3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
      </Stack.Navigator>
  );
}