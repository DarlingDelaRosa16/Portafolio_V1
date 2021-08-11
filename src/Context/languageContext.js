import React, { createContext, useReducer, useState } from 'react'

const LanguageContext = createContext();  

const LanguageProvider = ( {children} ) => {

    const [language, setLanguage] = useState("EN")
    localStorage.setItem("language", language)
    return (
        <LanguageContext.Provider value={[setLanguage, language]}>
            {children}
        </LanguageContext.Provider>
    );
}
export {LanguageProvider};
export default LanguageContext;  