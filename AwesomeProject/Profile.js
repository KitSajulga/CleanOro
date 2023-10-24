import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Profile = () => {
  // You can fetch the user's data from a state, context, or props
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://example.com/profile-picture.jpg",
    // Add more user data as needed
  };

  // Function to handle log out
  const handleLogout = () => {
    // Implement the log out logic here, e.g., clearing user data and navigating to the login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      {/* Display user's profile picture here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  // Add styles for profile picture, buttons, and other elements
});

export default Profile;
