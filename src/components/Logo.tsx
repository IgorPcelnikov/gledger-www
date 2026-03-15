export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary-dark to-green shadow-md shadow-primary/20">
        <span className="text-sm font-extrabold tracking-tight text-white">
          GL
        </span>
        {/* Subtle corner accent — evokes cloud/infrastructure without copying */}
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-tl-lg bg-white/15" />
      </div>
      <span className="text-xl font-semibold tracking-tight text-foreground">
        <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          GL
        </span>
        edger
        <span className="bg-gradient-to-r from-primary to-green bg-clip-text text-transparent">
          .ai
        </span>
      </span>
    </div>
  );
}
