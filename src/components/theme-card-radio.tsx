import { useTheme } from "@/hooks/useTheme";
import { Label } from "./ui/label";
import {
  RadioGroup,
  RadioGroupItem,
  type RadioGroupProps,
} from "./ui/radio-group";
import { Moon, Settings2, Sun } from "lucide-react";
import type { Theme } from "./context/theme-provider";

export const themeOptions = [
  {
    id: "1",
    label: "Light",
    value: "light",
    icon: <Sun />,
  },
  {
    id: "2",
    label: "Dark",
    value: "dark",
    icon: <Moon />,
  },
  {
    id: "3",
    label: "System",
    value: "system",
    icon: <Settings2 />,
  },
];

const ThemeCardRadio = ({ className, ...rest }: RadioGroupProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <RadioGroup
      {...rest}
      className={`grid-cols-3 ${className}`}
      defaultValue={theme}
      onValueChange={e => setTheme(e as Theme)}
    >
      {themeOptions.map(({ id, label, value, icon }) => {
        return (
          <div
            key={id}
            className="w-[100px] relative flex cursor-pointer flex-col items-center gap-3 rounded-md border border-border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 has-data-[state=checked]:border-primary-foreground has-data-[state=checked]:ring-1 has-data-[state=checked]:ring-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary-foreground/5"
          >
            <RadioGroupItem id={id} value={value} className="sr-only" />
            {icon}
            <Label
              htmlFor={id}
              className="cursor-pointer text-xs leading-none font-medium text-foreground after:absolute after:inset-0"
            >
              {label}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default ThemeCardRadio;
