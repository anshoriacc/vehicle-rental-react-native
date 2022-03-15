import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './styles';

import {loginAction} from '../../redux/actions/auth';

const Login = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const loginHandler = () => {
    const body = {
      email,
      password,
    };

    dispatch(loginAction(body));
  };

  useEffect(() => {
    if (auth.isFulfilled) {
      props.navigation.navigate('Main');
      ToastAndroid.showWithGravity(
        'Login success!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }

    if (auth.isRejected) {
      ToastAndroid.showWithGravity(
        'Login failed!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      console.log('login failed');
    }
  }, [auth]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/login.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.content}>
          <Text style={[styles.title, styles.textWhite]}>
            LET'S EXPLORE THE WORLD
          </Text>
          <View style={styles.formContainer}>
            <TextInput
              onChangeText={text => setEmail(text)}
              style={styles.form}
              placeholder="Email"
              // placeholderTextColor="#fff"
            />
            <TextInput
              onChangeText={text => setPassword(text)}
              style={styles.form}
              placeholder="Password"
              secureTextEntry={true}
              // placeholderTextColor="#fff"
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Forgot')}>
              <Text style={[styles.textWhite, styles.linkText]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={loginHandler} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={[styles.register]}>
              <Text style={styles.textWhite}>Don't have account? </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Register')}>
                <Text style={[styles.linkText, styles.textWhite]}>
                  Register Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
