import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { signup } from "../services/api";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation(); // ✅ Get navigation instance

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSignup = async () => {
    try {
      const result = await signup({ username, email, password });
      console.log("Signup response:", result); // ✅ Debugging log
      setMessage(result.message || "Signup successful!");
      navigation.navigate("Login"); // ✅ Redirect to Login after signup
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("Signup failed. Try again.");
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />

      {/* ✅ Prevent empty text rendering error */}
      {message && <Text>{message}</Text>}
    </View>
  );
};

export default SignupScreen;
