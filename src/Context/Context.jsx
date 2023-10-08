import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const  ContextProvider = createContext();
const googleProvider = new GoogleAuthProvider()


const Context = ({children}) => {
    const [images, setimages] = useState([]);

    useState(() => {
      fetch("gallery.json")
        .then((res) => res.json())
        .then((data) => setimages(data));
    }, []);

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const createUserEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const data = {
        images,
        googleSignIn,
        createUserEmailPass,

    }

    return (
        <ContextProvider.Provider value={data}>
            {children}
        </ContextProvider.Provider>
    );
};


Context.propTypes = {
    children : PropTypes.node.isRequired,
}
export default Context;