import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  active: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  inactive: "bg-zinc-500/15 text-zinc-400 border-zinc-500/25",
  suspended: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  revoked: "bg-red-500/15 text-red-400 border-red-500/25",
  expired: "bg-rose-500/15 text-rose-400 border-rose-500/25",
};

export function LicenseStatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-wider uppercase",
        statusStyles[status] || statusStyles.inactive,
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "active" && "bg-emerald-400",
          status === "inactive" && "bg-zinc-400",
          status === "suspended" && "bg-amber-400",
          status === "revoked" && "bg-red-400",
          status === "expired" && "bg-rose-400",
        )}
      />
      {status}
    </span>
  );
}
