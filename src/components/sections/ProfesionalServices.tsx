import { PROFESIONAL_SERVICES } from "../../lib/constants";

import IconCheck from "../../assets/icons/icon-check.svg";

const { title, description, image, content } = PROFESIONAL_SERVICES;

function ProfesionalServices() {
  return (
    <div className="flex gap-8 items-end max-xl:flex-col-reverse">
      <div className="basis-1/2">
        <h2 className="section-heading mb-6">{title}</h2>
        <p className="section-subheading">{description}</p>
        <div className="my-14">
          <ul className="grid grid-cols-2 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-12 max-sm:gap-6">
            {content.map((service, index) => (
              <li key={index} className="flex gap-3 items-center">
                <div>
                  <img
                    src={IconCheck}
                    alt="Check Icon"
                    className="primary-filter"
                  />
                </div>
                <span className="sm:text-xl text-primary-accent font-bold">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary text-secondary-foreground py-3 px-8 rounded-3xl whitespace-pre-line text-lg w-fit">
          <p>
            We already 24 hours fast services to help you. {"\n"}You can contact us at
            {" "}<strong className="font-extrabold underline sm:text-xl">(888) 617-5894</strong>
          </p>
        </div>
      </div>

      <div className="flex-1">
        <div
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
          }}
          className="bg-red-500  relative rounded-3xl overflow-hidden"
        >
          <img src={image} className="size-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export { ProfesionalServices };
