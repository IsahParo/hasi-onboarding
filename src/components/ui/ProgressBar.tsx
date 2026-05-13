"use client";

const STEPS = [
  { id: 1, label: "Negócio",    short: "Neg." },
  { id: 2, label: "Público",    short: "Púb." },
  { id: 3, label: "Mercado",    short: "Mer." },
  { id: 4, label: "Digital",    short: "Dig." },
  { id: 5, label: "Identidade", short: "Id."  },
  { id: 6, label: "Linguagem",  short: "Ling." },
  { id: 7, label: "Objetivos",  short: "Obj." },
  { id: 8, label: "Materiais",  short: "Mat." },
];

interface ProgressBarProps {
  current: number;
  onSelect: (step: number) => void;
}

export default function ProgressBar({ current, onSelect }: ProgressBarProps) {
  return (
    <div className="sticky top-0 z-50 bg-hasi-bg/95 backdrop-blur-sm border-b border-cream/[0.07]">
      <div className="max-w-[680px] mx-auto px-4 py-3">
        <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
          {STEPS.map((step, idx) => {
            const isActive    = step.id === current;
            const isCompleted = step.id < current;

            return (
              <div key={step.id} className="flex items-center gap-0.5 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => onSelect(step.id)}
                  aria-label={`Ir para bloco ${step.id}: ${step.label}`}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "border-hasi-cyan/40 bg-hasi-cyan/5 text-cream"
                      : isCompleted
                      ? "border-cream/12 text-cream/55 hover:text-cream/75"
                      : "border-transparent text-cream/22 hover:text-cream/40"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 font-semibold ${
                    isActive    ? "bg-hasi-cyan/15 text-hasi-cyan"
                    : isCompleted ? "bg-hasi-cyan/8 text-hasi-cyan/60"
                    : "bg-cream/5 text-cream/25"
                  }`}>
                    {step.id}
                  </span>
                  <span className="hidden sm:block">{step.label}</span>
                  <span className="block sm:hidden">{step.short}</span>
                </button>
                {idx < STEPS.length - 1 && (
                  <span className="text-cream/15 text-xs flex-shrink-0 px-0.5">›</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
