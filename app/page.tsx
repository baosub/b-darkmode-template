'use client'

import React from 'react'
import { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Chat from './components/Chat';
import MessageInput from './components/MessageInput';




const page = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  
  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages(prev => [...prev, userInput]);
      setUserInput('');
      // Aquí llamarías a la API para procesar el mensaje si fuera necesario.
    }
  };

  
  return (
    <Container component="main" maxWidth="md">
    <CssBaseline />
    <Header />
    <Chat messages={messages} />
    <MessageInput
      value={userInput}
      onChange={e => setUserInput(e.target.value)}
      onSend={handleSendMessage}
    />
  </Container>
  )
}

export default page
