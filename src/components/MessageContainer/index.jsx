import React from 'react';
import { Container } from './styles';

function MessageContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default MessageContainer;