import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { customStyles as styles } from "./Style";
import MyNewPage from "./Homepage";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MyNewPage" component={MyNewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function LoginScreen({ navigation }) {
    return (
      <View style={styles.container} onStartShouldSetResponder={() => true}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={require("./assets/favicon.png")} />
          <Text style={styles.red}>CleanOro</Text>
        </View>
        {/* Username */}
        <Text style={styles.inputLabel}>Email or Username</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoComplete="email"
            placeholder="Type your email username"
          />
        </View>
        {/* Password */}
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <Icon name={isPasswordVisible ? "eye" : "eye-slash"} size={20} />
          </TouchableOpacity>
        </View>
        {/* Login button */}
        <Button
          style={styles.input}
          title="Login"
          color="#D89F00"
          onPress={() => navigation.navigate("MyNewPage")}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
