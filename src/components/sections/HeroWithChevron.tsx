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

      {/* Chevron overlay: dual gold bands with teal gap (" >> ") */}
      <svg
        className="absolute top-0 bottom-0 hidden md:block z-10"
        style={{ left: "36%", width: "28%" }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Left gold wedge */}
        <polygon points="0,0 65,0 85,50 65,100 0,100" fill="hsl(var(--accent))" />
        {/* Teal gap wedge */}
        <polygon points="65,0 72,0 92,50 72,100 65,100" fill="hsl(var(--primary))" />
        {/* Right gold wedge */}
        <polygon points="72,0 94,0 100,50 94,100 72,100" fill="hsl(var(--accent))" />
      </svg>

      {/* Mobile: Full gold background with photo */}
      <div className="absolute left-0 top-0 bottom-0 w-full bg-accent md:hidden z-0" />

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

      {/* Bottom Chevron Pointer */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-t-[40px] border-transparent z-20"
        style={{ borderTopColor: "hsl(var(--accent))" }}
      />
    </section>
  );
};

export default HeroWithChevron;
