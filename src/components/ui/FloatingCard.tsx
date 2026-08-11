type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "static" | "floating";
};

export function FloatingCard({ children, className = "", as = "floating" }: Props) {
  const floatClasses =
    as === "floating"
      ? "shadow-[0_20px_50px_-12px_rgba(15,23,42,0.25)] backdrop-blur-md bg-white/95"
      : "shadow-sm bg-white";

  return (
    <div
      className={`rounded-card border border-white/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${floatClasses} ${className}`}
    >
      {children}
    </div>
  );
}
