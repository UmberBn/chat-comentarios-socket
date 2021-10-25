import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MessagesCard from './components/MessagesCard';
import FormMessage from './components/FormMessage';
import Layout from './components/Layout';
import MessageContainer from './components/MessageContainer';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((arrayLanguage) => {
        setIsLoading(false);
        console.log(arrayLanguage.data)
        setMessages(arrayLanguage.data);
      });
  }, []);

  if(isLoading) return <div>Carregando</div>
  return (
    <div>
      <Header />
      <Layout>
        <UserProfile />
        <MessageContainer>
          {
            messages.map(({ name, message }) => {
              return (
                <MessagesCard user={name} message={message}/>
              )
            })
          }
        </MessageContainer>
        <FormMessage setMessages={setMessages} />
      </Layout>
    </div>
  );
}

export default App;
