export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.14em] text-cream/30 pb-2.5 border-b border-cream/[0.07] mb-5">
      {children}
    </p>
  );
}
