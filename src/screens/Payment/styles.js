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

  paymentContainer: {
    position: 'relative',
  },

  vehicleImage: {
    height: 300,
    width: 370,
    resizeMode: 'cover',
  },

  vehicleImageBackground: {
    position: 'absolute',
    height: 300,
    width: 370,
    resizeMode: 'cover',
  },

  detail: {
    fontSize: 18,
    margin: 10,
  },

  subTotal: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },

  reservation: {
    backgroundColor: '#ffcd61',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  reservationText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
