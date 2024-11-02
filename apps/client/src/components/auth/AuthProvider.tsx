// AuthContext.js
import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, googleProvider } from "../../FirebaseConfig";
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
  loading: boolean;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      {!loading && (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

// Custom hook for easier access to the AuthContext
export const useAuth = () => useContext(AuthContext);
