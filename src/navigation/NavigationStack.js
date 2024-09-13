import React, {useMemo, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../hooks/AuthContext';

import {AUTHTOKEN, USERDETAILS} from '../helpers/ApiRoutes';
import LocalStorage from '../utils/LocalStorage';
import AuthStack from './AuthStack';
import TabNavigationStack from './TabNavigationStack';
import HomeStack from './HomeStack';

const NavigationStack = props => {
  const [userData, setUserData] = useState(props?.userDetails || '');

  const userAuthContext = useMemo(() => {
    return {
      userDetails: data => {
        LocalStorage.setValue(USERDETAILS, data);
        setUserData(data);
      },
      signOut: () => {
        LocalStorage.ClearData();
        setUserData('');
      },
    };
  }, []);

  const RootStack = createNativeStackNavigator();

  return (
    <AuthContext.Provider value={userAuthContext}>
      <RootStack.Navigator>
        {userData === '' ? (
          <RootStack.Screen
            name="Login"
            options={{headerShown: false}}
            component={AuthStack}
          />
        ) : (
          <RootStack.Screen
            name="Home"
            options={{headerShown: false}}
            component={TabNavigationStack}
          />
        )}
      </RootStack.Navigator>
    </AuthContext.Provider>
  );
};

export default NavigationStack;
