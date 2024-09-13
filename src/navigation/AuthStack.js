import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/authScreen/LoginScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';

const AStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <View style={{flex: 1}}>
      <AStack.Navigator initialRouteName="LoginScreen">
        <AStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <AStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        {/* <AStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
         <AStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        /> */}
      </AStack.Navigator>
    </View>
  );
};

export default AuthStack;
