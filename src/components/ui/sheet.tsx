"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Container from "../container";
import { Separator } from "./separator";
import type { ClassName } from "@/utils/type";

export type SheetProps = React.ComponentProps<typeof SheetPrimitive.Root> & {
  title?: string;
  description?: string | React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  showHeaderSeparator?: boolean;
  width?: string;
  className?: ClassName;
  side?: "top" | "right" | "bottom" | "left";
};

function scrollFieldIntoSheet(field: HTMLElement) {
  if (!field.matches("input, textarea, select")) return;

  const scroller = field.closest("[data-slot='sheet-body']");
  if (!(scroller instanceof HTMLElement)) return;

  const fieldRect = field.getBoundingClientRect();
  const scrollerRect = scroller.getBoundingClientRect();
  const padding = 16;

  if (fieldRect.height > scrollerRect.height - padding * 2) {
    scroller.scrollTop += fieldRect.top - scrollerRect.top - padding;
    return;
  }

  if (fieldRect.bottom > scrollerRect.bottom - padding) {
    scroller.scrollTop += fieldRect.bottom - scrollerRect.bottom + padding;
  } else if (fieldRect.top < scrollerRect.top + padding) {
    scroller.scrollTop -= scrollerRect.top - fieldRect.top + padding;
  }
}

function Sheet({
  title,
  description,
  footer,
  children,
  showCloseButton = true,
  closeOnClickOutside = true,
  closeOnEsc = true,
  showHeaderSeparator = true,
  width,
  className,
  side = "right",
  open,
  ...rest
}: SheetProps) {
  const contentId = React.useId();
  const composed =
    title !== undefined || description !== undefined || footer !== undefined;
  const [keyboardFrame, setKeyboardFrame] = React.useState<{
    bottom: number;
    maxHeight: number;
    height?: number;
  } | null>(null);

  React.useLayoutEffect(() => {
    if (!composed || side !== "bottom") {
      setKeyboardFrame(null);
      return;
    }

    if (!open) return;

    const viewport = window.visualViewport;
    if (!viewport) return;

    const syncToKeyboard = () => {
      const content = document.getElementById(contentId);
      const available = Math.round(viewport.height);
      const keyboard = Math.max(
        0,
        Math.round(window.innerHeight - viewport.height - viewport.offsetTop),
      );

      let height: number | undefined;

      if (keyboard > 0) {
        height = available;
      } else if (content) {
        const previousHeight = content.style.height;
        content.style.height = "auto";

        if (content.scrollHeight > available + 1) {
          height = available;
        }

        content.style.height = previousHeight;
      }

      setKeyboardFrame(previous => {
        if (
          previous &&
          previous.bottom === keyboard &&
          previous.maxHeight === available &&
          previous.height === height
        ) {
          return previous;
        }

        return { bottom: keyboard, maxHeight: available, height };
      });

      const active = document.activeElement;
      if (active instanceof HTMLElement && content?.contains(active)) {
        window.requestAnimationFrame(() => scrollFieldIntoSheet(active));
      }
    };

    const content = document.getElementById(contentId);

    const onFocusIn = (event: FocusEvent) => {
      const field = event.target;
      if (!(field instanceof HTMLElement)) return;

      scrollFieldIntoSheet(field);
      window.setTimeout(() => scrollFieldIntoSheet(field), 300);
    };

    syncToKeyboard();
    viewport.addEventListener("resize", syncToKeyboard);
    viewport.addEventListener("scroll", syncToKeyboard);
    content?.addEventListener("focusin", onFocusIn);

    return () => {
      viewport.removeEventListener("resize", syncToKeyboard);
      viewport.removeEventListener("scroll", syncToKeyboard);
      content?.removeEventListener("focusin", onFocusIn);
    };
  }, [composed, open, side, contentId]);

  if (!composed) {
    return (
      <SheetPrimitive.Root data-slot="sheet" open={open} {...rest}>
        {children}
      </SheetPrimitive.Root>
    );
  }

  return (
    <SheetPrimitive.Root data-slot="sheet" open={open} {...rest}>
      <SheetContent
        side={side}
        showCloseButton={showCloseButton}
        width={width}
        className={cn("gap-0 overflow-hidden p-0", className)}
        id={contentId}
        tabIndex={-1}
        style={
          side === "bottom" && keyboardFrame
            ? {
                bottom: keyboardFrame.bottom,
                maxHeight: keyboardFrame.maxHeight,
                height: keyboardFrame.height,
              }
            : undefined
        }
        onOpenAutoFocus={e => {
          e.preventDefault();

          const el = document.getElementById(contentId) as HTMLElement | null;

          if (el) el.focus();
        }}
        {...(!closeOnClickOutside && {
          onInteractOutside: e => e.preventDefault(),
        })}
        {...(!closeOnEsc && {
          onEscapeKeyDown: e => e.preventDefault(),
        })}
      >
        <SheetHeader className="shrink-0 gap-0 p-0">
          <Container
            padding={
              title
                ? { top: "md", bottom: "sm", left: "md", right: "md" }
                : "none"
            }
            cornerRadius="none"
            className="space-y-1 self-center w-full md:w-[545px]"
          >
            <SheetTitle className="text-start text-lg leading-none">
              {title}
            </SheetTitle>
            <SheetDescription
              className="text-start"
              asChild={typeof description === "object"}
            >
              {description || ""}
            </SheetDescription>
          </Container>
          {showHeaderSeparator && <Separator />}
        </SheetHeader>
        {children && (
          <Container
            padding="md"
            cornerRadius="none"
            data-slot="sheet-body"
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain hide-scrollbar"
          >
            {children}
          </Container>
        )}
        {footer && <SheetFooter>{footer}</SheetFooter>}
      </SheetContent>
    </SheetPrimitive.Root>
  );
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  width,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
  width?: string;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full border-l",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full border-r",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          (side === "left" || side === "right") &&
            (width ?? "w-3/4 sm:max-w-sm"),
          (side === "top" || side === "bottom") && width,
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
