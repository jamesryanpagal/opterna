import type { PropsWithChildren } from "react";
import type React from "react";
import type { BackgroundGradientProps } from "./container";
import { COLORS } from "@/utils/constants";
import Container from "./container";

type H1Props = React.ComponentProps<"h1"> & {
  level?: 1;
};
type H2Props = React.ComponentProps<"h2"> & {
  level?: 2;
};
type H3Props = React.ComponentProps<"h3"> & {
  level?: 3;
};
type H4Props = React.ComponentProps<"h4"> & {
  level?: 4;
};
type H5Props = React.ComponentProps<"h5"> & {
  level?: 5;
};

export type TitleProps = H1Props | H2Props | H3Props | H4Props | H5Props;

export type TextGradientProps = PropsWithChildren &
  React.ComponentProps<"p"> &
  Partial<Pick<BackgroundGradientProps, "direction">> & {
    gradient: string[];
  };

export type TitleGradientProps = PropsWithChildren &
  TitleProps &
  Pick<TextGradientProps, "gradient" | "direction">;

const renderTitle: Record<string, (props: any) => React.ReactNode> = {
  "1": ({ className, ...rest }) => (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight text-balance ${className}`}
      {...rest}
    />
  ),
  "2": ({ className, ...rest }) => (
    <h2
      className={`scroll-m-20 text-3xl font-semibold tracking-tight ${className}`}
      {...rest}
    />
  ),
  "3": ({ className, ...rest }) => (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      {...rest}
    />
  ),
  "4": ({ className, ...rest }) => (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
      {...rest}
    />
  ),
  "5": ({ className, ...rest }) => (
    <h5
      className={`scroll-m-20 text-lg font-bold tracking-tight ${className}`}
      {...rest}
    />
  ),
};

export const Title = ({ level = 3, ...props }: TitleProps) => {
  return renderTitle[level](props);
};

export const Text = ({
  className,
  secondary,
  ...rest
}: React.ComponentProps<"p"> & { secondary?: boolean }) => {
  return (
    <p
      className={`${className} ${secondary ? "text-secondary-color" : ""}`}
      {...rest}
    />
  );
};

export const Blockquote = ({
  className,
  ...rest
}: React.ComponentProps<"blockquote">) => {
  return (
    <blockquote className={`border-l-2 pl-6 italic ${className}`} {...rest} />
  );
};

export const TextSmall = ({
  className,
  ...rest
}: React.ComponentProps<"small">) => {
  return (
    <small className={`text-sm leading-4 font-medium ${className}`} {...rest} />
  );
};

export const TextGradient = ({
  gradient,
  direction = "to right",
  children,
  ...rest
}: TextGradientProps) => {
  return (
    <Container
      backgroundColor={{ type: "gradient", color: gradient, direction }}
      padding={0}
      style={{
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        display: "inline-block",
      }}
    >
      <Text
        {...rest}
        style={{
          WebkitTextFillColor: COLORS.transparent,
        }}
        color={COLORS.transparent}
      >
        {children}
      </Text>
    </Container>
  );
};

export const TitleGradient = ({
  gradient,
  direction = "to right",
  children,
  ...rest
}: TitleGradientProps) => {
  return (
    <Container
      backgroundColor={{ type: "gradient", color: gradient, direction }}
      padding={0}
      style={{
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        display: "inline-block",
      }}
    >
      <Title
        {...rest}
        style={{
          WebkitTextFillColor: COLORS.transparent,
        }}
        color={COLORS.transparent}
      >
        {children}
      </Title>
    </Container>
  );
};
