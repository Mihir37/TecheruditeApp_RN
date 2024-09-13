import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {FontSize, IMAGES} from '../../assets/constants';
import {Fonts} from '../../assets/fonts/Fonts';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AuthContext} from '../../hooks/AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const {userDetails, authToken} = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://3.7.81.243/projects/plie-api/public/api/login',
        {
          email,
          password,
        },
      );

      if (response.data.success) {
        userDetails(response.data);
        // Navigate to HomeScreen if login is successful
        navigation.navigate('HomeScreen');
      } else {
        alert('Login failed, please check your credentials.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#C0C0C0', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: FontSize.extraLargetext,
            fontFamily: Fonts.MEDIUM,
            paddingTop: wp(7),
            paddingBottom: wp(25),
          }}>
          Plie
        </Text>
        <View style={{paddingBottom: wp(15)}}>
          <Icon
            name={'image-outline'}
            size={wp(15)}
            // style={{paddingBottom: wp(10)}}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: wp(4),
          alignItems: 'center',
          paddingVertical: wp(4),
        }}>
        <View>
          <Text
            style={{fontFamily: Fonts.MEDIUM, fontSize: FontSize.mediumText}}>
            Email
          </Text>
          <TextInput
            style={[styles.input]}
            placeholder="email@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text
            style={{fontFamily: Fonts.MEDIUM, fontSize: FontSize.mediumText}}>
            Password
          </Text>
          <View style={[styles.inputContainer, {marginBottom: 0}]}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}>
              <Icon
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                color="grey"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontFamily: Fonts.MEDIUM,
          fontSize: FontSize.mediumText,
          textAlign: 'right',
          paddingHorizontal: wp(10),
          marginBottom: wp(10),
        }}>
        Forgot Password?
      </Text>

      <View style={{alignItems: 'center', paddingHorizontal: wp(4)}}>
        <TouchableOpacity
          style={[styles.loginButton, styles.shadow]}
          onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'flex-end',
            paddingHorizontal: wp(4),
            fontFamily: Fonts.REGULAR,
            fontSize: wp(3.5),
          }}>
          Not a member? Sign up here
        </Text>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or sign in with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.shadow]}>
            <Image
              source={IMAGES.GOOGLE}
              style={{height: wp(7), width: wp(7)}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.shadow]}>
            <Image
              source={IMAGES.FACEBOOK}
              style={{height: wp(7), width: wp(7)}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.shadow]}>
            <Image
              source={IMAGES.APPLE}
              style={{height: wp(7), width: wp(7)}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: wp('80%'),
    height: hp('6%'),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
  },
  inputContainer: {
    width: wp('80%'),
    height: hp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    paddingHorizontal: wp('2%'),
  },
  loginButton: {
    width: wp('40%'),
    height: hp(5),
    backgroundColor: '#21d393',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),
    marginHorizontal: wp(4),
  },
  loginButtonText: {
    color: '#fff',
    fontSize: FontSize.mediumText,
    fontFamily: Fonts.MEDIUM,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: wp('2%'),
    fontSize: wp('4%'),
    color: '#666',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('50%'),
  },
  socialButton: {
    width: wp('12%'),
    height: wp('12%'),
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default LoginScreen;
