"use client"
import { set } from "mongoose";
import React, { createContext, useContext, useState, useEffect } from "react"
const GlobalContext = createContext()

export const Context = ({ children }) => {
    const [theme, setTheme] = useState(null)

    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
        {children}
        </GlobalContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(GlobalContext)
};