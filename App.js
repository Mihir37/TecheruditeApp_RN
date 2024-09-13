/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LocalStorage from './src/utils/LocalStorage';
import {AUTHTOKEN, USERDETAILS} from './src/helpers/ApiRoutes';
import NavigationStack from './src/navigation/NavigationStack';

function App() {
  const [userDetails, setUserDetails] = useState('');
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    handleData();
  }, []);

  const handleData = () => {
    LocalStorage.getValue(USERDETAILS).then(data => {
      if (data) {
        setUserDetails(data);
      }
    });
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationStack userDetails={userDetails} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
