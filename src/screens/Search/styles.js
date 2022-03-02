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

  listContainer: {
    paddingBottom: 500,
  },

  card: {
    position: 'relative',
    paddingVertical: 5,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  vehicleImageBackground: {
    position: 'absolute',
    height: 90,
    width: 120,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },

  vehicleImage: {
    height: 90,
    width: 120,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 20,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  availability: {
    fontWeight: 'bold',
  },

  textGreen: {
    color: 'green',
  },

  textRed: {
    color: 'red',
  },

  star: {
    marginLeft: 5,
  },

  rating: {
    paddingHorizontal: 5,
    position: 'absolute',
    top: 0,
    right: 250,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#fff1dc',
    borderRadius: 50,
  },

  price: {
    fontWeight: 'bold',
  },
});
