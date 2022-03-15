import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },

  searchWrapper: {
    backgroundColor: '#393939',
    width: '100%',
    position: 'absolute',
    top: 300,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  form: {
    flexDirection: 'row',
  },

  input: {
    flex: 3,
    backgroundColor: '#4a4a4a',
    color: '#999999',
    padding: 10,
    borderRadius: 10,
    // marginRight: 20,
    textDecorationLine: 'none',
  },

  pickerWrapper: {
    flex: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },

  picker: {
    flex: 1,
    backgroundColor: '#4a4a4a',
    color: '#999999',
  },

  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: '#ffcd61',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: '900',
  },

  bottomSection: {
    marginTop: 110,
  },

  buttonAdd: {
    margin: 20,
    height: 50,
    backgroundColor: '#393939',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonAddText: {
    color: '#ffcd61',
    textAlign: 'center',
    fontWeight: '900',
  },

  sectionHeader: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  vehicleSection: {
    paddingBottom: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  sectionLink: {
    fontWeight: '700',
  },

  horizontal: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },

  productImageBackground: {
    position: 'absolute',
    height: 180,
    width: 240,
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

  productImage: {
    height: 180,
    width: 240,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 20,
  },

  loading: {
    paddingTop: 150,
  },
});
