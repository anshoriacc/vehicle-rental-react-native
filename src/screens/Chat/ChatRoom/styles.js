import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },

  screenTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  navigation: {
    fontSize: 24,
    marginRight: 10,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  inputWrapper: {
    padding: 10,
  },

  input: {
    height: 70,
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 20,
  },

  vehicle: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: '#999999',
    borderWidth: 1,
    marginBottom: 20,
  },

  vehicleImage: {
    width: 160,
    height: 120,
    borderRadius: 20,
    marginRight: 20,
  },

  right: {
    justifyContent: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  detail: {
    fontSize: 16,
  },

  availability: {
    color: 'green',
  },

  sent: {
    alignSelf: 'flex-end',
    maxWidth: '75%',
    marginBottom: 20,
  },

  ballonSent: {
    backgroundColor: '#393939',
    borderRadius: 15,
    padding: 10,
  },

  messageSent: {
    color: 'white',
  },

  received: {
    alignSelf: 'flex-start',
    maxWidth: '75%',
    marginBottom: 20,
  },

  ballonReceived: {
    backgroundColor: '#ffcd61',
    borderRadius: 15,
    padding: 10,
  },

  messageReceived: {
    color: '#393939',
  },

  statusReceived: {
    alignSelf: 'flex-end',
  },
});
