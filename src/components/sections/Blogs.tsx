import { BLOGS } from "../../lib/constants";
import ArrowDown from "../../assets/icons/icon_chevron-down.svg";

const { title, description, content } = BLOGS;

function Blogs() {
  return (
    <div>
      <div className="text-center mb-14">
        <h2 className="section-heading mb-6">{title}</h2>
        <p className="section-subheading max-w-lg mx-auto">{description}</p>
      </div>

      <div>
        <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-12">
          {content.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </ul>
      </div>

      <a
        href="#view-more"
        className="text-secondary mt-14 flex items-center text-2xl gap-2 justify-center max-sm:text-lg"
      >
        View More
        <img
          src={ArrowDown}
          alt="View More"
          className="rotate-90 secondary-filter max-sm:size-6"
        />
      </a>
    </div>
  );
}

export { Blogs };

function BlogCard({ blog }: { blog: (typeof content)[0] }) {
  const { thumbnail, title, description, date, badges } = blog;
  return (
    <li className="space-y-4">
      <div className="rounded-3xl overflow-hidden">
        <img
          src={thumbnail}
          alt={`${title}-blog-thumbnail`}
          className="size-full object-cover"
        />
      </div>
      <span className="text-muted text-lg">{date}</span>
      <h3 className="text-[32px] font-bold max-sm:text-[20px]">{title}</h3>
      <p className="text-muted text-lg line-clamp-3">{description}</p>
      <div>
        <ul className="flex gap-3">
          {badges.map((badge, index) => (
            <li
              key={index}
              className="text-sm px-4 py-2 rounded-full bg-surface"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
