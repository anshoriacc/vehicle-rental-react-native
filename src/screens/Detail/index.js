import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {connect, useDispatch} from 'react-redux';

import {styles} from './styles';

import {getVehicleDetail} from '../../utils/vehicle';
import {numberWithPeriod} from '../../commons/helpers/numberWithPeriod';
import {reservationBody} from '../../redux/actions/reservation';

const defaultImage = require('../../assets/images/default-vehicle.jpg');

const Detail = props => {
  const [vehicleDetail, setVehicleDetail] = useState({
    data: null,
    isSuccess: false,
  });
  const [counter, setCounter] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const dispatch = useDispatch();

  // console.log(props.route.params.id);

  useEffect(() => {
    getVehicleDetail(props.route.params.id)
      .then(res => {
        setVehicleDetail({data: res.data.result.data[0], isSuccess: true});
      })
      .catch(err => console.log(err));
  }, [props.route.params.id]);

  return (
    <View style={styles.container}>
      {!vehicleDetail.data ? (
        <ActivityIndicator
          size="large"
          color="#FFCD61"
          style={styles.loading}
        />
      ) : (
        <View style={styles.detailContainer}>
          <Pressable
            onPress={() => props.navigation.goBack()}
            style={styles.navigation}>
            {/* {console.log('KONSOL', JSON.parse(vehicleDetail.data.photo))} */}
            <Text style={styles.navigation}>{`<`}</Text>
          </Pressable>
          <ScrollView horizontal={true} style={styles.images}>
            {vehicleDetail.data.photo ? (
              JSON.parse(vehicleDetail.data.photo).map((photo, idx) => (
                <View key={idx}>
                  <Image
                    source={defaultImage}
                    style={styles.vehicleImageBackground}
                  />
                  <Image
                    source={
                      {
                        uri: `${process.env.API_HOST}/${photo}`,
                      } || defaultImage
                    }
                    style={styles.vehicleImage}
                  />
                </View>
              ))
            ) : (
              <Image source={defaultImage} style={styles.vehicleImage} />
            )}
          </ScrollView>
          <View style={styles.detail}>
            <Text style={styles.title}>{vehicleDetail.data.name}</Text>
            <Text
              style={[styles.title, styles.margin]}>{`Rp. ${numberWithPeriod(
              vehicleDetail.data.price,
            )}/day`}</Text>
            <Text>No prepayment</Text>
            <Text
              style={[
                styles.availability,
                vehicleDetail.data.stock && vehicleDetail.data.stock > 2
                  ? styles.textGreen
                  : styles.textRed,
              ]}>
              {vehicleDetail.data.stock && vehicleDetail.data.stock > 2
                ? 'Available'
                : `Stock: ${vehicleDetail.data.stock} left`}
            </Text>
            <View style={styles.locationWrapper}>
              <Image
                source={require('../../assets/icons/location.png')}
                style={styles.locationIcon}
              />
              <Text>{vehicleDetail.data.location}</Text>
            </View>
            <View style={styles.quantityWrapper}>
              <Text style={{fontWeight: 'bold'}}>Quantity</Text>
              <View style={styles.quantity}>
                <Pressable
                  style={[styles.counterButton, styles.subButton]}
                  onPress={() => {
                    counter > 1 && setCounter(counter - 1);
                  }}>
                  <Text style={styles.textButton}>-</Text>
                </Pressable>
                <Text style={styles.counter}>{counter}</Text>
                <Pressable
                  style={[styles.counterButton, styles.addButton]}
                  onPress={() => {
                    counter < vehicleDetail.data.stock &&
                      setCounter(counter + 1);
                  }}>
                  <Text style={styles.textButton}>+</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.startDateWrapper}>
              <Text style={styles.date}>Start Date: </Text>
              <Pressable
                style={styles.datePicker}
                onPress={() => setOpen1(true)}>
                <Text>{moment(startDate).format('YYYY-MM-DD')}</Text>
                <Image
                  source={require('../../assets/icons/calendar.png')}
                  style={styles.calendar}
                />
              </Pressable>
            </View>
            <View style={styles.returnDateWrapper}>
              <Text style={styles.date}>Return Date: </Text>
              <Pressable
                style={styles.datePicker}
                onPress={() => setOpen2(true)}>
                <Text>{moment(returnDate).format('YYYY-MM-DD')}</Text>
                <Image
                  source={require('../../assets/icons/calendar.png')}
                  style={styles.calendar}
                />
              </Pressable>
            </View>
            {props.auth.userData.roles !== 1 && (
              <Pressable
                style={styles.reservation}
                onPress={() => {
                  const body = {
                    id: props.route.params.id,
                    quantity: counter,
                    startDate: moment(startDate).format('YYYY-MM-DD'),
                    returnDate: moment(returnDate).format('YYYY-MM-DD'),
                  };

                  !props.auth.isFulfilled && props.navigation.navigate('Login');
                  if (props.auth.isFulfilled) {
                    dispatch(reservationBody(body));
                    props.navigation.navigate('Payment1', {
                      photo:
                        vehicleDetail.data.photo &&
                        JSON.parse(vehicleDetail.data.photo)[0],
                      name: vehicleDetail.data.name,
                      subTotal: `Rp. ${numberWithPeriod(
                        counter * vehicleDetail.data.price,
                      )}`,
                    });
                  }
                }}>
                <Text style={styles.reservationText}>Reservation</Text>
              </Pressable>
            )}
            {props.auth.userData.roles === 1 && (
              <Pressable
                style={styles.reservation}
                onPress={() => {
                  !props.auth.isFulfilled && props.navigation.navigate('Login');
                }}>
                <Text style={styles.reservationText}>Edit Vehicle</Text>
              </Pressable>
            )}
            {/* <Button title="Open" onPress={() => setOpen1(true)} /> */}
            <DatePicker
              modal
              open={open1}
              date={startDate}
              mode="date"
              onConfirm={date => {
                setOpen1(false);
                setStartDate(date);
              }}
              onCancel={() => {
                setOpen1(false);
              }}
            />
            <DatePicker
              modal
              open={open2}
              date={returnDate}
              mode="date"
              onConfirm={date => {
                setOpen2(false);
                setReturnDate(date);
              }}
              onCancel={() => {
                setOpen2(false);
              }}
            />
          </View>
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

export default connect(mapStateToProps)(Detail);
