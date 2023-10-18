import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DirectoryHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Directory App</Text>
      <Text style={styles.description}>
        Find and connect with people and businesses.
      </Text>
      <Button
        title="Browse Directory"
        color="#D89F00"
        onPress={() => navigation.navigate('Directory')}
        accessibilityLabel="Browse the directory"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 32,
    textAlign: 'center',
  },
});

export default DirectoryHome;
