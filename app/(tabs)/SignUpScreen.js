// SignupScreen.js
import { useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';


export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password) {
      Alert.alert("All fields are required!");
      return;
    }

    // Here you can add API call
    Alert.alert("Signup Successful!");
  };

  return (
    <><ImageBackground
      source={require('@/assets/images/SignIn_Wallpaper.png')} // adjust path as needed
      style={styles.background}
      resizeMode="cover"
    ></ImageBackground>
    <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername} />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none" />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry />

          <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry />

        <Button title="Sign Up" onPress={handleSignup} />
      </View></>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'  
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10, // adds padding inside all sides
    borderRadius: 8,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },

});
