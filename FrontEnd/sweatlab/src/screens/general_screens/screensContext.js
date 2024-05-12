import { createContext, useState } from 'react';
const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState({
    id: null,
    name: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    weight: null,
    height: null,
    routines: [],
  });
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ScreensContext.Provider value={{ email, setEmail, userInfo, setUserInfo, loggedIn, setLoggedIn }}>
      {children}
    </ScreensContext.Provider>
  );
};
export default ScreensContext;