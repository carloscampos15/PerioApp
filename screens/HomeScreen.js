import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
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
            // headerLeft: () => (
            //   <TouchableOpacity 
            //     activeOpacity={0.5}>
            //     <Image
            //       source={require('./../assets/images/menu.png')}
            //       style= {styles.MenuStyle}
            //     />
            //   </TouchableOpacity>
            // ),
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

const styles = StyleSheet.create({
  MenuStyle: {
    width: 33,
    height: 33,
    margin: 20,
  },
});