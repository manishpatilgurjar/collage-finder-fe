import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cta' | 'success' | 'blue' | 'dark';
  className?: string;
}

export default function Badge({
  children,
  variant = 'cta',
  className,
}: BadgeProps) {
  const variants = {
    cta: 'bg-cta text-white',
    success: 'bg-success text-white',
    blue: 'bg-primary text-white',
    dark: 'bg-black/50 backdrop-blur-sm text-white',
  };

  return (
    <span
      className={cn(
        'inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
