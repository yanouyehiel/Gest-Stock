import React from "react";

export default React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: value => {}
})

export function hasAuthenticated() {
    const user = window.localStorage.getItem('gest-stock');
    const isValid = user ? true : false;

    if (false === isValid) {
        window.localStorage.removeItem('gest-stock');
    }

    return isValid;
}