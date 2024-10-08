import { useCallback, useEffect } from "react";
import useTheme from "./context/ThemeContext";

export default function ThemeSwitcher() {

    // use useTheme Hooks
    const { theme, themeToogle, setTheme } = useTheme();
    const windowQuery = window.matchMedia("(prefers-color-scheme:dark)");

    // Theme Automatically Switcher
    const darkModeChange = useCallback((event: MediaQueryListEvent) => {
        event.matches ? setTheme('dark') : setTheme('light');
    }, []);

    useEffect(() => {
        windowQuery.addEventListener("change", darkModeChange);
        return () => {
            windowQuery.removeEventListener("change", darkModeChange);
        };
    }, [windowQuery, darkModeChange]);

    useEffect(() => {
        windowQuery.matches ? setTheme('dark') : setTheme('light');
    }, []);

    // ThemeSwitcher 
    useEffect(() => {
        const html = document.querySelector('html');
        html?.classList.remove('dark', 'light');
        html?.classList.add(theme);
    }, [theme])

    return (
        <div title={`${theme} theme`}>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={theme == 'dark' && true} className="sr-only peer" onChange={themeToogle} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
    )
}
