import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const ContextProvider = createContext();
const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
  const [images, setimages] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState('')

  useState(() => {
    setLoading(true)
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => setimages(data));
  }, []);

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const createUserEmailPass = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });
    return () => {
      unSubsCribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const data = {
    images,
    googleSignIn,
    createUserEmailPass,
    signInEmailPass,
    user,
    logOut,
    loading
  };

  return (
    <ContextProvider.Provider value={data}>{children}</ContextProvider.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Context;
