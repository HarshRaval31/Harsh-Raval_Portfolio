
import React from "react";
import Image from "../assets/Image.jpeg";

function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0C0C0C] px-5 py-20 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-0 top-32 h-64 w-64 rounded-full bg-[#4BFFA5]/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* About Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4BFFA5]">
            Get to know me
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About <span className="text-[#4BFFA5]">Me</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#4BFFA5]" />
        </div>

        {/* About Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Professional Photo */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-[#4BFFA5]/70 sm:-left-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-3 shadow-2xl shadow-black/30">
              <img
                src={Image}
                alt="Harsh Raval, Frontend Developer"
                className="max-h-[520px] w-full rounded-xl object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-2xl border-b-2 border-r-2 border-[#4BFFA5]/70 sm:-bottom-5 sm:-right-5" />
          </div>

          {/* Introduction */}
          <div className="flex flex-col items-start">
            <span className="rounded-full border border-[#4BFFA5]/25 bg-[#4BFFA5]/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-[#4BFFA5] sm:text-sm">
              FRONTEND DEVELOPER · 2 YEARS EXPERIENCE
            </span>

            <h2 className="mt-6 text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              Building useful, responsive, and engaging{" "}
              <span className="text-[#4BFFA5]">web experiences.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Hello, I'm Harsh Raval, a Frontend Developer with around 2 years of
              professional experience at Technozions Pvt. Ltd. I specialize in
              building responsive, user-friendly web interfaces and turning designs
              into functional websites that provide a smooth experience across
              desktop, tablet, and mobile devices.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              My practical experience includes developing dashboard interfaces,
              e-commerce websites, and WordPress websites using Elementor. I also
              work with REST APIs to fetch and display data, implement frontend
              functionality, and build interactive user interfaces using React.js,
              JavaScript, HTML, CSS, and Tailwind CSS.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Along with frontend development, I have basic knowledge of MySQL and
              am currently learning Node.js to expand my understanding of backend
              development. I'm committed to continuous learning, improving my
              problem-solving skills, and building clean, maintainable code while
              growing as a developer.
            </p>


            {/* Experience Summary */}
            <div className="mt-8 w-full rounded-xl border border-[#4BFFA5]/25 bg-[#4BFFA5]/[0.04] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4BFFA5]/10 text-xl text-[#4BFFA5]">
                  <i className="ri-briefcase-4-line" />
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">
                    Frontend Developer
                  </p>
                  <p className="mt-1 text-sm text-[#4BFFA5]">
                    Technozions Pvt. Ltd.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Rajkot, Gujarat · May 2025 – Present
                  </p>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Professional experience in frontend development,
                    dashboard interfaces, website development, and API
                    integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section id="education" className="mt-24 border-t border-white/10 pt-16">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4BFFA5]">
              Academic Background
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              My <span className="text-[#4BFFA5]">Education</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#4BFFA5]" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* Frontend Training */}
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 transition-colors duration-300 hover:border-[#4BFFA5]/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4BFFA5]/10 text-xl text-[#4BFFA5]">
                <i className="ri-code-s-slash-line" />
              </div>

              <p className="mt-5 text-sm text-gray-500">2023 – 2025</p>

              <h3 className="mt-3 text-lg font-semibold text-[#4BFFA5]">
                Front-End Web Development
              </h3>

              <p className="mt-3 font-medium text-white">
                Red & White Multimedia Education
              </p>

              <p className="mt-3 text-sm text-gray-400">
                <i className="ri-map-pin-line mr-1" />
                Rajkot, Gujarat
              </p>
            </div>

            {/* B.Com */}
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 transition-colors duration-300 hover:border-[#4BFFA5]/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4BFFA5]/10 text-xl text-[#4BFFA5]">
                <i className="ri-graduation-cap-line" />
              </div>

              <p className="mt-5 text-sm text-gray-500">2021 – 2024</p>

              <h3 className="mt-3 text-lg font-semibold text-[#4BFFA5]">
                Bachelor of Commerce (B.Com)
              </h3>

              <p className="mt-3 font-medium text-white">
                Atmiya University
              </p>

              <p className="mt-3 text-sm text-gray-400">
                <i className="ri-map-pin-line mr-1" />
                Rajkot, Gujarat
              </p>
            </div>

            {/* School Education */}
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 transition-colors duration-300 hover:border-[#4BFFA5]/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4BFFA5]/10 text-xl text-[#4BFFA5]">
                <i className="ri-book-open-line" />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                2018 · 2020
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#4BFFA5]">
                HSC & SSC
              </h3>

              <p className="mt-3 font-medium text-white">
                Parimal High School
              </p>

              <p className="mt-3 text-sm text-gray-400">
                <i className="ri-map-pin-line mr-1" />
                Rajkot, Gujarat
              </p>
            </div>

          </div>
        </section>

      </div>
    </section>
  );
}

export default About;
