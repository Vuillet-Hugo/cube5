import React, { createContext, useContext, useState } from "react";

const UserContext = createContext<any | null>(null);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<any | null>(null);
  const userContextValue = {
    userData,
    setUserData,
  };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};
export { UserContext, UserProvider };
