import RestrictedPage from './components';
import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "Daniel";

  function Login (){
    setIsLoggedIn(true)
  }

  function Logout(){
    setIsLoggedIn(false)
  }

  return (
    <>
    <RestrictedPage user={user} isLoggedIn={isLoggedIn} Login={Login} Logout={Logout}/>
    </>
  );
}

export default App;
