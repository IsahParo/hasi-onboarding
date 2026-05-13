export default function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-14">
      <div className="flex-1 h-px bg-cream/[0.06]" />
      <span className="text-[10px] uppercase tracking-[0.18em] text-cream/25 font-medium whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-cream/[0.06]" />
    </div>
  );
}
