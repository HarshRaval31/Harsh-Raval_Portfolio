
import React from "react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: "ri-layout-4-line",
    number: "01",
    skills: [
      { name: "HTML5", icon: "ri-html5-line" },
      { name: "CSS3", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" },
      { name: "React.js", icon: "ri-reactjs-line" },
      { name: "Tailwind CSS", icon: "ri-windy-line" },
      { name: "Bootstrap", icon: "ri-bootstrap-line" },
      { name: "jQuery", icon: "ri-code-s-slash-line" },
      { name: "Next.js", icon: "ri-nextjs-line" },
    ],
  },
  {
    title: "CMS & Website Development",
    description: "Creating, customizing, and managing websites.",
    icon: "ri-pages-line",
    number: "02",
    skills: [
      { name: "WordPress", icon: "ri-wordpress-line" },
      { name: "Elementor", icon: "ri-layout-masonry-line" },
    ],
  },
  {
    title: "State Management & Data",
    description: "Managing application state and working with APIs and data.",
    icon: "ri-database-2-line",
    number: "03",
    skills: [
      { name: "Redux", icon: "ri-stack-line" },
      { name: "REST API Integration", icon: "ri-cloud-line" },
      { name: "JSON", icon: "ri-braces-line" },
      { name: "MySQL", icon: "ri-database-2-line", level: "Basic" },
      { name: "Firebase", icon: "ri-fire-line" },
    ],
  },
  {
    title: "Tools & Development",
    description: "Tools I use to build, manage, and deploy projects.",
    icon: "ri-tools-line",
    number: "04",
    skills: [
      { name: "Git & GitHub", icon: "ri-github-line" },
      { name: "VS Code", icon: "ri-code-box-line" },
      { name: "Vite", icon: "ri-flashlight-line" },
      { name: "NPM", icon: "ri-terminal-box-line" },
      { name: "React Router", icon: "ri-route-line" },
      { name: "Netlify", icon: "ri-upload-cloud-line" },
      { name: "Vercel", icon: "ri-triangle-line" },
      { name: "Render", icon: "ri-server-line" },
    ],
  },
  {
    title: "Currently Learning",
    description: "Expanding my skills and understanding of backend development.",
    icon: "ri-book-open-line",
    number: "05",
    skills: [
      { name: "Node.js", icon: "ri-nodejs-line", level: "Learning" },
      { name: "MySQL", icon: "ri-database-2-line", level: "Learning" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full overflow-hidden bg-[#0C0C0C] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-48 h-80 w-80 rounded-full bg-[#4BFFA5]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-[40%] h-96 w-96 rounded-full bg-[#4BFFA5]/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 text-center sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4BFFA5]/20 bg-[#4BFFA5]/[0.06] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4BFFA5]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4BFFA5]">
              My Technical Toolkit
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="text-[#4BFFA5]">Technologies</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            The Technologies, tools, and frameworks I use to build responsive
            websites, develop interactive interfaces, integrate APIs, and
            continue growing as a developer.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300 sm:text-sm">
              <i className="ri-code-s-slash-line mr-2 text-[#4BFFA5]" />
              Frontend Development
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300 sm:text-sm">
              <i className="ri-window-line mr-2 text-[#4BFFA5]" />
              Website Development
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300 sm:text-sm">
              <i className="ri-book-open-line mr-2 text-[#4BFFA5]" />
              Continuous Learning
            </span>
          </div>
        </div>

        {/* Skill categories */}
        <div className="space-y-14 sm:space-y-16">
          {skillGroups.map((group) => (
            <div key={group.title}>
              {/* Category title */}
              <div className="mb-6 flex items-center gap-4 sm:mb-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#4BFFA5]/20 bg-[#4BFFA5]/[0.07] text-2xl text-[#4BFFA5] shadow-[0_0_25px_rgba(75,255,165,0.04)]">
                  <i className={group.icon} aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h2 className="text-lg font-semibold text-white sm:text-2xl">
                      {group.title}
                    </h2>
                    <span className="text-xs font-medium tracking-widest text-[#4BFFA5]/60">
                      {group.number}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-6 text-gray-500 sm:text-sm">
                    {group.description}
                  </p>
                </div>

                <div className="hidden h-px flex-1 bg-gradient-to-r from-white/10 to-transparent md:block" />
              </div>

              {/* Skill cards */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex min-h-[135px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#191919] to-[#111111] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#4BFFA5]/40 hover:shadow-[0_10px_35px_rgba(75,255,165,0.06)] sm:min-h-[155px] sm:p-5"
                  >
                    {/* Hover highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4BFFA5]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex items-start justify-between gap-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] transition-all duration-300 group-hover:border-[#4BFFA5]/20 group-hover:bg-[#4BFFA5]/[0.08] sm:h-12 sm:w-12">
                        <i
                          className={`${skill.icon} text-2xl text-[#4BFFA5] transition-transform duration-300 group-hover:scale-110 sm:text-3xl`}
                          aria-hidden="true"
                        />
                      </div>

                      {skill.level && (
                        <span className="rounded-full border border-[#4BFFA5]/20 bg-[#4BFFA5]/[0.07] px-2 py-1 text-[9px] font-medium text-[#4BFFA5] sm:text-[10px]">
                          {skill.level}
                        </span>
                      )}
                    </div>

                    <div className="relative mt-5">
                      <h3 className="break-words text-sm font-semibold leading-5 text-gray-200 transition-colors duration-300 group-hover:text-[#4BFFA5] sm:text-base">
                        {skill.name}
                      </h3>

                      <div className="mt-3 h-[2px] w-6 rounded-full bg-white/15 transition-all duration-300 group-hover:w-12 group-hover:bg-[#4BFFA5]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning section */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-[#4BFFA5]/20 bg-gradient-to-br from-[#17231D] via-[#121815] to-[#111111] p-6 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[#4BFFA5]/[0.08] blur-[80px]" />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#4BFFA5]/20 bg-[#4BFFA5]/[0.08] sm:h-20 sm:w-20">
              <i className="ri-lightbulb-flash-line text-4xl text-[#4BFFA5] sm:text-5xl" />
            </div>

            <div className="flex-1">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4BFFA5]">
                Growth Mindset
              </p>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Always Learning. Always Improving.
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                I'm continuously strengthening my frontend development skills,
                improving my problem-solving abilities, and exploring backend
                technologies to better understand how complete web applications
                work.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#4BFFA5]/20 bg-black/20 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#4BFFA5]" />
              <span className="text-xs font-medium text-gray-300">
                Growing every day
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
