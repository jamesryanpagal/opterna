import { useNavigate } from "@/hooks/useNavigate";
import Container, { type ContainerProps } from "./container";
import { Button, type ButtonProps } from "./ui/button";
import { useLocation } from "react-router-dom";
import { useWindowDimension } from "@/hooks/useWindowDimension";
import { IoMenu } from "react-icons/io5";
import { useMemo, useState } from "react";
import Drawer from "./drawer";

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
  const { sm } = useWindowDimension();

  const [toggleDrawer, setToggleDrawer] = useState(false);

  const urlHash = location.hash;

  const renderNavItems = useMemo(() => {
    return items.map(({ label, link, buttonProps }, i) => {
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
            onClick={() => {
              nav({ path: link as any });
              setToggleDrawer(false);
            }}
          >
            {label}
          </Button>
        </Container>
      );
    });
  }, [items, urlHash, nav]);

  const renderDrawerMenu = useMemo(() => {
    return (
      <Drawer
        direction="right"
        open={toggleDrawer}
        title="Menu"
        onClose={() => setToggleDrawer(false)}
      >
        <Container flexDisplay gap={10} padding={{ left: 16, right: 16 }}>
          {renderNavItems}
        </Container>
      </Drawer>
    );
  }, [toggleDrawer, renderNavItems]);

  return (
    <>
      <Container
        flexDisplay
        flexDirection="row"
        alignItems="center"
        gap={gap}
        padding={0}
        cornerRadius={0}
        {...rest}
      >
        {sm ? (
          <Button
            size="icon-lg"
            variant="secondary"
            onClick={() => setToggleDrawer(true)}
          >
            <IoMenu />
          </Button>
        ) : (
          renderNavItems
        )}
      </Container>
      {renderDrawerMenu}
    </>
  );
};

export default Navigation;
