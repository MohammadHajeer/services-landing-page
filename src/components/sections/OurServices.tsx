import { OUR_SERVICES } from "../../lib/constants";
import { CTAButton } from "../common/CTAButton";

const { title, description, content } = OUR_SERVICES;

function OurServices() {
  return (
    <div>
      <div className="text-center max-w-138 mx-auto mb-15">
        <h1 className="section-heading">{title}</h1>
        <p className="section-subheading">{description}</p>
      </div>

      <div>
        <ul className="grid-auto-wrap">
          {content.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
          <li className="p-8 bg-secondary text-secondary-foreground rounded-3xl text-center flex flex-col">
            <h3 className="text-2xl font-bold mb-1">More Services</h3>
            <p className="text-lg">You can tell us what you need and we can help! </p>

            <CTAButton removeIcon className="bg-secondary-foreground text-secondary w-full justify-center p-4! mt-auto"/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { OurServices };

function ServiceCard({
  service,
}: {
  service: (typeof OUR_SERVICES.content)[0];
}) {
  const { title, description, icon } = service;

  return (
    <li className="p-8">
      <div className="p-3 rounded-xl bg-primary w-fit">
        <img src={icon} alt={title} className="size-10" />
      </div>
      <h3 className="text-2xl font-bold mt-4">{title}</h3>
      <p className="section-subheading">{description}</p>
    </li>
  );
}
