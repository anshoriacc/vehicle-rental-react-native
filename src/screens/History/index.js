import {
  View,
  ScrollView,
  Text,
  Pressable,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {styles} from './styles';

import {numberWithPeriod} from '../../commons/helpers/numberWithPeriod';
import {history, historyAdmin} from '../../utils/reservation';

const defaultImage = require('../../assets/images/default-vehicle.jpg');

const History = props => {
  const [historyData, setHistoryData] = useState({
    data: [],
    isSuccess: false,
  });
  // console.log(props);

  useEffect(() => {
    if (props.auth.userData.roles === 2)
      history(props.auth.userData.token)
        .then(res => {
          setHistoryData({data: res.data.result.data, isSuccess: true});
          // console.log(historyData);
        })
        .catch(err => console.log(err));
    if (props.auth.userData.roles === 1)
      historyAdmin(props.auth.userData.token)
        .then(res => {
          setHistoryData({data: res.data.result.data, isSuccess: true});
          // console.log(historyData);
        })
        .catch(err => console.log(err));
  }, [props.auth]);

  return (
    <View style={styles.container}>
      <View style={styles.screenTitle}>
        <Text style={styles.title}>Transaction History</Text>
      </View>
      <ScrollView style={styles.listContainer}>
        {!historyData.isSuccess ? (
          <ActivityIndicator size="large" color="#FFCD61" />
        ) : historyData.data.length === 0 ? (
          <Text>No history found</Text>
        ) : (
          historyData.data.map(transaction => (
            <View style={styles.card} key={transaction.id}>
              <Image
                source={defaultImage}
                style={styles.vehicleImageBackground}
              />
              <Image
                source={
                  (transaction.photo && {
                    uri: `${process.env.API_HOST}/${
                      JSON.parse(transaction.photo)[0]
                    }`,
                  }) ||
                  defaultImage
                }
                style={styles.vehicleImage}
              />
              <View>
                <Text style={styles.name}>{transaction.vehicle}</Text>
                <Text>{`${moment(transaction.start_date).format(
                  'MMM DD',
                )} to ${moment(transaction.return_date).format(
                  'MMM DD',
                )}`}</Text>
                <Text style={styles.price}>{transaction.payment}</Text>
                <Text style={styles.textGreen}>Has been returned</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(History);
