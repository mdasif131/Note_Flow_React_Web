import { useContext, createContext, useState } from 'react';

const MobileMenuContext = createContext();
const MobileMenuContextProvider = ({ children }) => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <MobileMenuContext.Provider
      value={{ mobileMenuOpened, setMobileMenuOpened }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

const useMobileMenuContext = () => {
  return useContext(MobileMenuContext);
};
export { useMobileMenuContext, MobileMenuContextProvider };
