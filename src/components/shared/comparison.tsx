"use client";

import { motion } from "framer-motion";
import { Check, ChevronDown, Minus, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import type { ComparisonData } from "@/types/comparison";

interface ComparisonTableProps {
  data: ComparisonData;
}

function isCheckValue(value: string): boolean {
  return (
    value === "✓" ||
    value.toLowerCase() === "yes" ||
    value.toLowerCase() === "true"
  );
}

function isCrossValue(value: string): boolean {
  return (
    value === "✗" ||
    value.toLowerCase() === "no" ||
    value.toLowerCase() === "false"
  );
}

export function ComparisonTable({ data }: ComparisonTableProps) {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const triggers = useMemo(
    () => new Set(data.upgradeTriggers ?? []),
    [data.upgradeTriggers],
  );

  return (
    <section className="spacious-section relative overflow-hidden">
      <div className="from-primary/[0.03] absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass text-primary mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs tracking-wider uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{data.title}</span>
          </motion.div>

          {data.subtitle && (
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed md:text-base">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <div className="hidden md:block">
          <DesktopView data={data} triggers={triggers} />
        </div>

        <div className="md:hidden">
          <MobileView
            data={data}
            triggers={triggers}
            openCard={openCard}
            onToggle={setOpenCard}
          />
        </div>
      </div>
    </section>
  );
}

function DesktopView({
  data,
  triggers,
}: {
  data: ComparisonData;
  triggers: Set<string>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="border-border/40 overflow-hidden rounded-2xl border"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-background/95 sticky left-0 z-10 min-w-[180px] p-4 text-left backdrop-blur-xl md:min-w-[220px] md:p-5">
                <span className="text-muted-foreground/60 font-mono text-[10px] tracking-[0.2em] uppercase">
                  Feature
                </span>
              </th>
              {data.plans.map((plan) => {
                const isRecommended = plan === data.recommended;
                return (
                  <th
                    key={plan}
                    className={`relative min-w-[140px] p-4 text-center align-top md:min-w-[180px] md:p-5 ${
                      isRecommended ? "bg-primary/[0.04]" : "bg-background/50"
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute -top-px left-1/2 z-10 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground inline-flex items-center gap-1 rounded-b-lg px-3 py-1 font-mono text-[9px] font-semibold tracking-wider uppercase">
                          <Sparkles className="h-2.5 w-2.5" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    <span
                      className={`block font-semibold tracking-tight ${
                        isRecommended
                          ? "text-primary text-lg"
                          : "text-foreground text-base"
                      }`}
                    >
                      {plan}
                    </span>
                    {data.licenseTypes?.[plan] && (
                      <span className="text-muted-foreground/50 mt-0.5 block font-mono text-[10px] tracking-wider uppercase">
                        {data.licenseTypes[plan]}
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.features.map((feature, fi) => {
              const isLast = fi === data.features.length - 1;
              const isTrigger = triggers.has(feature.name);
              return (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: fi * 0.04 }}
                  className={`group transition-colors hover:bg-white/[0.02] ${
                    !isLast ? "border-border/30 border-b" : ""
                  } ${isTrigger ? "bg-primary/[0.015]" : ""}`}
                >
                  <td
                    className={`bg-background/95 sticky left-0 z-10 p-4 backdrop-blur-xl group-hover:bg-white/[0.02] md:p-5 ${
                      isTrigger ? "border-l-primary/30 border-l-2" : ""
                    }`}
                  >
                    <span className="font-mono text-xs font-medium tracking-wider uppercase md:text-sm">
                      {feature.name}
                    </span>
                    {isTrigger && (
                      <span className="bg-primary/10 text-primary ml-2 inline-flex items-center rounded-full px-1.5 py-0.5 font-mono text-[8px] tracking-wider uppercase">
                        upgrade
                      </span>
                    )}
                  </td>
                  {feature.values.map((value, vi) => {
                    const isRecommended = data.plans[vi] === data.recommended;
                    if (isCheckValue(value)) {
                      return (
                        <td
                          key={`${feature.name}-${vi}`}
                          className={`p-4 text-center md:p-5 ${
                            isRecommended ? "bg-primary/[0.02]" : ""
                          }`}
                        >
                          <Check className="text-primary mx-auto h-5 w-5" />
                        </td>
                      );
                    }
                    if (isCrossValue(value)) {
                      return (
                        <td
                          key={`${feature.name}-${vi}`}
                          className={`p-4 text-center md:p-5 ${
                            isRecommended ? "bg-primary/[0.02]" : ""
                          }`}
                        >
                          <Minus className="text-muted-foreground/30 mx-auto h-5 w-5" />
                        </td>
                      );
                    }
                    return (
                      <td
                        key={`${feature.name}-${vi}`}
                        className={`p-4 text-center md:p-5 ${
                          isRecommended ? "bg-primary/[0.02]" : ""
                        }`}
                      >
                        <span className="text-muted-foreground font-mono text-xs md:text-sm">
                          {value}
                        </span>
                      </td>
                    );
                  })}
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function MobileView({
  data,
  triggers,
  openCard,
  onToggle,
}: {
  data: ComparisonData;
  triggers: Set<string>;
  openCard: number | null;
  onToggle: (i: number | null) => void;
}) {
  const orderedPlans = useMemo(() => {
    const plans = [...data.plans];
    const recommendedIdx = data.recommended
      ? plans.indexOf(data.recommended)
      : -1;
    if (recommendedIdx > 0) {
      const [item] = plans.splice(recommendedIdx, 1);
      plans.unshift(item);
    }
    return plans;
  }, [data.plans, data.recommended]);

  const planValues = useMemo(() => {
    const map: Record<string, number> = {};
    data.plans.forEach((p, i) => {
      map[p] = i;
    });
    return map;
  }, [data.plans]);

  return (
    <div className="space-y-3">
      {orderedPlans.map((plan, pi) => {
        const originalIdx = planValues[plan];
        const isOpen = openCard === originalIdx;
        const isRecommended = plan === data.recommended;

        return (
          <motion.div
            key={plan}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: pi * 0.1 }}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isRecommended
                ? "border-primary/40 bg-primary/[0.03] shadow-[0_0_24px_rgba(79,163,209,0.08)]"
                : "glass border-border/40"
            }`}
          >
            <button
              onClick={() => onToggle(isOpen ? null : originalIdx)}
              className="flex w-full items-center justify-between p-4 text-left"
            >
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-semibold tracking-tight ${
                      isRecommended
                        ? "text-primary text-lg"
                        : "text-foreground text-base"
                    }`}
                  >
                    {plan}
                  </span>
                  {isRecommended && (
                    <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider uppercase">
                      <Sparkles className="h-2.5 w-2.5" />
                      Most Popular
                    </span>
                  )}
                </div>
                {data.licenseTypes?.[plan] && (
                  <span className="text-muted-foreground/50 font-mono text-[10px] tracking-wider uppercase">
                    {data.licenseTypes[plan]}
                  </span>
                )}
              </div>
              <ChevronDown
                className={`text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-1 px-4 pb-4">
                {data.descriptions?.[plan] && (
                  <p className="text-muted-foreground/70 border-border/20 border-b pb-3 text-xs leading-relaxed">
                    {data.descriptions[plan]}
                  </p>
                )}

                {data.features.map((feature) => {
                  const value = feature.values[originalIdx];
                  const isCheck = isCheckValue(value);
                  const isCross = isCrossValue(value);
                  const isTrigger = triggers.has(feature.name);

                  return (
                    <div
                      key={feature.name}
                      className={`border-border/20 flex items-center justify-between border-t py-2.5 first:border-0 ${
                        isTrigger
                          ? "bg-primary/[0.02] border-primary/10 -mx-4 border-y px-4"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-muted-foreground/80 font-mono text-[10px] tracking-wider uppercase">
                          {feature.name}
                        </span>
                        {isTrigger && (
                          <span className="bg-primary/10 text-primary inline-flex items-center rounded-full px-1 py-0.5 font-mono text-[7px] tracking-wider uppercase">
                            upgrade
                          </span>
                        )}
                      </div>
                      {isCheck ? (
                        <Check className="text-primary h-4 w-4 shrink-0" />
                      ) : isCross ? (
                        <Minus className="text-muted-foreground/30 h-4 w-4 shrink-0" />
                      ) : (
                        <span className="text-muted-foreground shrink-0 font-mono text-xs">
                          {value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
