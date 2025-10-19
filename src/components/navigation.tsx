import { useNavigate } from "@/hooks/useNavigate";
import Container, { type ContainerProps } from "./container";
import { Button, type ButtonProps } from "./ui/button";
import { useLocation } from "react-router-dom";

export type NavItem = {
  label: string;
  link: string;
  buttonProps?: ButtonProps;
};

export type NavigationProps = ContainerProps & {
  items: NavItem[];
};

const Navigation = ({ items, gap = 20, ...rest }: NavigationProps) => {
  const nav = useNavigate();
  const location = useLocation();

  const urlHash = location.hash;

  return (
    <Container
      flexDisplay
      flexDirection="row"
      alignItems="center"
      gap={gap}
      padding={0}
      cornerRadius={0}
      {...rest}
    >
      {items.map(({ label, link, buttonProps }, i) => {
        const { className: buttonClassName, ...restButtonProps } =
          buttonProps || {};

        const isSelected = urlHash === link;

        return (
          <Container key={i} padding={0} cornerRadius={0}>
            <Button
              variant="clear"
              className={`cursor-pointer rounded-none relative ${
                isSelected ? "nav-selected" : "nav"
              } ${buttonClassName || ""}`}
              style={{
                padding: 0,
              }}
              {...restButtonProps}
              onClick={() => nav({ path: link as any })}
            >
              {label}
            </Button>
          </Container>
        );
      })}
    </Container>
  );
};

export default Navigation;
