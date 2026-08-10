import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  variant?: "light" | "dark";
  size?: "sm" | "md";
};

export function IconButton({ icon: Icon, label, variant = "light", size = "md" }: Props) {
  const variantClasses =
    variant === "dark"
      ? "bg-brand-navy-900 text-white"
      : "bg-white text-brand-navy-900 border border-brand-gray-200";
  const sizeClasses = size === "sm" ? "h-8 w-8" : "h-11 w-11";
  const iconSize = size === "sm" ? 14 : 18;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`flex shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-200 hover:scale-105 ${sizeClasses} ${variantClasses}`}
    >
      <Icon size={iconSize} strokeWidth={2} />
    </button>
  );
}
