"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-md px-4"
      >
        <div className="glass-card rounded-2xl p-8 text-center">
          <span className="text-foreground mb-2 block font-mono text-lg font-bold tracking-[0.15em]">
            RYNEX
          </span>
          <p className="text-primary mb-8 font-mono text-xs tracking-wider uppercase">
            Sign In
          </p>

          <h1 className="mb-2 text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground mb-8 text-sm">
            Sign in to access your dashboard and manage your projects.
          </p>

          <Button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="w-full font-mono text-xs tracking-wider uppercase"
          >
            <Github className="mr-2 h-5 w-5" />
            Continue with GitHub
          </Button>

          <p className="text-muted-foreground mt-6 text-xs">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
