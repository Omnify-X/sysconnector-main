interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <p className={`eyebrow ${className}`.trim()}>
      <span className="eyebrow-dot" />
      {children}
    </p>
  );
}
