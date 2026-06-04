import { useState } from "react";
import { REVIEWS } from "../../lib/constants";
import { RatingStars } from "../common/RatingStars";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

import IconArrowRight from "../../assets/icons/icon-arrow-right.svg";

const { title, logo, content } = REVIEWS;

function Reviews() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const haveNext = activeIndex !== null && activeIndex < content.length - 1;
  const havePrev = activeIndex !== null && activeIndex > 0;

  return (
    <div>
      <h2 className="section-heading mb-16.5 max-w-2xl mx-auto text-center">
        {title}
      </h2>

      <div className="p-6 relative">
        <img src={logo} alt={`${title}-logo`} className="mx-auto max-sm:h-9" />
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-90 from-white via-muted/10 to-white"></span>
      </div>
      <div className="relative flex items-center">
        <NavigateButton
          enabled={havePrev}
          setIndex={setActiveIndex}
          prev
          className="max-md:hidden"
        />

        <div className="overflow-hidden flex flex-1">
          {content.map((review, index) => (
            <motion.div
              key={index}
              animate={{
                x: `-${(activeIndex || 0) * 100}%`,
              }}
              transition={{ type: "tween" }}
              className="w-full shrink-0"
            >
              <ReviewCard key={review.name} review={review} />
            </motion.div>
          ))}
        </div>

        <NavigateButton
          enabled={haveNext}
          setIndex={setActiveIndex}
          className="max-md:hidden"
        />
      </div>

      <div className="mt-19 flex items-center justify-center gap-8">
        <NavigateButton
          enabled={havePrev}
          setIndex={setActiveIndex}
          prev
          className="md:hidden"
        />
        <ul className="flex items-center justify-center gap-3">
          {[...Array(content.length)].map((_, index) => (
            <li key={index} onClick={() => setActiveIndex(index)}>
              <motion.div
                initial={{ width: 12 }}
                animate={{
                  width: activeIndex === index ? 40 : 12,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                  "size-3 rounded-full",
                  activeIndex === index ? "bg-secondary" : "bg-muted/20",
                )}
              ></motion.div>
            </li>
          ))}
        </ul>
        <NavigateButton
          enabled={haveNext}
          setIndex={setActiveIndex}
          className="md:hidden"
        />
      </div>
    </div>
  );
}

export { Reviews };

function ReviewCard({ review }: { review: (typeof content)[0] }) {
  const { name, text, rating, picture } = review;

  return (
    <div className="p-10 max-sm:px-0 flex flex-col items-center">
      <p className="text-muted text-xl mb-10 max-w-2xl text-center line-clamp-5">
        {text}
      </p>
      <div className="flex items-center gap-8">
        <div className="size-19 max-sm:size-13 rounded-full overflow-hidden bg-primary-accent">
          <img src={picture} alt={name} className="size-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 max-sm:text-xl">{name}</h3>
          <div>
            <RatingStars rating={rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigateButton({
  enabled,
  setIndex,
  prev = false,
  className,
}: {
  enabled: boolean;
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  prev?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={() => {
        if (enabled) {
          if (prev) {
            setIndex((prevIndex) =>
              prevIndex !== null ? prevIndex - 1 : null,
            );
          } else {
            setIndex((prevIndex) =>
              prevIndex !== null ? prevIndex + 1 : null,
            );
          }
        }
      }}
      className={cn(
        "p-2 rounded-full bg-muted/20 shrink-0",
        enabled && "bg-secondary",
        className,
      )}
    >
      <img src={IconArrowRight} className={cn(prev && "rotate-180")} />
    </button>
  );
}
