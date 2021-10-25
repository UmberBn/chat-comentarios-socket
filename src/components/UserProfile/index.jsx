import React from 'react';

import { Container, UserPic } from './styles';

function UserProfile() {
  return (
    <Container>
      <div>
        <UserPic src="/charizard.png"/>
      </div>
      <div>
        Charizard
      </div>
    </Container>
  );
}

export default UserProfile;