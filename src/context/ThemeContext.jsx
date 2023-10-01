"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocaleStorage = () => {
    if(typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

//console.log(getFromLocaleStorage())

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(()=> {
        return getFromLocaleStorage();
    });

    const toggle = ()=> {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(()=> {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
}