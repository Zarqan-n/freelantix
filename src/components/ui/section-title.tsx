import { cn } from '@/lib/utils';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) => {
  const alignClass = {
    'text-left': align === 'left',
    'text-center': align === 'center',
    'text-right': align === 'right',
  };

  const containerClass = cn(
    'mb-16',
    align === 'center' && 'max-w-3xl mx-auto',
    className
  );

  return (
    <div className={containerClass}>
      {subtitle && (
        <span className={cn("inline-block text-primary font-medium mb-2", alignClass)}>
          {subtitle}
        </span>
      )}
      <h2 className={cn("font-heading font-bold text-3xl lg:text-4xl text-neutral-800 mb-4", alignClass)}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-neutral-600", alignClass)}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
