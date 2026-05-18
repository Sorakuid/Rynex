import { format } from "date-fns";
import { Globe } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface Activation {
  id: number;
  domain: string;
  ipAddress: string | null;
  activatedAt: Date | null;
  deviceHash: string | null;
}

export function DomainList({ activations }: { activations: Activation[] }) {
  if (!activations || activations.length === 0) {
    return (
      <div className="text-muted-foreground py-4 text-center text-sm">
        Belum ada aktivasi domain
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {activations.map((activation) => (
        <div
          key={activation.id}
          className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3"
        >
          <div className="flex items-center gap-3">
            <Globe className="text-primary h-4 w-4" />
            <div>
              <p className="text-sm font-medium">{activation.domain}</p>
              <p className="text-muted-foreground font-mono text-xs">
                {activation.ipAddress || "IP tidak tercatat"}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-xs">
              {activation.activatedAt
                ? format(new Date(activation.activatedAt), "dd MMM yyyy HH:mm")
                : "-"}
            </p>
            {activation.deviceHash && (
              <Badge variant="outline" className="mt-1 font-mono text-[10px]">
                {activation.deviceHash.slice(0, 12)}...
              </Badge>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
