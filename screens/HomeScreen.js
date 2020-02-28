import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';

function Home(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SCREEN HOME</Text>
    </View>
  );  
}

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: 'Home',
            headerLeft: () => (
              <TouchableOpacity 
                style= {styles.MenuStyle}
                onPress={() => navigation.toggleDrawer()}
                hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                <Icon
                  name='bars'
                  type='font-awesome'
                  color='#FFFFFF'
                />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#0069a3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}/>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  MenuStyle: {
    margin: 20
  },
});