import { STORAGE_KEY } from "@/utils/constants";
import { onGetLocalStorage, onSaveLocalStorage } from "@/utils/helper";
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type Theme = "dark" | "light" | "system";

export type ThemeContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  systemTheme: Theme | null;
};

export type ThemeProviderProps = PropsWithChildren & {
  defaultTheme?: Theme;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeProvider = ({ defaultTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    defaultTheme ||
      (onGetLocalStorage(STORAGE_KEY.THEME) as Theme | undefined) ||
      "system",
  );
  const [systemTheme, setSystemTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const currentSystemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
        ? "dark"
        : "light";

      root.classList.add(currentSystemTheme);
      setSystemTheme(currentSystemTheme);
    } else {
      root.classList.add(theme);
    }

    onSaveLocalStorage(STORAGE_KEY.THEME, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
