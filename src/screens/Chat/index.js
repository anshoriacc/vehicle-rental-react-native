import {View, Text, Pressable, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './styles';
import {useState} from 'react';

const Chat = props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [search, setSearch] = useState(null);

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
        <>
          <Pressable
            style={styles.screenTitle}
            onPress={() => props.navigation.goBack()}>
            <Text style={styles.navigation}>{`<`}</Text>
            <Text style={styles.title}>Chat</Text>
          </Pressable>
          <ScrollView style={styles.chatContainer}>
            <TextInput
              onChangeText={text => setSearch(text)}
              placeholder="Search Chat"
              style={styles.input}
            />
            <Pressable
              style={styles.chatItem}
              onPress={() => props.navigation.navigate('ChatRoom')}>
              <View>
                <Text style={styles.name}>Vehicle Rental Jogja</Text>
                <Text style={styles.name}>Hey, there are 3 vespa left</Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text>Just now</Text>
                <View style={styles.count}>
                  <Text>1</Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={styles.chatItem}
              onPress={() => props.navigation.navigate('ChatRoom')}>
              <View>
                <Text style={styles.name}>Car Rental</Text>
                <Text style={{color: 'black'}}>
                  Okay, thank you for the good services.
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text>Yesterday</Text>
                <Text></Text>
              </View>
            </Pressable>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Chat;
