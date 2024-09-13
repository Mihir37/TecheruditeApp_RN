import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import {AuthContext} from '../hooks/AuthContext'; // Import AuthContext
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import {AuthContext} from '../../hooks/AuthContext';

const Profile = () => {
  const {signOut} = useContext(AuthContext); // Get signOut function from context
  const navigation = useNavigation(); // Access navigation object

  const handleSignOut = () => {
    signOut(); // Call signOut function from context
    navigation.navigate('LoginScreen'); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title="Sign Out" onPress={handleSignOut} color={'#21d393'} />
      {/* Sign out button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Profile;
