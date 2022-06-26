import { useEffect, useState } from 'react';
import unologin from 'unologin-scripts';

unologin.setup({ appId: process.env.REACT_APP_UNOLOGIN_APPID });

export default function App() 
{
  const [isLoggedIn, setIsLoggedIn] = useState(unologin.isLoggedIn());

  // only register the callback once
  useEffect(() => 
  {
    unologin.onLogin(() => setIsLoggedIn(true));
  }, [])

  if (!isLoggedIn)
  {
    // examples for different ways of calling startLogin(...)
    return <>
      <button onClick={() => unologin.startLogin({ mode: 'login', userClass: 'users_default'  })}>
        Login
      </button>

      <button onClick={() => unologin.startLogin({ mode: 'register', userClass: 'users_default'  })}>
        Register
      </button>

      <button onClick={() => unologin.startLogin({ userClass: 'users_default'  })}>
        Login or Register
      </button>
    </>;
  }
  else 
  {
    return 'You are now logged in!';
  }
}