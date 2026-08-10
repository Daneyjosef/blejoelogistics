import { FloatingCard } from "./FloatingCard";

type Props = {
  avatarCount?: number;
  line: string;
};

export function TrustBadge({ avatarCount = 4, line }: Props) {
  return (
    <FloatingCard className="flex w-fit items-center gap-3">
      <div className="flex -space-x-3">
        {Array.from({ length: avatarCount }).map((_, i) => (
          <span
            key={i}
            className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-brand-blue-600 to-brand-navy-900"
          />
        ))}
      </div>
      <p className="text-sm font-semibold text-brand-navy-900 whitespace-nowrap">{line}</p>
    </FloatingCard>
  );
}
