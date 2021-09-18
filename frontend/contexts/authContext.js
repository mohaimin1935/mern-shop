import { useState, useContext, createContext } from "react"
import { Loading } from "../components/common/Loading"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)

  const signup = async () => {

  }

  const login = async () => {

  }

  const logout = async () => {

  }

  const value = {
    loading,
    setLoading,
    signup,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider