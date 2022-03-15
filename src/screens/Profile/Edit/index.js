import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Pressable,
  ActivityIndicator,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Picker as SelectPicker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';

import {styles} from './styles';
import {useSelector} from 'react-redux';
import {editProfile} from '../../../utils/user';

const editIcon = require('../../../assets/icons/edit.png');
const defaultImage = require('../../../assets/images/default-profile.jpg');

const EditProfile = props => {
  const token = useSelector(state => state.auth.userData.token);
  const [photo, setPhoto] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  //   const [date, setDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  console.log(props);

  const submitHandler = () => {
    const body = new FormData();
    name && body.append('name', name);
    email && body.append('email', email);
    phone && body.append('phone', phone);
    address && body.append('address', address);
    photo.uri &&
      body.append('profilePicture', {
        uri: photo.uri,
        name: photo.fileName,
        type: photo.type,
      });
    console.log(body);
    editProfile(token, body)
      .then(res => {
        props.navigation.navigate('Profile');
        ToastAndroid.show('Edit profile success', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log(err);
        console.log(body);
        ToastAndroid.show('Edit profile fail', ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.screenTitle}
        onPress={() => props.navigation.goBack()}>
        <Text style={styles.navigation}>{`<`}</Text>
        <Text style={styles.title}>Edit Profile</Text>
      </Pressable>
      <ScrollView style={styles.addContainer}>
        <Pressable
          // onPress={async () => {
          //   const res = await launchImageLibrary({mediaType: 'photo'});
          //   console.log(res);
          // }}
          onPress={() => setModalVisible(true)}
          style={styles.addImageContainer}>
          <Image
            source={
              photo.uri
                ? {uri: photo.uri}
                : props.route.params.profilePicture
                ? {uri: props.route.params.profilePicture}
                : defaultImage
            }
            style={styles.addImage}
          />
          <Image source={editIcon} style={styles.addIcon} />
        </Pressable>
        <Text style={styles.label}>Name</Text>
        <TextInput
          defaultValue={props.route.params.name}
          onChangeText={text => setName(text)}
          placeholder="Name"
          style={styles.input}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          defaultValue={props.route.params.email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          style={styles.input}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          defaultValue={props.route.params.phone}
          onChangeText={text => setPhone(text)}
          placeholder="Phone"
          style={styles.input}
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          defaultValue={props.route.params.address}
          onChangeText={text => setAddress(text)}
          placeholder="Address"
          style={styles.input}
        />
        <Pressable style={styles.submitButton} onPress={submitHandler}>
          <Text style={styles.textSubmitButton}>Edit Profile</Text>
        </Pressable>
      </ScrollView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.modalButton]}
            onPress={async () => {
              const res = await launchCamera();
              setPhoto(res.assets[0]);
              console.log(res);
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Open Camera</Text>
          </Pressable>
          <Pressable
            style={[styles.modalButton]}
            onPress={async () => {
              const res = await launchImageLibrary();
              setPhoto(res.assets[0]);
              console.log(res);
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Image Library</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfile;
