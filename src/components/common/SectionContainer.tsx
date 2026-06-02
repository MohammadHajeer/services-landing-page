import { cn } from "../../lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  defaultStyles?: boolean;
}

/**
 * A reusable container component for sections of the landing page. It provides consistent padding and layout, and can be customized with additional styles if needed.
 */
function SectionContainer({
  children,
  id,
  className = "",
  defaultStyles = true,
}: SectionContainerProps) {
  return (
    <section id={id}>
      <div
        className={cn(defaultStyles && "container py-30 lg:px-24 relative", className)}
      >
        {children}
      </div>
    </section>
  );
}

export { SectionContainer };
