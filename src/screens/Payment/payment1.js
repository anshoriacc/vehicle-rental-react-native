import {
  View,
  ScrollView,
  Text,
  Pressable,
  ActivityIndicator,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import moment from 'moment';

import {styles} from './styles';
import {makeReservation} from '../../utils/reservation';
import Modal from 'react-native-modal';

const defaultImage = require('../../assets/images/default-vehicle.jpg');

const Payment1 = props => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  console.log(props);

  const reservationHandler = () => {
    makeReservation(props.auth.userData.token, props.reservation)
      .then(res => {
        ToastAndroid.show('Success reservation', ToastAndroid.SHORT);
        props.navigation.navigate('Payment2', props.route.params);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.screenTitle}
        onPress={() => props.navigation.goBack()}>
        <Text style={styles.navigation}>{`<`}</Text>
        <Text style={styles.title}>Payment</Text>
      </Pressable>
      <View style={styles.paymentContainer}>
        <Image source={defaultImage} style={styles.vehicleImageBackground} />
        <Image
          source={
            {
              uri: `${process.env.API_HOST}/${props.route.params.photo}`,
            } || defaultImage
          }
          style={styles.vehicleImage}
        />

        <Text
          style={
            styles.detail
          }>{`${props.reservation.quantity} ${props.route.params.name}`}</Text>
        <Text style={styles.detail}>Transfer</Text>
        <Text style={styles.detail}>{`${moment(
          props.reservation.return_date,
        ).diff(moment(props.reservation.start_date), 'days')} days`}</Text>
        <Text style={styles.detail}>{`${moment(
          props.reservation.start_date,
        ).format('MMM DD')} to ${moment(props.reservation.return_date).format(
          'MMM DD',
        )}`}</Text>
        <Text style={styles.subTotal}>{props.route.params.subTotal}</Text>
        <Pressable
          style={styles.reservation}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.reservationText}>Pay</Text>
        </Pressable>
      </View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <Text>Proceed payment?</Text>
          <View style={styles.modalButtons}>
            <Pressable
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => {
                reservationHandler();
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Pay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    reservation: state.reservation,
  };
};

export default connect(mapStateToProps)(Payment1);
