
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Headline.css";
import "../JS/Headline.js";

function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0C0C0C] px-5 py-16 text-white sm:px-8 lg:px-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#4BFFA5]/[0.07] blur-[100px]" />

      <div className="relative mx-auto flex min-h-[75vh] w-full max-w-7xl flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between lg:gap-10">

        {/* Left: Introduction */}
        <div className="flex w-full flex-col items-center text-center lg:w-[55%] lg:items-start lg:text-left">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4BFFA5]/25 bg-[#4BFFA5]/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#4BFFA5]" />
            <span className="text-xs font-medium tracking-wide text-[#4BFFA5] sm:text-sm">
              FRONTEND DEVELOPER · 2 YEARS EXPERIENCE
            </span>
          </div>

          <p className="mb-3 text-base text-gray-400 sm:text-lg">
            Hi, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Harsh{" "}
            <span className="text-[#4BFFA5]">Raval.</span>
          </h1>

          <h2 className="mt-5 min-h-[2.5rem] text-xl font-semibold text-gray-200 sm:text-2xl md:text-3xl">
            I build{" "}
            <span
              id="changingText"
              className="text-[#4BFFA5] underline decoration-[#4BFFA5]/50 underline-offset-8"
            />
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            I'm a Frontend Developer with around 2 years of Experience building
            responsive and user-friendly websites. My experience includes
            developing dashboards, E-commerce websites, and WordPress websites,
            along with API integration and working with HTML, CSS, JavaScript,
            and React.js. I also have basic knowledge of MySQL and am currently
            learning Node.js to expand my development skills.
          </p>



          {/* Action button */}
          <div className="mt-9 flex justify-center lg:justify-start">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 rounded-lg border border-[#4BFFA5] px-7 py-3.5 text-sm font-semibold text-[#4BFFA5] transition-all duration-300 hover:bg-[#4BFFA5] hover:text-[#0C0C0C] sm:text-base"
            >
              Explore My Work
             <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

        {/* Right: Visual */}
        <div className="relative flex w-full items-center justify-center lg:w-[45%]">
          <div className="absolute h-64 w-64 rounded-full border border-[#4BFFA5]/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#151515] p-3 shadow-2xl shadow-black/40 sm:p-4">
            <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-500">
                developer-portfolio
              </span>
            </div>

            <img
              src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
              alt="Animated developer illustration"
              className="mx-auto aspect-square w-full max-w-sm rounded-xl object-contain"
            />

            <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  Turning ideas into interfaces
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Design · Development · Experience
                </p>
              </div>

              <span className="text-2xl text-[#4BFFA5]">{"</>"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      {/* <div className="relative mt-10 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs text-gray-500 transition-colors hover:text-[#4BFFA5]"
        >
          <span>Scroll to explore</span>
          <span className="animate-bounce text-lg">↓</span>
        </a>
      </div> */}
    </section>
  );
}

export default Home;
