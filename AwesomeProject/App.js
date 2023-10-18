import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
  
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  <View> </View>
  return (
    <View style={styles.container}>
     <Image style={styles.icon} source={require('./assets/favicon.png')} /> 
      <Text style={styles.red}>CleanOro</Text>
      {/* Username */}
      <Text style={styles.inputLabel}>Email or Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType='email-address'
          autoComplete='email'
          placeholder='Type your email username'
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      {/* Password */}
      <Text style={styles.inputLabel}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoComplete='password'
          keyboardType='ascii-capable'
          placeholder='Type your password'
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} />
        </TouchableOpacity>
      </View>
      {/* Login button */}
      <Button
        style={styles.input}
        title='Login'
        color="#D89F00"
        onPress={() => Alert.alert('Logging in')}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
