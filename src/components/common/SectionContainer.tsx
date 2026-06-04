import { cn } from "../../lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
  /**
   * For container
   */
  className?: string;
  defaultStyles?: boolean;
  /**
   * For section
   */
  sectionClassName?: string;
}

/**
 * A reusable container component for sections of the landing page. It provides consistent padding and layout, and can be customized with additional styles if needed.
 */
function SectionContainer({
  children,
  id,
  className = "",
  defaultStyles = true,
  sectionClassName = "",
}: SectionContainerProps) {
  return (
    <section id={id} className={cn(sectionClassName)}>
      <div
        className={cn(
          defaultStyles && "container py-30 lg:px-24 relative",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export { SectionContainer };
