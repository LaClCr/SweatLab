import { createContext, useState } from 'react';
const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {
  const [loginInfo , setLoginInfo] = useState({});
  const [registerInfo, setRegisterInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});

  return (
    <ScreensContext.Provider value={{ loginInfo , setLoginInfo }}>
      {children}
    </ScreensContext.Provider>
  );
};
export default ScreensContext;