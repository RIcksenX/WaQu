import { useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSignup = () => {
    let isValid = true;

    // Reset errors
    setUsernameError('');
    setEmailError('');

    // Username validation: required + alphanumeric
    if (!username) {
      setUsernameError('Username is required.');
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      setUsernameError('Username must be alphanumeric.');
      isValid = false;
    }

    // Email validation: required + must end in @gmail.com
    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/^[\w.+\-]+@gmail\.com$/.test(email)) {
      setEmailError('Email must end with @gmail.com.');
      isValid = false;
    }

    if (!password) {
      Alert.alert('Password is required.');
      isValid = false;
    }

    if (isValid) {
      Alert.alert('Login Successful!');
    }
  };

  return (
    <>
      <ImageBackground
        source={require('@/assets/images/SignIn_Wallpaper.png')}
        style={styles.background}
        resizeMode="cover"
      ></ImageBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        {usernameError ? <Text style={styles.error}>{usernameError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title="Login" onPress={handleSignup} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
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
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 5,
  },
});