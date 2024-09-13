import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';

const HStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <View style={{flex: 1}}>
      <HStack.Navigator initialRouteName="HomeScreen">
        <HStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </HStack.Navigator>
    </View>
  );
};

export default HomeStack;
