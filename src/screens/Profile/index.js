import {View, Text, Pressable, Image, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';

import {styles} from './styles';

import {logoutAction} from '../../redux/actions/auth';
import {detailProfile} from '../../utils/user';

const defaultImage = require('../../assets/images/default-profile.jpg');

const Profile = props => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    auth.userData.token &&
      detailProfile(auth.userData.token)
        .then(res => {
          setUserData(res.data.data);
          console.log(res.data.data);
        })
        .catch(err => console.log(err));
  }, [auth.userData.token]);

  const logoutHandler = () => {
    dispatch(logoutAction());
    setUserData(null);
    ToastAndroid.show('Logout success!', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      {!auth.userData.token ? (
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
                !userData
                  ? defaultImage
                  : {
                      uri: `${process.env.API_HOST}/${userData.photo}`,
                    }
              }
              style={styles.photo}
            />
            <View style={styles.detail}>
              <Text style={styles.name}>{userData && userData.name}</Text>
              <Text style={styles.roles}>
                {auth.userData.roles && auth.userData.roles === 1
                  ? 'Owner'
                  : 'Customer'}
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() =>
              props.navigation.navigate('EditProfile', {
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                address: userData.address,
                profilePicture: userData.photo,
              })
            }>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.buttonText}>Logout</Text>
          </Pressable>
        </View>
      )}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <Text>Are you sure want to logout?</Text>
          <View style={styles.modalButtons}>
            <Pressable
              style={[styles.modalButton, styles.logoutButton]}
              onPress={() => {
                logoutHandler();
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
