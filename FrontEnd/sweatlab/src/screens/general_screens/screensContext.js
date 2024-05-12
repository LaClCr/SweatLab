import { createContext, useState } from 'react';
const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
  });
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState({
    id: null,
    name: '',
    exercises: [],
  });
  return (
    <ScreensContext.Provider value={{ loginInfo, setLoginInfo, registerInfo, setRegisterInfo, userInfo, setUserInfo, loggedIn, setLoggedIn, selectedRoutine, setSelectedRoutine }}>
      {children}
    </ScreensContext.Provider>
  );
};
export default ScreensContext;