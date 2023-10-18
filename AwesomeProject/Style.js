// STYLE.JS
import { StyleSheet } from 'react-native';

export const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'left', // Center the content horizontally
  },
  icon: {
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 15,
    width: 100,
    height: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 12,
    height: 40,
  },
  inputLabel: {
    paddingHorizontal: 15,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  red: {
    paddingHorizontal: 15,
    color: 'red',
  },
});