import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatMessage = ({ message }) => {
  return (
    <View style={[styles.messageContainer, message.isUser ? styles.userMessage : styles.botMessage]}>
      <Text>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#d1e7ff',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#f1f1f1',
    alignSelf: 'flex-start',
  },
});

export default ChatMessage;
