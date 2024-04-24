import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
   return (
    <ChatEngine
      height="100vh"
      projectID="04cc4368-5a1f-4371-8357-5f534ef16c08"
      userName="rutujapatil"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      
  );
};

export default App;