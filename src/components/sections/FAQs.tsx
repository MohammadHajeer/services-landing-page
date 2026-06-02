import { motion, AnimatePresence } from "motion/react";
import { FAQ } from "../../lib/constants";
import { cn } from "../../lib/utils";
import ArrowDown from "../../assets/icons/icon_chevron-down.svg";
import { useState } from "react";

const { title, content } = FAQ;

function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="flex gap-12 max-xl:flex-col ">
      <div className="max-sm:text-center">
        <h2 className="section-heading mb-3 whitespace-pre-line ">{title}</h2>
        <p className="text-xl max-sm:text-lg">
          Still need help?{" "}
          <a href="#" className="text-secondary text-2xl max-sm:text-lg">
            Get Help Now
          </a>
        </p>
      </div>

      <div className="flex-1">
        <ul className="flex flex-col gap-3">
          {content.map((faq, index) => (
            <FAQCard
              key={faq.question}
              faq={faq}
              active={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export { FAQs };

function FAQCard({
  faq,
  active = false,
  onClick,
}: {
  faq: (typeof content)[0];
  active?: boolean;
  onClick: () => void;
}) {
  const { question, answer } = faq;

  return (
    <motion.li
      onClick={onClick}
      layout // Smoothly animates the layout shifts of the card itself
      className={cn(
        "px-8 py-6 rounded-xl cursor-pointer list-none",
        active && "bg-surface",
      )}
    >
      <div className="flex items-center justify-between gap-8">
        <h3 className="text-2xl font-bold text-surface-foreground max-sm:text-lg">
          {question}
        </h3>
        {/* Added transition to make the arrow rotation smooth */}
        <button className="focus:outline-none">
          <img
            src={ArrowDown}
            alt="Expand & Collapse"
            className={cn(
              "transition-transform duration-300",
              active && "rotate-180",
            )}
          />
        </button>
      </div>

      {/* AnimatePresence handles the unmounting exit animations */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden" // Crucial to prevent text jumping during animation
          >
            <p className="text-[#737373] mt-4 text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
