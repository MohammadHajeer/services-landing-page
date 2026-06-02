import { FOOTER } from "../../lib/constants";

const { logo, description, copyright, menus, socials } = FOOTER;

function Footer() {
  return (
    <footer className="bg-secondary relative">
      <div className="container pb-18.5 pt-13 lg:px-24">
        {/* New letter subscription */}
        <div className="flex gap-8 lg:items-center justify-between bg-secondary-accent p-6 rounded-3xl mb-13 max-lg:flex-col">
          <div className="flex flex-col gap-3 text-secondary-foreground">
            <h3 className="text-2xl">Stay Connected with Our Newsletter</h3>
            <p className="text-lg">
              Subscribe to our newsletter to get more news, promo, or news
              services
            </p>
          </div>
          <div className="rounded-full bg-secondary-foreground p-3 max-sm:p-2 lg:basis-1/3 max-w-full flex">
            <input
              type="email"
              className="border-none outline-none bg-transparent flex-1 pl-2 w-full"
              placeholder="Enter email address"
            />
            <button className="text-lg py-3.5 px-9 max-sm:px-4 max-sm:py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary-accent transition-all">
              subscribe
            </button>
          </div>
        </div>
        <div className="flex items-start gap-8 justify-between text-secondary-foreground px-6 max-md:flex-col">
          <div className="space-y-8">
            <div>
              <img src={logo} alt="Footer Logo" />
            </div>
            <p className="lg:w-115">{description}</p>
            <div>
              <ul>
                {socials.map((social) => (
                  <li key={social.href} className="inline-block mr-4">
                    <a href={social.href} className="hover:text-secondary">
                      <img src={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <ul className="grid grid-cols-2 gap-25.5 text-secondary-foreground">
              {menus.map((menu) => (
                <li key={menu.title} className="mb-4">
                  <h4 className="text-2xl font-semibold mb-6">{menu.title}</h4>
                  <ul className="space-y-3">
                    {menu.links.map((link) => (
                      <li key={link.href} className="">
                        <a
                          href={link.href}
                          className="hover:text-secondary text-xl whitespace-nowrap"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-8 border-t border-secondary-foreground/50">
        <p className="text-center text-lg text-secondary-foreground">
          {copyright}
        </p>
      </div>
    </footer>
  );
}

export { Footer };
