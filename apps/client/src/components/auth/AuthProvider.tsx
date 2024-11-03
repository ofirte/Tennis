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
  getAdditionalUserInfo,
  deleteUser,
  updateProfile
} from "firebase/auth";
import { useAlert } from "../../common/AlertProvider";
import useCreateUser from "../../api/users/hooks/useCreateUser";
type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
  loginWithEmail: (email: string, password: string) => Promise<boolean>;
  signUpWithEmail: (email: string, password: string, firstName: string, lastName: string) => Promise<boolean>;
  loading: boolean;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { showAlert } = useAlert();
  const { mutateAsync: createUser, isSuccess } = useCreateUser();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (): Promise<boolean> => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const additionalUserInfo = getAdditionalUserInfo(userCredentials);
      if (additionalUserInfo?.isNewUser) {
        const res = await createUser({
          email: userCredentials.user.email ?? "",
          firstName: "",
          lastName: "",
          authType: "google",
          displayName: userCredentials.user.displayName ?? "",
          role: 0,
          uid: userCredentials.user.uid,
          createdAt: new Date(),
        });
        if (!res.status) {
          if (additionalUserInfo?.isNewUser) deleteUser(userCredentials.user);
          showAlert("Error signing in", "error");
          return false;
        }
      }

      return true;
    } catch (error) {
      showAlert("Error signing in", "error");
      return false;
    }
  };
  const loginWithEmail = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      showAlert("Error signing in", "error");
      return false;
    }
  };

  const signUpWithEmail = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<boolean> => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(userCredentials.user, {
        displayName: `${firstName} ${lastName}`,
      });
      const res = await createUser({
        email,
        firstName: firstName,
        lastName: lastName,
        displayName: `${firstName} ${lastName}`,
        role: 0,
        uid: userCredentials.user.uid,
        authType: "local",
        createdAt: new Date(),
      });
      if (!res.status) {
        deleteUser(userCredentials.user);
        showAlert("Error signing up", "error");
        return false;
      }
      return true;
    } catch (error) {
      showAlert("Error signing up", "error");
      return false;
    }
  };

  const logout = async (): Promise<boolean> => {
    try {
      await signOut(auth);
      setUser(null);
      return true;
    } catch (error) {
      showAlert("Error signing out", "error");
      return false;
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
