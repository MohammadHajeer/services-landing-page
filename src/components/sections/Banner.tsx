import { BANNER } from "../../lib/constants";
import { CTAButton } from "../common/CTAButton";
import IconCheck from "../../assets/icons/icon-check.svg";

const { image, title } = BANNER;

function Banner() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground relative flex max-2xl:flex-col">
      <div className="container sm:pt-41.25 pt-14 pb-26.5 lg:px-24 relative ">
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 94% 17%, 6% 17%)",
          }}
          className="absolute -top-0.5 left-0 2xl:w-1/3 w-2/3 h-40 bg-primary-foreground sm:translate-x-1/5 translate-x-1/4"
        />
        <h2 className="text-[64px] max-sm:text-2xl whitespace-pre-line font-extrabold sm:leading-18 mb-6 max-sm:text-center">
          {title}
        </h2>
        <ul className="flex items-center gap-8 max-sm:text-sm flex-wrap mb-8 max-sm:justify-center">
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
        <CTAButton className="max-sm:mx-auto" />
      </div>
      <div className="self-end">
        <img
          src={image}
          alt="Banner Image"
          className="2xl:absolute top-0 right-0"
        />
      </div>
    </section>
  );
}

export { Banner };
