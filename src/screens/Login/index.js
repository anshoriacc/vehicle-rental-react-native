import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';

import {styles} from './styles';

import {loginAction} from '../../redux/actions/auth';

const Login = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const loginHandler = () => {
    const body = {
      email,
      password,
    };

    dispatch(loginAction(body));
  };

  useEffect(() => {
    if (props.auth.isFulfilled) {
      props.navigation.navigate('Main');
      console.log('login success');
    }

    if (props.auth.isRejected) {
      console.log('login failed');
    }
  }, [props.auth]);

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
              placeholderTextColor="#fff"
            />
            <TextInput
              onChangeText={text => setPassword(text)}
              style={styles.form}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#fff"
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('Forgot')}>
              <Text style={[styles.textWhite, styles.linkText]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={loginHandler} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={[styles.register]}>
              <Text style={styles.textWhite}>Don't have account? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Login);
