import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { customStyles as styles } from './style'; // Import styles with the unique name

  
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  
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