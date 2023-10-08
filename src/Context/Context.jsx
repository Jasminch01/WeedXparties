import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const  ContextProvider = createContext()

const Context = ({children}) => {
    const [images, setimages] = useState([]);

    useState(() => {
      fetch("gallery.json")
        .then((res) => res.json())
        .then((data) => setimages(data));
    }, []);

    const data = {
        images,
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