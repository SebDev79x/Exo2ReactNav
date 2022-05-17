import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './home';
import ImageAda from './adawong';
import StoryAda from './adastory';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
        /*   options={{
            tabBarLabel: '',
            showIcon: true,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }} */ />
          <Stack.Screen
          name="ImageAda"
          component={ImageAda}
          />
          <Stack.Screen
          name="StoryAda"
          component={StoryAda}
          />
         {/*  <Stack.Screen
          name="ImageAda"
          component={ImageAda}
          /> */}
        {/*  <Stack.Screen
          name="Paramètres"
          component={ImageAda}

           options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }} 
        />  */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

/* const miscImages = (props) =>{
  const {pics} = props
  return (
    <View style = {styles.container}>
      <Image 
              style={styles.pics}
<Image 
              style={styles.pics}
      source = {require('./assets/ra.png')}/>    </View>
  )
} */
