
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const resumeUrl =
  "https://drive.google.com/file/d/11aH20E5Mv0ljcFbNgycP-31ndNKf_kQK/view?usp=drive_link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close menu when switching to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileMenu =
    menuOpen &&
    createPortal(
      <div
        className="fixed inset-x-0 bottom-0 top-[76px] z-[9999] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#0C0C0C] lg:hidden sm:top-[84px]"
        id="mobile-navigation"
      >
        <nav className="mx-auto flex min-h-full w-full max-w-[1440px] flex-col px-5 pb-8 pt-6 sm:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#4BFFA5]">
            Navigation
          </p>

          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl border px-4 py-4 text-base font-medium transition-colors ${
                    isActive
                      ? "border-[#4BFFA5]/25 bg-[#4BFFA5]/[0.08] text-[#4BFFA5]"
                      : "border-transparent text-gray-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-[#4BFFA5]"
                  }`
                }
              >
                <span>{item.name}</span>
                <i className="ri-arrow-right-up-line text-lg opacity-60" />
              </NavLink>
            ))}
          </div>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#4BFFA5] px-5 py-4 font-semibold text-[#0C0C0C] hover:bg-white"
          >
            Download Resume
            <i className="ri-arrow-up-right-line text-lg" />
          </a>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="text-sm text-gray-500">Connect with me</p>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/harsh-raval-a9b6b5444?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-xl text-gray-300 hover:border-[#4BFFA5]/40 hover:text-[#4BFFA5]"
              >
                <i className="ri-linkedin-fill" />
              </a>

              <a
                href="https://github.com/HarshRaval31"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-xl text-gray-300 hover:border-[#4BFFA5]/40 hover:text-[#4BFFA5]"
              >
                <i className="ri-github-fill" />
              </a>
            </div>
          </div>
        </nav>
      </div>,
      document.body
    );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0C0C0C]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:h-[84px] sm:px-8 lg:px-12">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Harsh Raval - Home"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Harsh Raval logo"
              className="h-auto w-[120px] sm:w-[130px]"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-medium transition-colors xl:text-[17px] ${
                    isActive
                      ? "text-[#4BFFA5]"
                      : "text-gray-300 hover:text-[#4BFFA5]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <a
              href="https://www.linkedin.com/in/harsh-raval-a9b6b5444?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-xl text-gray-300 hover:text-[#4BFFA5]"
            >
              <i className="ri-linkedin-fill" />
            </a>

            <a
              href="https://github.com/HarshRaval31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-xl text-gray-300 hover:text-[#4BFFA5]"
            >
              <i className="ri-github-fill" />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#4BFFA5] px-4 py-2 text-sm font-semibold text-[#0C0C0C] hover:bg-white"
            >
              Resume <i className="ri-arrow-up-right-line ml-1" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 text-2xl text-white hover:border-[#4BFFA5] hover:text-[#4BFFA5] lg:hidden"
          >
            <i
              className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}

export default Header;
