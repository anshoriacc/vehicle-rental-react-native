import {View, Text, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, connect} from 'react-redux';

import {styles} from './styles';

import {logoutAction} from '../../redux/actions/auth';
import {detailProfile} from '../../utils/user';

const defaultImage = require('../../assets/images/default-profile.jpg');

const Profile = props => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    detailProfile(props.auth.userData.token)
      .then(res => {
        setUserData(res.data.result.data[0]);
        console.log(res.data.result.data[0]);
      })
      .catch(err => console.log(err));
  }, [props.auth]);

  return (
    <View style={styles.container}>
      {!props.auth.isFulfilled ? (
        <View style={styles.loginContainer}>
          <Pressable
            style={styles.button}
            onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Image source={defaultImage} style={styles.photoBackground} />
            <Image
              source={
                (userData.photo && {
                  uri: `${process.env.API_HOST}/${userData.photo}`,
                }) ||
                defaultImage
              }
              style={styles.photo}
            />
            <View style={styles.detail}>
              <Text style={styles.name}>{userData.name && userData.name}</Text>
              <Text style={styles.roles}>
                {props.auth.userData.roles && props.auth.userData.roles === 1
                  ? 'Owner'
                  : 'Customer'}
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => dispatch(logoutAction())}>
            <Text style={styles.buttonText}>Logout</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Profile);
