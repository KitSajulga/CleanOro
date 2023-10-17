import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image source={require('./assets/favicon.png')}></Image>
    <Text style={styles.red}>CleanOro</Text>
    <Text style={styles.bigBlue}>KAY</Text>
    <TextInput 
      placeholder='Type your username'>
      
      </TextInput>
    <Text style={[styles.bigBlue, styles.red]}>TAG</Text>
    <Text style={[styles.red, styles.bigBlue]}>SAYS</Text>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
