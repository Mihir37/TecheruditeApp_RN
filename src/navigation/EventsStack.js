import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Events from '../screens/homeScreen/Events';
// import HomeScreen from '../screens/homeScreen/HomeScreen';

const EStack = createNativeStackNavigator();

const EventsStack = () => {
  return (
    <View style={{flex: 1}}>
      <EStack.Navigator initialRouteName="Events">
        <EStack.Screen
          name="Events"
          component={Events}
          options={{headerShown: false}}
        />
      </EStack.Navigator>
    </View>
  );
};

export default EventsStack;
