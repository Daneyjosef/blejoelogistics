import { FloatingCard } from "./FloatingCard";
import type { LucideIcon } from "lucide-react";

type Props = {
  value: string;
  label: string;
  icon?: LucideIcon;
  placeholder?: boolean;
};

export function StatCard({ value, label, icon: Icon, placeholder = false }: Props) {
  return (
    <FloatingCard className="w-56">
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-sky-100 text-brand-blue-600">
            <Icon size={18} />
          </span>
        )}
        <div>
          <p
            className={`text-2xl font-bold tracking-tight ${
              placeholder ? "text-brand-navy-700/40" : "text-brand-navy-900"
            }`}
          >
            {value}
          </p>
          <p className="text-sm text-brand-navy-700/80">{label}</p>
          {placeholder && (
            <p className="mt-1 text-[11px] font-medium text-amber-600">
              Placeholder — needs real figure
            </p>
          )}
        </div>
      </div>
    </FloatingCard>
  );
}
