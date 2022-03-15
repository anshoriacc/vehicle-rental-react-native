import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {styles} from './styles';
import {register} from '../../utils/auth';

const Register = props => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const registerHandler = () => {
    const body = {
      name,
      email,
      password,
      role_id: 2,
    };

    register(body)
      .then(res => {
        ToastAndroid.show('Registration success.', ToastAndroid.CENTER);
        props.navigation.navigate('Login');
      })
      .catch(err => {
        ToastAndroid.show('Registration fail.', ToastAndroid.CENTER);
        console.log(err);
      });
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
        source={require('../../assets/images/register.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.content}>
          <Text style={[styles.title, styles.textWhite]}>
            LET'S HAVE{'\n'}SOME RIDE
          </Text>
          <View style={styles.formContainer}>
            <TextInput
              onChangeText={text => setName(text)}
              style={styles.form}
              placeholder="Name"
            />
            <TextInput
              onChangeText={text => setEmail(text)}
              style={styles.form}
              placeholder="Email"
            />
            <TextInput
              onChangeText={text => setPassword(text)}
              style={styles.form}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={registerHandler}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={[styles.register]}>
              <Text style={styles.textWhite}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={[styles.linkText, styles.textWhite]}>
                  Login Now
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

export default connect(mapStateToProps)(Register);
