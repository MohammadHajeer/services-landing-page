import { HOW_WORKS } from "../../lib/constants";

const {
  title,
  image,
  content,
} = HOW_WORKS;

function HowWorks() {
  return (
    <div className="flex gap-22 items-start max-2xl:flex-col">
      <div className="flex-1 relative max-w-full">
        <div className="">
          <img src={image}  />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="section-heading whitespace-pre-line mb-15">{title}</h2>

        <ul className="space-y-10">
          {content.map((howWork, index) => (
            <HowWorkCard key={index} order={index + 1} howWork={howWork} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export { HowWorks };

function HowWorkCard({
  order,
  howWork,
}: {
  order: number;
  howWork: (typeof content)[0];
}) {
  const { title, description } = howWork;
  return (
    <li className="flex items-start gap-8 max-sm:flex-col max-sm:gap-2">
      <div className="flex gap-8 basis-1/3 items-center">
        <span className="text-primary-muted text-[52px] font-bold">
          {order}.
        </span>
        <h3 className="text-2xl font-bold max-sm:text-xl">{title}</h3>
      </div>
      <p className="section-subheading flex-1">{description}</p>
    </li>
  );
}
