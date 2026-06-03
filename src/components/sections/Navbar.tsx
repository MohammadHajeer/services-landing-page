import { useEffect, useState } from "react";
import { NAV_LINKS } from "../../lib/constants";
import Logo from "../../assets/images/nav-logo.png";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);
  return (
    <>
      <nav className="bg-primary text-primary-foreground lg:h-20 h-14 flex items-center sticky -top-0.5 z-100">
        <div className="container flex justify-between items-center">
          <div className="">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="max-lg:hidden">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="inline-block ml-6">
                  <a href={link.href} className="hover:text-secondary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Stats className="hidden lg:flex" />

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export { Navbar };

function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween" }}
        className={
          "lg:hidden fixed inset-y-0 right-0 w-3/4 bg-primary text-primary-foreground z-200 flex flex-col"
        }
      >
        <div className="h-14 flex items-center justify-between px-4 border-b border-primary-accent">
          <div className="">
            <img src={Logo} alt="Logo" />
          </div>
          <button onClick={closeMenu}>
            <span className="sr-only">Close menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="py-8 text-lg">
              <a
                href={link.href}
                className="hover:text-secondary"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Stats className="mt-auto justify-center mb-9" />
      </motion.nav>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween" }}
        className="lg:hidden fixed inset-0 bg-foreground opacity-50 z-100"
        onClick={closeMenu}
      />
    </>
  );
}

function Stats({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-lg ${className}`}>
      <div className="bg-[#FF5E5E] size-3 rounded-full relative">
        <span className="absolute inset-0 bg-[#FF5E5E] animate-ping rounded-full"></span>
      </div>
      <span>24 Hour Services</span>
    </div>
  );
}
