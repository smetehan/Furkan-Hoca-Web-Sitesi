import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";
// import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();
//* with custom hook
// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, open, setOpen }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
