"use client";

import { LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth";

interface AuthControlsProps {
  session: any;
}

export const AuthControls = ({ session }: AuthControlsProps) => {
  if (!session)
    return (
      <a href="/auth/sign-in">
        <Button variant="ghost" size="sm">
          <User className="mr-2 h-4 w-4" />
          Masuk
        </Button>
      </a>
    );

  return (
    <div className="flex items-center gap-4">
      <span className="text-muted-foreground text-sm">
        {session.user?.name || session.user?.email}
      </span>
      <Button variant="ghost" size="sm" onClick={() => signOut()}>
        <LogOut className="mr-2 h-4 w-4" />
        Keluar
      </Button>
    </div>
  );
};
