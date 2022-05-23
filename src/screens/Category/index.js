import {
  View,
  ScrollView,
  Text,
  Pressable,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {styles} from './styles';

import {getVehicle16} from '../../utils/vehicle';
import {numberWithPeriod} from '../../commons/helpers/numberWithPeriod';

const defaultImage = require('../../assets/images/default-vehicle.jpg');

const Category = props => {
  const [vehicleData, setVehicleData] = useState({
    data: [],
    isSuccess: false,
  });
  // console.log(props);

  useEffect(() => {
    getVehicle16(props.route.params.category)
      .then(res => {
        setVehicleData({data: res.data.data, isSuccess: true});
        console.log(vehicleData);
      })
      .catch(err => console.log(err));
  }, [props.route.params.category]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.screenTitle}
        onPress={() => props.navigation.goBack()}>
        <Text style={styles.navigation}>{`<`}</Text>
        <Text style={styles.title}>
          {props.route.params.category.charAt(0).toUpperCase() +
            props.route.params.category.slice(1)}
        </Text>
      </Pressable>
      <ScrollView style={styles.listContainer}>
        {!vehicleData.isSuccess ? (
          <ActivityIndicator size="large" color="#FFCD61" />
        ) : vehicleData.data.length === 0 ? (
          <Text>No vehicle found</Text>
        ) : (
          vehicleData.data.map(vehicle => (
            <Pressable
              style={styles.card}
              key={vehicle.id}
              onPress={() =>
                props.navigation.navigate('Detail', {
                  id: vehicle.id,
                })
              }>
              <Image
                source={defaultImage}
                style={styles.vehicleImageBackground}
              />
              <Image
                source={
                  (vehicle.photo && {
                    uri: `${process.env.API_HOST}/${
                      JSON.parse(vehicle.photo)[0]
                    }`,
                  }) ||
                  defaultImage
                }
                style={styles.vehicleImage}
              />
              <View style={styles.rating}>
                <Image
                  source={require('../../assets/icons/star.png')}
                  style={styles.star}
                />
                <Text>
                  {vehicle.rating ? Number(vehicle.rating).toFixed(1) : '-'}
                </Text>
              </View>
              <View>
                <Text style={styles.name}>{vehicle.vehicle}</Text>
                <Text>{vehicle.location}</Text>
                <Text
                  style={[
                    styles.availability,
                    vehicle.stock && vehicle.stock > 2
                      ? styles.textGreen
                      : styles.textRed,
                  ]}>
                  {vehicle.stock && vehicle.stock > 2
                    ? 'Available'
                    : `Stock: ${vehicle.stock} left`}
                </Text>
                <Text style={styles.price}>{`Rp. ${numberWithPeriod(
                  vehicle.price,
                )}/day`}</Text>
              </View>
            </Pressable>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Category;
