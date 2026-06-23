"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  "Landing Page",
  "Company Website",
  "Dashboard",
  "Product Interface",
  "Custom System",
  "Other",
];

const budgetOptions = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success(
      "Message sent successfully! We'll be in touch within 24 hours.",
    );
    reset();
  };

  return (
    <div className="pt-28">
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Get in Touch
            </span>
            <h1 className="mt-4 mb-4 text-3xl font-bold md:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your project and we&apos;ll craft a solution that
              exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass-card space-y-6 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-muted-foreground mb-2 block font-mono text-sm text-xs font-medium tracking-wider uppercase">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className="bg-background/50 border-border/50 focus:border-primary/50 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-muted-foreground mb-2 block font-mono text-sm text-xs font-medium tracking-wider uppercase">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      placeholder="you@company.com"
                      className="bg-background/50 border-border/50 focus:border-primary/50 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-muted-foreground mb-2 block font-mono text-sm text-xs font-medium tracking-wider uppercase">
                      Service
                    </label>
                    <select
                      {...register("service")}
                      className="bg-background/50 border-border/50 focus:border-primary/50 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-muted-foreground mb-2 block font-mono text-sm text-xs font-medium tracking-wider uppercase">
                      Budget
                    </label>
                    <select
                      {...register("budget")}
                      className="bg-background/50 border-border/50 focus:border-primary/50 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-muted-foreground mb-2 block font-mono text-sm text-xs font-medium tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="bg-background/50 border-border/50 focus:border-primary/50 w-full resize-none rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="soft-shadow w-full font-mono text-xs tracking-wider uppercase"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Mail className="h-5 w-5" />,
                  label: "Email",
                  value: "hello@rynex.studio",
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  label: "Location",
                  value: "Remote — Global Team",
                },
                {
                  icon: <Clock className="h-5 w-5" />,
                  label: "Response Time",
                  value: "Within 24 hours",
                },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-6">
                  <div className="bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-lg">
                    {item.icon}
                  </div>
                  <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}

              <div className="glass-card rounded-2xl p-6">
                <p className="text-muted-foreground mb-2 font-mono text-xs tracking-wider uppercase">
                  Prefer templates?
                </p>
                <p className="text-muted-foreground mb-4 text-sm">
                  Browse our ready-made templates for a faster start.
                </p>
                <Link href="/templates">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono text-xs tracking-wider uppercase"
                  >
                    View Templates
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
