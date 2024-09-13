import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Events from '../screens/homeScreen/Events';
import Profile from '../screens/homeScreen/Profile';
// import HomeScreen from '../screens/homeScreen/HomeScreen';

const PStack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <View style={{flex: 1}}>
      <PStack.Navigator initialRouteName="Profile">
        <PStack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </PStack.Navigator>
    </View>
  );
};

export default ProfileStack;
