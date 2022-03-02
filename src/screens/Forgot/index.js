import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {styles} from './styles';

const Forgot = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/register.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.content}>
          <Text style={[styles.title, styles.textWhite]}>
            THAT'S OKAY, WE GOT YOUR BACK
          </Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.form}
              placeholder="Enter your email address"
              placeholderTextColor="#fff"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <View style={[styles.register]}>
              <Text style={styles.textWhite}>Back to </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.linkText, styles.textWhite]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Forgot;
