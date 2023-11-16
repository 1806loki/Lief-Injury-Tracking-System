/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect,useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const API = "http://localhost:3000/auth/google/callback";
      try {
        const response = await axios.get(API);
        const result = response.data;
        setUserData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Add dependencies if needed

  return (
    <AuthContext.Provider value={{ userData, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
