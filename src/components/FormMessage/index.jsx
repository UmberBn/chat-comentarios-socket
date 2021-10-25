import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import socketClient from '../../Sockets';
import { Container, Form, InputContainer, Label, SendButton } from './styles';

function FormMessage({setMessages}) {
  const [useMessage, setMessage] = useState({name: '', message: ''})

  useEffect(() => {
    socketClient.on('refreshPosts', (message) => {
      setMessages(message);
    });
  }, [setMessages]);

  const submitForm = (e) => {
    e.preventDefault()
    socketClient.emit('increasePosts', { name: useMessage.name, message: useMessage.message})
    setMessage({name: '', message: ''})
  }

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    const name = e.target.name;

    setMessage({...useMessage, [name]: value})
  }, [useMessage]);

  return (
    <Container>
      <Form onSubmit={submitForm}>
        <InputContainer>
          <Label htmlFor="name-input">
            Nome
          </Label>
          <input
            id="name"
            name="name"
            type="text"
            value={useMessage.name}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="message-input">
            Sua mensagem
          </Label>
          <input
            id="message"
            name="message"
            type="text"
            value={useMessage.message}
            onChange={handleChange}
          />
        </InputContainer>
        <SendButton
          type="submit"
        >
          enviar <FiChevronRight />
        </SendButton>
      </Form>
    </Container>
  );
}

export default FormMessage;