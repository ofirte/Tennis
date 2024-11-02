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
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useAlert } from "../../common/AlertProvider";
type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
  loginWithEmail: (email: string, password: string) => void;
  signUpWithEmail: (email: string, password: string) => void;
  loading: boolean;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { showAlert } = useAlert();

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
      showAlert("Error signing in", "error");
    }
  };
  const loginWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      showAlert("Error signing in", "error");
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      showAlert("Error signing up", "error");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      showAlert("Error signing out", "error");
    }
  };

  return (
    <>
      {!loading && (
        <AuthContext.Provider
          value={{
            user,
            login,
            logout,
            loading,
            loginWithEmail,
            signUpWithEmail,
          }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

// Custom hook for easier access to the AuthContext
export const useAuth = () => useContext(AuthContext);
