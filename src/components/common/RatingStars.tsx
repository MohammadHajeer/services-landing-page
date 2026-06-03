import { cn } from "../../lib/utils";

interface RatingStarsProps {
  rating: number; // e.g., 3.4 or 4.8
  maxStars?: number; // defaults to 5
  className?: string;
}

export function RatingStars({
  rating,
  maxStars = 5,
  className,
}: RatingStarsProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {/* 1. Define the reusable gradient clip masks */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {Array.from({ length: maxStars }).map((_, index) => {
            const starValue = index + 1;
            // Calculate fill percentage for this specific star
            let fillPercent = 0;
            if (rating >= starValue) {
              fillPercent = 100; // Fully filled
            } else if (rating > starValue - 1) {
              fillPercent = (rating - (starValue - 1)) * 100; // Partially filled (e.g., 0.4 * 100 = 40%)
            }

            return (
              <linearGradient id={`star-grad-${index}`} key={index}>
                <stop
                  offset={`${fillPercent}%`}
                  stopColor="var(--color-amber-400, #fbbf24)"
                />
                <stop
                  offset={`${fillPercent}%`}
                  stopColor="var(--color-muted-foreground-40, #e5e7eb)"
                />
              </linearGradient>
            );
          })}
        </defs>
      </svg>

      {/* 2. Render the Stars */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }).map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              fill: `url(#star-grad-${index})`,
              color:
                index + 1 <= Math.ceil(rating)
                  ? "var(--color-amber-400, #fbbf24)"
                  : "#d1d5db",
            }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Optional numerical label */}
      <span className="text-sm font-semibold ml-1.5 text-surface-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
