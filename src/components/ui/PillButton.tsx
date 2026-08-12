import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-blue-600 text-white hover:bg-brand-blue-700 [&_.pill-icon]:bg-white [&_.pill-icon]:text-brand-blue-600",
  secondary:
    "bg-brand-navy-900 text-white hover:bg-brand-navy-950 [&_.pill-icon]:bg-white [&_.pill-icon]:text-brand-navy-900",
  ghost:
    "bg-white text-brand-navy-900 border border-brand-gray-200 hover:bg-brand-sky-100 [&_.pill-icon]:bg-brand-navy-900 [&_.pill-icon]:text-white",
};

function PillContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="pl-6 pr-2">{children}</span>
      <span className="pill-icon mr-1 flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </span>
    </>
  );
}

type LinkProps = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;
type ButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

export function PillButton(props: LinkProps | ButtonProps) {
  const { variant = "primary", children, className = "" } = props;
  const classes = `group inline-flex touch-manipulation items-center rounded-pill py-1 text-sm font-semibold tracking-tight transition-all duration-300 active:scale-95 ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, variant: _v, children: _c, className: _cl, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        <PillContent>{children}</PillContent>
      </Link>
    );
  }

  const { variant: _v2, children: _c2, className: _cl2, ...rest } = props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      <PillContent>{children}</PillContent>
    </button>
  );
}
