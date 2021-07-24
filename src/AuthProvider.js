import { createContext, useState } from 'react';

export const AuthContext = createContext(false, () => {});
const AuthProvider = ({ children }) => {
  const [state, setState] = useState(undefined);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
