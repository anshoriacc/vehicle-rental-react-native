import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './styles';

const Chat = props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [search, setSearch] = useState(null);
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.screenTitle}
        onPress={() => props.navigation.goBack()}>
        <Text style={styles.navigation}>{`<`}</Text>
        <Text style={styles.title}>Chat Room</Text>
      </Pressable>
      <ScrollView style={styles.chatContainer}>
        <View style={styles.vehicle}>
          <Image
            source={require('../../../assets/images/vespa.jpg')}
            style={styles.vehicleImage}
          />
          <View style={styles.right}>
            <Text style={styles.name}>Vespa Matic</Text>
            <Text style={[styles.availability, styles.detail]}>Available</Text>
            <Text style={styles.detail}>Rp. 120.000/day</Text>
          </View>
        </View>
        <View style={styles.sent}>
          <View style={styles.ballonSent}>
            <Text style={styles.messageSent}>
              Hey, can I book 2 vespa for January 18 to 21?
            </Text>
          </View>
          <Text style={styles.status}>{`Read [12.04 PM]`}</Text>
        </View>
        <View style={styles.received}>
          <View style={styles.ballonReceived}>
            <Text style={styles.messageReceived}>
              Hey thanks for asking, it’s available now you can do reservation
              and pay for the vespa so they’re ready for you
            </Text>
          </View>
          <Text style={styles.statusReceived}>{`12.10 PM`}</Text>
        </View>
      </ScrollView>
      <View style={styles.inputWrapper}>
        <TextInput
          onChangeText={text => setSearch(text)}
          placeholder="Type a message"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Chat;
