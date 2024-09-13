import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Events from '../screens/homeScreen/Events';
import Favourite from '../screens/homeScreen/Favourite';
// import HomeScreen from '../screens/homeScreen/HomeScreen';

const FStack = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <View style={{flex: 1}}>
      <FStack.Navigator initialRouteName="Favourite">
        <FStack.Screen
          name="Favourite"
          component={Favourite}
          options={{headerShown: false}}
        />
      </FStack.Navigator>
    </View>
  );
};

export default FavoriteStack;
