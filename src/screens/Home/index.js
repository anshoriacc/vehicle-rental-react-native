import React, {useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Picker as SelectPicker} from '@react-native-picker/picker';
import axios from 'axios';

import {styles} from './styles';

import {getVehicle4} from '../../utils/vehicle';

const defaultImage = require('../../assets/images/default-vehicle.jpg');

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [vehicleData, setVehicleData] = useState({
    popular: [],
    car: [],
    motorbike: [],
    bike: [],
    isSuccess: false,
  });
  const [search, setSearch] = useState(null);

  const searchHandler = () => {
    navigation.navigate('Search', {search});
  };

  useEffect(() => {
    axios
      .all([
        getVehicle4('popular'),
        getVehicle4('car'),
        getVehicle4('motorbike'),
        getVehicle4('bike'),
      ])
      .then(
        axios.spread((res1, res2, res3, res4) => {
          setVehicleData({
            popular: res1.data.result.data,
            car: res2.data.result.data,
            motorbike: res3.data.result.data,
            bike: res4.data.result.data,
            isSuccess: true,
          });
        }),
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/home.jpg')}
        style={styles.image}
      />
      <View style={styles.searchWrapper}>
        <View style={styles.form}>
          <TextInput
            onChangeText={text => setSearch(text)}
            placeholder="Search"
            placeholderTextColor="#999999"
            style={styles.input}
          />
          <View style={styles.pickerWrapper}>
            <SelectPicker
              placeholder="select"
              style={styles.picker}
              selectedValue={selectedCategory}
              onValueChange={value => setSelectedCategory(value)}>
              <SelectPicker.Item label="bike" value="bike" />
              <SelectPicker.Item label="car" value="car" />
              <SelectPicker.Item label="motorbike" value="motorbike" />
            </SelectPicker>
          </View>
        </View>
        {/* <Text>{search}</Text> */}
        <Pressable style={styles.button} onPress={searchHandler}>
          <Text style={styles.buttonText}>Search Vehicle</Text>
        </Pressable>
      </View>
      {vehicleData.isSuccess ? (
        <>
          <View style={styles.vehicleSection}>
            <Pressable style={styles.buttonAdd}>
              <Text style={styles.buttonAddText}>Add Vehicle</Text>
            </Pressable>
            {/* Popular */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('Category', {
                    category: 'popular',
                  })
                }>
                <Text style={styles.sectionLink}>View more {'>'}</Text>
              </Pressable>
            </View>
            <ScrollView horizontal={true} style={styles.horizontal}>
              {vehicleData.popular.map(vehicle => (
                <Pressable
                  key={vehicle.id}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id: vehicle.id,
                    })
                  }>
                  <Image
                    source={defaultImage}
                    style={styles.productImageBackground}
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
                    style={styles.productImage}
                  />
                </Pressable>
              ))}
            </ScrollView>

            {/* Car */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Car</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('Category', {
                    category: 'car',
                  })
                }>
                <Text style={styles.sectionLink}>View more {'>'}</Text>
              </Pressable>
            </View>
            <ScrollView horizontal={true} style={styles.horizontal}>
              {vehicleData.car.map(vehicle => (
                <Pressable
                  key={vehicle.id}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id: vehicle.id,
                    })
                  }>
                  <Image
                    source={defaultImage}
                    style={styles.productImageBackground}
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
                    style={styles.productImage}
                  />
                </Pressable>
              ))}
            </ScrollView>

            {/* Motorbike */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Motorbike</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('Category', {
                    category: 'motorbike',
                  })
                }>
                <Text style={styles.sectionLink}>View more {'>'}</Text>
              </Pressable>
            </View>
            <ScrollView horizontal={true} style={styles.horizontal}>
              {vehicleData.motorbike.map(vehicle => (
                <Pressable
                  key={vehicle.id}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id: vehicle.id,
                    })
                  }
                  style={styles.cardContainer}>
                  <Image
                    source={defaultImage}
                    style={styles.productImageBackground}
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
                    style={styles.productImage}
                  />
                </Pressable>
              ))}
            </ScrollView>

            {/* bike */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Bike</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('Category', {
                    category: 'bike',
                  })
                }>
                <Text style={styles.sectionLink}>View more {'>'}</Text>
              </Pressable>
            </View>
            <ScrollView horizontal={true} style={styles.horizontal}>
              {vehicleData.bike.map(vehicle => (
                <Pressable
                  key={vehicle.id}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id: vehicle.id,
                    })
                  }>
                  <Image
                    source={defaultImage}
                    style={styles.productImageBackground}
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
                    style={styles.productImage}
                  />
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </>
      ) : (
        <ActivityIndicator
          size="large"
          color="#FFCD61"
          style={styles.loading}
        />
      )}
    </ScrollView>
  );
};

export default Home;
