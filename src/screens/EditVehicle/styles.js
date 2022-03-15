import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0,
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

  addContainer: {
    padding: 10,
    paddingBottom: 0,
  },

  addImageContainer: {
    position: 'relative',
    marginBottom: 20,
    alignSelf: 'center',
  },

  addImage: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 75,
  },

  addIcon: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: 105,
    left: 105,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#999999',
    marginBottom: 5,
  },

  pickerWrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999999',
    overflow: 'hidden',
    marginVertical: 5,
  },

  stock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },

  counter: {
    marginHorizontal: 30,
    fontWeight: 'bold',
  },

  stockButton: {
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

  submitButton: {
    backgroundColor: '#ffcd61',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  textSubmitButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  modalButton: {
    margin: 5,
    padding: 20,
    width: '45%',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },

  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
