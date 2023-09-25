import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'; // Import TextInput
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('Hello worms!');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerRight: () => (
        <AntDesign
          style={styles.navButton}
          name="arrowright"
          size={24}
          onPress={() => navigation.navigate('Second', { message: message })}
        />
      ),
    });
  }, [message]);

  return (
    <View style={styles.container}>
      <Text>Home Screen test</Text>
      <TextInput
        onChangeText={(text) => setMessage(text)}
        value={message}
        placeholder="Type here"
        style={styles.textInput} // Add styles for the TextInput
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  navButton: {
    marginRight: 10,
    padding: 10,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
});
