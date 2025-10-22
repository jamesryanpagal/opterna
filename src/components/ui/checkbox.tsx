import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Container, { type ContainerProps } from "../container";
import { Label } from "./label";

export type CheckboxProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
> & {
  label?: string;
  containerProps?: Omit<ContainerProps, "children" | "className">;
};

function Checkbox({
  className,
  label,
  id,
  containerProps = {
    flexDisplay: true,
    flexDirection: "row",
    alignItems: "center",
    gap: "sm",
  },
  ...props
}: CheckboxProps) {
  return (
    <Container padding="none" {...containerProps}>
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          "peer border-border dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        id={id}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <CheckIcon className="size-3.5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && <Label htmlFor={id}>{label}</Label>}
    </Container>
  );
}

export { Checkbox };
