// PersonDetails.js
import React from "react";
import { View, Text } from "react-native";

const PersonDetails = ({ route }) => {
  const { personId } = route.params;
  // Fetch and display person details based on the personId

  return (
    <View>
      <Text>Person Details for ID: {personId}</Text>
      {/* Display person details here */}
    </View>
  );
};

// Add more job titles as needed

export default PersonDetails;
