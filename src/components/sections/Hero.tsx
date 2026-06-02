import WorkerRepairing from "../../assets/images/hero-worker-repairing.png";
import WorkerPlumbing from "../../assets/images/hero-worker-plumbing.png";
import IconCheck from "../../assets/icons/icon-check.svg";
import { HERO } from "../../lib/constants";
import { CTAButton } from "../common/CTAButton";
import { Fragment } from "react";

const { title, highlights } = HERO;

// TODO: Compelete the bottom desgin and make it responsive

function Hero() {
  return (
    <div className="bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-464 px-4 mx-auto flex justify-between pb-15 relative ">
        <div className="relative max-2xl:hidden">
          <img
            src={WorkerRepairing}
            alt="Worker Repairing"
            className="rounded-2xl rounded-br-none "
          />
          <span className="absolute inset-0 -bg-linear-60 from-primary via-transparent to-transparent"></span>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-16 max-2xl:pt-6">
          <div className="flex flex-col items-center text-center gap-8 mt-auto">
            <ul className="flex items-center gap-4 text-primary-muted font-semibold max-sm:text-sm">
              <li>Maintenances</li>
              <li>•</li>
              <li>Repairs</li>
              <li>•</li>
              <li>Improvements</li>
            </ul>
            <h2 className="md:text-6xl sm:text-5xl text-3xl font-extrabold whitespace-pre-line sm:leading-18">
              {title}
            </h2>
            <div className="mb-2">
              <ul className="flex items-center gap-8 max-sm:text-sm flex-wrap justify-center">
                <li className="text-secondary">
                  <img
                    src={IconCheck}
                    alt="Check Icon"
                    className="inline mr-2 max-sm:size-4!"
                  />
                  Free Quotes
                </li>
                <li className="text-secondary">
                  <img
                    src={IconCheck}
                    alt="Check Icon"
                    className="inline mr-2 max-sm:size-4!"
                  />
                  100% Commitment-Free
                </li>
              </ul>
            </div>
            <CTAButton />
          </div>
          <div className="mt-auto sm:pb-10 -mb-8 px-10">
            <ul className="flex items-center justify-center gap-6 max-lg:flex-wrap relative max-2xs:flex-col">
              <span className="absolute inset-x-0 h-0.5 bg-linear-90 from-primary via-primary-foreground/20 to-primary sm:hidden max-2xs:hidden"></span>
              <span className="absolute inset-y-0 w-0.5 bg-linear-0 from-primary via-primary-foreground/20 to-primary sm:hidden max-2xs:hidden"></span>
              {highlights.map((highlight, index) => (
                <Fragment key={index}>
                  <HighLight {...highlight} />
                  <span className="last:hidden h-12 w-0.5 bg-linear-0 from-primary via-primary-foreground/20 to-primary max-sm:hidden"></span>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative max-2xl:hidden">
          <img
            src={WorkerPlumbing}
            alt="Worker Plumbing"
            className="rounded-2xl rounded-bl-none"
          />
          <span className="absolute inset-0 bg-linear-60 from-primary via-transparent to-transparent"></span>
        </div>

        <div
          className="absolute bottom-0 right-0 h-70 w-[50vw] bg-primary-foreground translate-x-1/2 translate-y-1"
          style={{
            clipPath:
              "polygon(calc(0% + 80px) 82%, 100% 82%, 100% 100%, 0% 100%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 h-70 w-[50vw] bg-primary-foreground -translate-x-1/2 translate-y-1"
          style={{
            clipPath:
              "polygon(0% 82%, calc(100% - 80px) 82%, 100% 100%, 0% 100%)",
          }}
        />
      </div>
    </div>
  );
}

export { Hero };

function HighLight({ icon, title }: { icon: string; title: string }) {
  return (
    <li className="flex gap-4 items-center justify-center max-lg:flex-col leading-5 max-sm:basis-1/3 max-sm:p-2">
      <div className="p-3 bg-primary-accent rounded-full shrink-0">
        <img src={icon} alt={title} className="size-5!" />
      </div>
      <span className="whitespace-pre-line max-lg:text-center max-sm:text-sm">
        {title}
      </span>
    </li>
  );
}
