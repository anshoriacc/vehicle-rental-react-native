import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    marginTop: 100,
    padding: 20,
    justifyContent: 'space-between',
  },

  textWhite: {
    color: 'white',
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
  },

  formContainer: {},

  form: {
    marginBottom: 20,
    backgroundColor: '#ffffffcc',
    borderRadius: 7,
    padding: 10,
    height: 50,
  },

  button: {
    marginTop: 20,
    marginBottom: 50,
    height: 50,
    backgroundColor: '#ffcd61',
    padding: 10,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: '900',
  },

  register: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  linkText: {
    textDecorationLine: 'underline',
  },
});
