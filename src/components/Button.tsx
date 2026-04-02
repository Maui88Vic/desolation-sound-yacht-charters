import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  "aria-label"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--color-teal)] text-white hover:bg-[var(--color-ocean)] focus-visible:outline-[var(--color-teal)]",
  secondary: "bg-[var(--color-deep)] text-white hover:bg-[var(--color-ocean)] focus-visible:outline-[var(--color-teal)]",
  gold: "bg-[var(--color-gold)] text-[var(--color-deep)] hover:opacity-90 focus-visible:outline-[var(--color-gold)]",
  ghost: "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white focus-visible:outline-white",
  outline: "bg-transparent text-[var(--color-teal)] border border-[var(--color-teal)] hover:bg-[var(--color-teal)] hover:text-white focus-visible:outline-[var(--color-teal)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  disabled,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
