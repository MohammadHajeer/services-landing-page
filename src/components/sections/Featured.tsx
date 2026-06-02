import { FEATURES } from "../../lib/constants";

const { title, description, content } = FEATURES;

function Featured() {
  return (
    <>
      <div className="">
        <div className="flex xl:items-end xl:justify-between max-xl:flex-col max-lg:text-center">
          <h2 className="section-heading basis-1/2 text-primary-foreground mb-3">
            {title}
          </h2>
          <p className="section-subheading basis-1/2 xl:pr-20 text-primary-muted">
            {description}
          </p>
        </div>

        <div className="my-15 h-0.5 w-full bg-linear-90 from-primary via-primary-foreground/20 to-primary"></div>

        <div>
          <ul className="grid lg:grid-cols-2 gap-15">
            {content.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          clipPath: "polygon(79% 4%, 100% 0, 100% 100%, 79% 96%)",
        }}
        className="absolute h-3/4 top-1/2 -translate-y-1/2 w-40 max-lg:w-20 right-0 bg-white translate-x-1"
      ></div>
      <div
        style={{
          clipPath: "polygon(79% 4%, 100% 0, 100% 100%, 79% 96%)",
        }}
        className="absolute h-3/4 top-1/2 -translate-y-1/2 w-40 max-lg:w-20 left-0 bg-white -translate-x-1 rotate-180"
      ></div>
    </>
  );
}

export { Featured };

function FeatureCard({ feature }: { feature: (typeof FEATURES.content)[0] }) {
  const { title, description, icon } = feature;

  return (
    <li className="flex items-start gap-8 max-xs:flex-col max-xs:items-center max-xs:text-center">
      <div className="shrink-0">
        <img src={icon} alt={title} className="size-25" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-primary-foreground mb-3 max-sm:text-lg">
          {title}
        </h3>
        <p className="text-primary-muted text-lg">{description}</p>
      </div>
    </li>
  );
}
