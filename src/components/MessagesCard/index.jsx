import React, { useMemo } from 'react';
import emojis from '../../utils/iconsHTML';
import {
  Container,
  Icon,
  UserName,
  Description,
  MessageContent,
  MessageDescription
} from './styles';

function MessagesCard({user, message}) {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice];
  }, [])
  return (
    <Container>
      <MessageContent>
      <Icon>
        {emoji}
      </Icon>
      <UserName>
        {`${user}:`}
      </UserName>
      </MessageContent>
      <MessageDescription>
      <Description>
        {message}
      </Description>
      </MessageDescription>
      
    </Container>
  );
}

export default MessagesCard;