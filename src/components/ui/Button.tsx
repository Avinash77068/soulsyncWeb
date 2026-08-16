import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";

type ButtonVariant =
  | "soul"
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  soul:
    "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-lg shadow-purple-500/25 hover:brightness-110 hover:shadow-purple-500/40",
  primary: "bg-purple-500 text-white hover:bg-purple-600",
  secondary:
    "border border-white/10 bg-white/10 text-white hover:bg-white/15",
  outline:
    "border border-white/20 bg-transparent text-white hover:bg-white/10",
  ghost: "bg-transparent text-white hover:bg-white/10",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 rounded-lg px-4 text-sm",
  md: "h-11 rounded-xl px-5 text-sm",
  lg: "h-12 rounded-xl px-6 text-base",
  xl: "h-14 rounded-2xl px-8 text-base",
};

export default function Button({
  asChild = false,
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...(!asChild ? { type } : {})}
      {...props}
      disabled={!asChild ? disabled || loading : undefined}
      aria-disabled={disabled || loading}
      className={[
        "inline-flex items-center justify-center gap-2 whitespace-nowrap",
        "font-medium transition-all duration-200 active:scale-[0.98]",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </Comp>
  );
}
