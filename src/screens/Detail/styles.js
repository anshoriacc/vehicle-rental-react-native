import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
  },

  detailContainer: {
    position: 'relative',
  },

  navigation: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 24,
    fontWeight: 'bold',
    zIndex: 1,
  },

  images: {
    zIndex: 0,
    flexDirection: 'row',
  },

  vehicleImage: {
    height: 300,
    width: 400,
    resizeMode: 'cover',
  },

  vehicleImageBackground: {
    position: 'absolute',
    height: 300,
    width: 400,
    resizeMode: 'cover',
  },

  detail: {
    padding: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  margin: {
    marginBottom: 20,
  },

  availability: {
    marginTop: 10,
    fontWeight: 'bold',
  },

  textGreen: {
    color: 'green',
  },

  textRed: {
    color: 'red',
  },

  locationWrapper: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIcon: {
    marginRight: 10,
  },

  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },

  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  counter: {
    marginHorizontal: 30,
    fontWeight: 'bold',
  },

  counterButton: {
    borderRadius: 50,
  },

  addButton: {
    backgroundColor: '#ffcd61',
  },

  subButton: {
    backgroundColor: '#eee',
  },

  textButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
  },

  startDateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 5,
  },

  returnDateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 5,
  },

  date: {
    fontWeight: 'bold',
  },

  datePicker: {
    flexDirection: 'row',
  },

  calendar: {
    marginLeft: 10,
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
