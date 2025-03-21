import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import ChatMessage from '../components/ChatMessage'; // Your custom component for rendering messages

const ChatScreen = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to send message to the backend
  const sendMessage = async () => {
    if (!userMessage) return;  // Don't send empty messages

    // Add user message to chat
    const newMessage = { text: userMessage, isUser: true };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setUserMessage('');  // Clear input after sending

    try {
      // Make POST request to the backend
      const response = await axios.post('http://localhost:5009/api/chat', {
        message: userMessage,  // Send user input as message to backend
      });

      // Log the response for debugging
      console.log("Bot response:", response.data);

      // Add bot's response to chat
      const botMessage = { text: response.data.message, isUser: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);

    } catch (error) {
      console.error('Error fetching from Hugging Face API:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the chat messages */}
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        keyExtractor={(item, index) => index.toString()}
        inverted
      />

      {/* Input field for typing messages */}
      <TextInput
        style={styles.input}
        value={userMessage}
        onChangeText={setUserMessage}
        placeholder="Type a message"
      />

      {/* Send button */}
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default ChatScreen;











