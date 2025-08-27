import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from "../styles/theme";

type ThemeContextType = {
    toggleTheme: () => void;
    isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(!isDark);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDark }}>
            <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}