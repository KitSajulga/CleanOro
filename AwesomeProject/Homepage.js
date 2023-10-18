import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyNewPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My New Page</Text>
      <Text style={styles.description}>This is a custom page for your app.</Text>
      <Button
        title='Go Back'
        color="#D89F00"
        onPress={() => navigation.goBack()}
        accessibilityLabel="Go back to the previous screen"
      />
       <Button
        title="Browse Directory"
        color="#D89F00"
        onPress={() => navigation.navigate('Directory')}
        accessibilityLabel="Browse the directory"
      />
       <Button
        title="I am Gay"
        color="#D89F00"
        onPress={() => navigation.navigate('Directory')}
        accessibilityLabel="I am Gay"
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
  },
});

export default MyNewPage;
