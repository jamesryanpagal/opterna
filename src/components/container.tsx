import { type PropsWithChildren } from "react";
import { COLORS } from "../utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { useWindowDimension } from "@/hooks/useWindowDimension";

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
    flexDirection?: React.CSSProperties["flexDirection"];
    gap?: number;
    padding?: ContainerPaddingProps | number;
    alignItems?: React.CSSProperties["alignItems"];
    justifyContent?: React.CSSProperties["justifyContent"];
    shadow?: Shadow;
    borderStyle?: React.CSSProperties["borderStyle"];
    sm?: Partial<Omit<ContainerProps, "sm" | "md" | "lg">>;
    md?: Partial<Omit<ContainerProps, "sm" | "md" | "lg">>;
    lg?: Partial<Omit<ContainerProps, "sm" | "md" | "lg">>;
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
  gap = 0,
  padding = 5,
  alignItems = "start",
  justifyContent = "start",
  shadow,
  style,
  borderStyle = "solid",
  className,
  sm: smProps,
  md: mdProps,
  lg: lgProps,
  ...rest
}: ContainerProps) => {
  const { sm: wsm, md: wmd, lg: wlg } = useWindowDimension();
  const { theme, systemTheme } = useTheme();
  const isDark = (systemTheme && systemTheme === "dark") || theme === "dark";

  const themedBorderColor = isDark ? COLORS.steel : COLORS.greyGoose;
  const shadowClass = shadow ? `shadow-${shadow}` : "";

  const sm = wsm ? smProps : {};
  const md = wmd ? mdProps : {};
  const lg = wlg ? lgProps : {};

  const paddingProps = sm?.padding || md?.padding || lg?.padding || padding;
  const flexDisplayProps =
    sm?.flexDisplay || md?.flexDisplay || lg?.flexDisplay || flexDisplay;
  const flexDirectionProps =
    sm?.flexDirection ||
    md?.flexDirection ||
    lg?.flexDirection ||
    flexDirection;
  const gapProps = sm?.gap || md?.gap || lg?.gap || gap;
  const alignItemsProps =
    sm?.alignItems || md?.alignItems || lg?.alignItems || alignItems;
  const justifyContentProps =
    sm?.justifyContent ||
    md?.justifyContent ||
    lg?.justifyContent ||
    justifyContent;
  const borderedProps =
    sm?.bordered || md?.bordered || lg?.bordered || bordered;
  const borderWidthProps =
    sm?.borderWidth || md?.borderWidth || lg?.borderWidth || borderWidth;
  const borderStyleProps =
    sm?.borderStyle || md?.borderStyle || lg?.borderStyle || borderStyle;
  const borderColorProps =
    sm?.borderColor || md?.borderColor || lg?.borderColor || borderColor;
  const cornerRadiusProps =
    sm?.cornerRadius || md?.cornerRadius || lg?.cornerRadius || cornerRadius;
  const backgroundColorProps =
    sm?.backgroundColor ||
    md?.backgroundColor ||
    lg?.backgroundColor ||
    backgroundColor;

  return (
    <div
      {...rest}
      className={`${shadowClass} ${className}`}
      style={{
        padding:
          typeof paddingProps === "number"
            ? `${paddingProps}px`
            : `${paddingProps.top || 0}px ${paddingProps.right || 0}px ${
                paddingProps.bottom || 0
              }px ${paddingProps.left || 0}px`,
        ...(flexDisplayProps && {
          display: "flex",
          flexDirection: flexDirectionProps,
          gap: `${gapProps}px`,
          alignItems: alignItemsProps,
          justifyContent: justifyContentProps,
        }),
        ...(borderedProps && {
          border: `${borderWidthProps}px ${borderStyleProps} ${
            borderColorProps || themedBorderColor
          }`,
        }),
        borderRadius: `${cornerRadiusProps}px`,
        ...(backgroundColorProps.type === "regular"
          ? {
              backgroundColor: backgroundColorProps.color,
            }
          : {
              background: `linear-gradient(${
                typeof backgroundColorProps.direction === "number"
                  ? `${backgroundColorProps.direction}deg`
                  : backgroundColorProps.direction
              }, ${backgroundColorProps.color.join(", ")})`,
            }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
