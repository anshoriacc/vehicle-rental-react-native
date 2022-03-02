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
});
