import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },

  loginContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  profileContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  detail: {
    marginLeft: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#ffcd61',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  photoBackground: {
    position: 'absolute',
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 50,
  },

  photo: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 50,
  },

  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalButtons: {
    flexDirection: 'row',
  },

  modalButton: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },

  logoutButton: {
    backgroundColor: 'red',
  },

  cancelButton: {
    backgroundColor: '#eeeeee',
  },
});
