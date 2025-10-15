import { type PropsWithChildren } from "react";
import { COLORS } from "../utils/constants";
import { useTheme } from "@/hooks/useTheme";

export type ContainerPaddingProps = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type BackgroundColorProps =
  | BackgroundRegularProps
  | BackgroundGradientProps;

export type BackgroundRegularProps = {
  type: "regular";
  color: string;
};

export type BackgroundGradientProps = {
  type: "gradient";
  direction: "to top" | "to right" | "to bottom" | "to left" | number;
  color: string[];
};

export type Shadow = "sm" | "md" | "lg";
export type ShadowValue = {
  blur: number;
  spread: number;
};

export type ContainerProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    bordered?: boolean;
    borderColor?: string;
    borderWidth?: number;
    backgroundColor?: BackgroundColorProps;
    cornerRadius?: number;
    flexDisplay?: boolean;
    flexDirection?: "row" | "column";
    stretch?: boolean;
    gap?: number;
    padding?: ContainerPaddingProps | number;
    alignItems?: "center" | "start" | "end" | "between" | "around";
    justifyContent?:
      | "center"
      | "start"
      | "end"
      | "space-between"
      | "space-around";
    shadow?: Shadow;
    borderStyle?: React.CSSProperties["borderStyle"];
  };

const Container = ({
  children,
  bordered,
  borderColor,
  borderWidth = 1,
  flexDisplay = false,
  flexDirection = "column",
  backgroundColor = { type: "regular", color: COLORS.transparent },
  cornerRadius = 5,
  stretch = false,
  gap = 0,
  padding = 5,
  alignItems = "start",
  justifyContent = "start",
  shadow,
  style,
  borderStyle = "solid",
  className,
  ...rest
}: ContainerProps) => {
  const { theme, systemTheme } = useTheme();
  const isDark = (systemTheme && systemTheme === "dark") || theme === "dark";

  const themedBorderColor = isDark ? COLORS.davyGrey : COLORS.greyGoose;
  const shadowClass = shadow ? `shadow-${shadow}` : "";

  return (
    <div
      {...rest}
      className={`${shadowClass} ${className}`}
      style={{
        padding:
          typeof padding === "number"
            ? `${padding}px`
            : `${padding.top || 0}px ${padding.right || 0}px ${
                padding.bottom || 0
              }px ${padding.left || 0}px`,
        ...(flexDisplay && {
          display: "flex",
          flexDirection,
          gap: `${gap}px`,
          alignItems,
          justifyContent,
        }),
        ...(bordered && {
          border: `${borderWidth}px ${borderStyle} ${
            borderColor || themedBorderColor
          }`,
        }),
        borderRadius: `${cornerRadius}px`,
        ...(backgroundColor.type === "regular"
          ? {
              backgroundColor: backgroundColor.color,
            }
          : {
              background: `linear-gradient(${
                typeof backgroundColor.direction === "number"
                  ? `${backgroundColor.direction}deg`
                  : backgroundColor.direction
              }, ${backgroundColor.color.join(", ")})`,
            }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
