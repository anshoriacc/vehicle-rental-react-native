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

  input: {
    borderRadius: 10,
    backgroundColor: '#eeeeee',
    padding: 10,
    marginBottom: 20,
  },

  chatItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    color: 'black',
    fontWeight: 'bold',
  },

  count: {
    backgroundColor: '#ffcd61',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
