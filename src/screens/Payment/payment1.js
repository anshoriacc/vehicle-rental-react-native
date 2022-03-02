import {
  View,
  ScrollView,
  Text,
  Pressable,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import moment from 'moment';

import {styles} from './styles';
import {makeReservation} from '../../utils/reservation';
import {reservationReset} from '../../redux/actions/reservation';

const defaultImage = require('../../assets/images/default-vehicle.jpg');

const Payment1 = props => {
  const dispatch = useDispatch();
  console.log(props);

  const reservationHandler = () => {
    makeReservation(props.auth.userData.token, props.reservation)
      .then(res => {
        console.log('success');
        dispatch(reservationReset());
        props.navigation.navigate('Home');
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
        <Pressable style={styles.reservation} onPress={reservationHandler}>
          <Text style={styles.reservationText}>Pay</Text>
        </Pressable>
      </View>
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
