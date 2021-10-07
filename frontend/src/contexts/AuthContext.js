import { createContext, useContext, useEffect, useState } from "react";
import { Loading } from "../components/common/Loading";
import { publicRequest } from "../requests";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    const initial = JSON.parse(localStorage.getItem("currentUser"));
    return initial || null;
  });
  const [isError, setIsError] = useState(false);
  const [notification, setNotification] = useState("close")

  const signup = async (user) => {
    setLoading(true);
    try {
      const res = await publicRequest.post("/auth/register", user);
      setCurrentUser(res.data);
    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  };

  const login = async (user) => {
    setLoading(true);
    try {
      const res = await publicRequest.post("/auth/login", user);
      setCurrentUser(res.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.setItem("currentUser", "null");
    setCurrentUser(null);
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  useEffect(() => {
    let timer = setTimeout(() => setNotification("close"), 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [notification])

  const value = {
    loading,
    setLoading,
    signup,
    login,
    logout,
    currentUser,
    isError,
    notification,
    setNotification,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
