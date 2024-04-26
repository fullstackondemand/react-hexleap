import { ReactNode, createContext, useContext, useState } from "react";
import Theme from "../types/Theme";

/**
 * @type {context} ThemeContext
 */
export const ThemeContext = createContext<Theme>({
    theme: 'light',
    themeToogle: () => { },
    setTheme: () => { }
});


/**
 * @type {function} ThemeContextProvider
 */
export const ThemeContextProvider = ({ children }: { children?: ReactNode }) => {

    const [theme, setTheme] = useState<string>('light');
    const themeToogle = () => {
        theme == "light" ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeContext.Provider value={{ theme, themeToogle, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


/**
 * @type {hook} useTheme
 */
export default function useTheme() {
    return useContext(ThemeContext);
}
