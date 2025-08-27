import { IconButton } from "@mui/material";
import { useTheme } from "../hooks/useTheme";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ThemeToggle() {
    const { toggleTheme, isDark } = useTheme();

    return (
        <IconButton onClick={toggleTheme} color="inherit">
            {isDark ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
}