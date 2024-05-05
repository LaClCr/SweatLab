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

  return (
    <ScreensContext.Provider value={{ loginInfo, setLoginInfo, registerInfo, setRegisterInfo, userInfo, setUserInfo }}>
      {children}
    </ScreensContext.Provider>
  );
};
export default ScreensContext;