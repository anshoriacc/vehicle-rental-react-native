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
import {addVehicle} from '../../utils/vehicle';

const addImage = require('../../assets/images/add-photo.jpg');
const addIcon = require('../../assets/icons/add.png');

const AddVehicle = props => {
  const token = useSelector(state => state.auth.userData.token);
  const [photo, setPhoto] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(0);
  const [category, setCategory] = useState(0);
  const [stock, setStock] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const submitHandler = () => {
    if (
      !photo.uri ||
      !name ||
      !price ||
      !description ||
      location < 1 ||
      category < 1
    ) {
      return ToastAndroid.show('Fill input form!', ToastAndroid.SHORT);
    }
    const body = new FormData();
    // ToastAndroid.show('good!', ToastAndroid.SHORT);
    body.append('name', name);
    body.append('price', Number(price));
    body.append('description', description);
    body.append('location_id', location);
    body.append('category_id', category);
    body.append('stock', stock);
    body.append('vehiclePicture', {
      uri: photo.uri,
      name: photo.fileName,
      type: photo.type,
    });
    console.log(body);

    addVehicle(token, body)
      .then(res => {
        props.navigation.navigate('Home');
        ToastAndroid.show('Add vehicle success', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log(err);
        ToastAndroid.show('Add vehicle fail', ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.screenTitle}
        onPress={() => props.navigation.goBack()}>
        <Text style={styles.navigation}>{`<`}</Text>
        <Text style={styles.title}>Add Vehicle</Text>
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
            source={photo.uri ? {uri: photo.uri} : addImage}
            style={styles.addImage}
          />
          <Image source={addIcon} style={styles.addIcon} />
        </Pressable>
        <Text style={styles.label}>Name</Text>
        <TextInput
          onChangeText={text => setName(text)}
          placeholder="Name. Max 30 characters."
          style={styles.input}
        />
        <Text style={styles.label}>Price</Text>
        <TextInput
          onChangeText={text => setPrice(text)}
          placeholder="Price"
          style={styles.input}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          onChangeText={text => setDescription(text)}
          placeholder="Description"
          style={styles.input}
        />
        <Text style={styles.label}>Location</Text>
        <View style={styles.pickerWrapper}>
          <SelectPicker
            style={styles.picker}
            selectedValue={location}
            onValueChange={value => setLocation(value)}>
            <SelectPicker.Item
              label="Select Location"
              value={0}
              enabled={false}
            />
            <SelectPicker.Item label="Jakarta" value={1} />
            <SelectPicker.Item label="Bandung" value={2} />
            <SelectPicker.Item label="Yogyakarta" value={3} />
            <SelectPicker.Item label="Malang" value={4} />
            <SelectPicker.Item label="Surabaya" value={5} />
          </SelectPicker>
        </View>
        <Text style={styles.label}>Add to</Text>
        <View style={styles.pickerWrapper}>
          <SelectPicker
            style={styles.picker}
            selectedValue={category}
            onValueChange={value => setCategory(value)}>
            <SelectPicker.Item
              label="Select Category"
              value={0}
              enabled={false}
            />
            <SelectPicker.Item label="Bike" value={1} />
            <SelectPicker.Item label="Car" value={2} />
            <SelectPicker.Item label="Motorbike" value={3} />
          </SelectPicker>
        </View>
        <View style={styles.stock}>
          <Text style={[styles.label, {marginRight: 'auto'}]}>Stock</Text>
          <Pressable
            style={[styles.stockButton, styles.subButton]}
            onPress={() => {
              stock > 1 && setStock(stock - 1);
            }}>
            <Text style={styles.textButton}>-</Text>
          </Pressable>
          <Text style={[styles.label, styles.counter]}>{stock}</Text>
          <Pressable
            style={[styles.stockButton, styles.addButton]}
            onPress={() => {
              setStock(stock + 1);
            }}>
            <Text style={styles.textButton}>+</Text>
          </Pressable>
        </View>
        <Pressable style={styles.submitButton} onPress={submitHandler}>
          <Text style={styles.textSubmitButton}>Add Vehicle</Text>
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

export default AddVehicle;
