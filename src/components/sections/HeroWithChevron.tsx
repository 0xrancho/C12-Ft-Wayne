import { ReactNode } from "react";

interface HeroWithChevronProps {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const HeroWithChevron = ({
  backgroundImage,
  title,
  subtitle,
  description,
  children,
  className = "",
}: HeroWithChevronProps) => {
  return (
    <section className={`relative min-h-[600px] flex items-center overflow-hidden ${className}`}>
      {/* Background Image Section (Left 40%) */}
      {backgroundImage && (
        <div
          className="absolute left-0 top-0 bottom-0 w-full md:w-[40%] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Teal Background for Content Area (Right 60%) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] bg-primary z-0" />

      {/* Double Chevron Divider: Teal and Gold */}
      <svg
        className="absolute top-0 bottom-0 hidden md:block z-10"
        style={{ left: "35%", width: "20%" }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Teal chevron stripe */}
        <polygon points="0,0 25,0 45,50 25,100 0,100" fill="hsl(var(--primary))" />
        {/* Gold chevron stripe */}
        <polygon points="25,0 85,0 100,50 85,100 25,100" fill="hsl(var(--accent))" />
      </svg>

      {/* Content Section (Right 60%) */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="md:ml-[56%] md:pl-12 py-20">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="mb-6">{title}</h1>
            {subtitle && <p className="text-2xl md:text-3xl font-heading mb-6">{subtitle}</p>}
            {description && <div className="mb-8 opacity-95">{description}</div>}
            {children && <div className="flex flex-wrap gap-4">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithChevron;
