interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

function SectionContainer({
  children,
  id,
  className = "",
}: SectionContainerProps) {
  return (
    <section id={id} className={`container py-30 px-20 ${className}`}>
      {children}
    </section>
  );
}

export { SectionContainer };
