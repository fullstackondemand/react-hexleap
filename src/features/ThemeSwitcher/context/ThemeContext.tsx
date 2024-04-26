import { ReactNode, createContext, useContext, useState } from "react";
import Theme from "../types/Theme";


export const ThemeContext = createContext<Theme>({
    theme: 'light',
    themeToogle: () => { }
});


export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState<string>('light');
    const themeToogle = () => {
        theme == "light" ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeContext.Provider value={{ theme, themeToogle }}>
            {children}
        </ThemeContext.Provider>
    );
}


export default function useTheme() {
    return useContext(ThemeContext);
} 