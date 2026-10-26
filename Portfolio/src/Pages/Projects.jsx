import React, { useState } from "react";
import Video1 from "../assets/Game.mp4";
import Video2 from "../assets/Time.mp4";
import Video3 from "../assets/Weather.mp4";
import AdminPanel from "../assets/AdminPanel.png";
import SouledStore from "../assets/SouledStore.png";
import Flipkart from "../assets/Website-2.png";
import Addina from "../assets/Website-3.png";
import Firstcry from "../assets/Firstcry.png";

import Webpage1 from "../assets/Webpage-1.png";
import Webpage2 from "../assets/Webpage-2.png";
import Webpage3 from "../assets/Webpage-3.png";
import Webpage4 from "../assets/Webpage-4.png";
import Webpage5 from "../assets/Webpage-5.png";
import Webpage6 from "../assets/Webpage-6.png";
import Webpage7 from "../assets/Webpage-7.png";
import Webpage8 from "../assets/Webpage-8.png";
import Webpage9 from "../assets/Webpage-9.png";
import Webpage10 from "../assets/Webpage-10.png";
import Webpage11 from "../assets/Webpage-11.png";
import "../JS/Follow.js";

const websiteProjects = [
  {
    title: "The Souled Store",
    image: SouledStore,
    github:
      "https://github.com/HarshRaval31/Website-JioMart/tree/main/JioMart-master",
    live: "https://earnest-salmiakki-cb0d0e.netlify.app/",
    description:
      "Project is a clone of The Souled Store built using HTML5, CSS3, Tailwind CSS, and JavaScript. fully responsive I implemented several features, including:",
    features: [
      "Category Selection: Men, Women, and Kids clothing",
      "Product Filtering: Top wear, bottom wear, etc.",
      "Sorting Feature: Low to high price selection",
      "CRUD Operations: Create, Read, Update, and Delete functionalities",
      "Payment Method Integration",
      "This project successfully replicates the UI and functionality of The Souled Store, providing a smooth shopping experience with various product categories and filtering options."
    ],
  },
  {
    title: "Flipkart",
    image: Flipkart,
    github:
      "https://github.com/HarshRaval31/Webpages/tree/main/JS%20-%20Website%20-%20Flipkart%20-%20Project",
    live: "https://stellar-semifreddo-0f349c.netlify.app/",
    description:
      "An e-commerce website inspired by Flipkart, built with HTML, CSS, Tailwind CSS, and JavaScript.",
    features: [
      "Product browsing and details",
      "Add-to-cart functionality",
      "Cart management",
      "CRUD operations for cart items",
    ],
  },
  {
    title: "Admin Panel",
    image: AdminPanel,
    github:
      "https://github.com/HarshRaval31/Webpages/tree/main/admin%20panel",
    live: "https://gilded-syrniki-3d4b78.netlify.app/",
    description:
      "A responsive admin dashboard built with HTML, CSS, media queries, and jQuery.",
    features: [
      "Animated counters",
      "Interactive charts",
      "Maps and calendar",
      "Responsive dashboard layout",
    ],
  },
  {
    title: "Addina",
    image: Addina,
    github:
      "https://github.com/HarshRaval31/Webpages/tree/main/BOOTSTRAP-PROJECT-COMMERCE-WEBSITE",
    live: "https://silver-kangaroo-28d22e.netlify.app/",
    description:
      "A responsive furniture-store website created with HTML, CSS, and Bootstrap.",
    features: [
      "Furniture product showcase",
      "Responsive Bootstrap layout",
      "Image slider",
      "FAQs and navigation features",
    ],
  },
  {
    title: "FirstCry",
    image: Firstcry,
    github:
      "https://github.com/HarshRaval31/Website-FirstCry/tree/main/WEBSITE_JS",
    live: "https://elegant-parfait-a609f3.netlify.app/",
    description:
      "A kids' shopping website built with HTML, CSS, and JavaScript.",
    features: [
      "Kids' products and clothing categories",
      "Product filtering and sorting",
      "Shopping interface",
      "Responsive page layout",
    ],
  },
];

const webpageProjects = [
  {
    image: Webpage1,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://steady-raindrop-034bda.netlify.app/",
  },
  {
    image:
      Webpage2,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://elegant-vacherin-999ff8.netlify.app/",
  },
  {
    image:
      Webpage3,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://dreamy-banoffee-9ca860.netlify.app/",
  },
  {
    image:
      Webpage4,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://moonlit-torte-62f74f.netlify.app/",
  },
  {
    image:
      Webpage5,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://preeminent-halva-97bea8.netlify.app/",
  },
  {
    image:
      Webpage6,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://jocular-parfait-c41b74.netlify.app/",
  },
  {
    image:
      Webpage7,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://lustrous-flan-1e9f72.netlify.app/",
  },
  {
    image:
      Webpage8,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://mellow-yeot-29e936.netlify.app/",
  },
  {
    image:
      Webpage9,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://spectacular-lebkuchen-eacb1d.netlify.app/",
  },
  {
    image:
      Webpage10,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://spectacular-gecko-009261.netlify.app/",
  },
  {
    image:
      Webpage11,
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://velvety-sorbet-53b145.netlify.app/",
  },
  {
    image:
      "https://media-hosting.imagekit.io//3a8cf73d64a54776/screencapture-lovely-monstera-5a589a-netlify-app-2025-03-12-13_24_07.png?Expires=1836374646&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sFZcMrSL3lXw6nH1Fqbd0xhOjuebpqj1vu6y47ckdMHqKVxU~B~-K9KTh6m8cYbTRsifqhN2AWjL2jAEjExVzr2dwI1v6Pu3k~Ldvzz6-nQ9q3cIyCnv0seozzmtbTr~fxkdocOemYLHPNxhMGMWps19cHPs~HVyaSy~JV4Mr-IDQPiYddCRRNU54MREFeeGilQBUukNjLtosj1qpzG0-0xTX6r8tb5lQa~r9ec-MTTfeWJNjM03iSmEtk5CxhqUEcbi1iRJyUQ8j02Enf-RNBLmiiJgQ14KY3oeBbiETc4qu~-t52IWvoiDQvOTeKnhXBslAxieghfQWgzop5GWZA__",
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://chic-faun-626d72.netlify.app/",
  },
  {
    image:
      "https://media-hosting.imagekit.io//5df9365c11364446/Webpage-13.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1DX2glZE0qpiDIpRBTQQDur4XusR4PH9T7FRhfju8ZTw5H8KSn5gXT7CzvjT~Osz4iTNgbFywe-RTlcsnIZ43piQ0sQkmXeidFkYNhOF7lGeNh8BZLvbF5CH9F4i24uiDcR3IaGMI3BPl~~7dQ5-vmhuz~doVc6t7AovQpUk--hHMBoAEJOdAq06B50GdjppTQx0EdyN2fXHJq068YEsHRFwG1QfYGyh1rw8rcXJRdDsZtVtzIOK4TLXgxYGapGS7eWKDCt9igXFWKm8KTHhgGZ0w2mi3xJyaMBPJuY0mrMy5pucJ66gwqJHxzokf6g8wwQ8QmuHsRFQKHLp1ClGPw__",
    github: "https://github.com/HarshRaval31/Webpages/tree/main",
    live: "https://6798dc1fb868423aacc68762--helpful-jalebi-347687.netlify.app/",
  },
  {
    image:
      "https://media-hosting.imagekit.io//ef73140d09a04bd1/screencapture-file-F-WEB-PAGES-web-7-square-html-2025-03-13-15_53_14.png?Expires=1836469719&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=V59dai2Hor2EfFNDsg4P4MPL85c9d-WAqe~QVNaRar~c5j28O0R0WgX1MX9Rw7sPdr93B3O7wBmHsxBdD33rQkFaGZNhnbsqmfxubKDS-FmFIpD28OeSFgiax0mk6PZKz~qI7Mu~xnBIqKfYmJGr~U204Sm7V9119JmGkCKm4p0JLDMKZ~WjP5zninRwVomaBeslhKRAVFtVyWx0J9c~aih0Vp16EaiHgggNKA-5p6zKRNci6HRJN2D~xtDEokSqEGP5ZlI~~aX-lvpEaGSzGyGLbZ05i67sxuKePGbp8238lFTm4-H1KsaixL7gn042u4Td~eDNUPH1ZC7CeJ9mLg__",
    github: "https://github.com/HarshRaval31/Webpages/tree/main/web%207",
    live: "https://jocular-elf-fd9cd4.netlify.app/",
  },
  {
    image:
      "https://media-hosting.imagekit.io//c5fe839fba9e414f/screencapture-file-F-SUBMIT-web-pages-web-5-Construction-html-2025-03-13-15_56_01.png?Expires=1836469751&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oFuqx3FDmay10bhlpPwAhFMCDs0i4G4iu1opFZyVCX5FSTcXCXC8XQNWgE5FpMpOg4pwG-bqPk86W5VLX~dYs8TLtlHSuzwPZzlfTcqAWqy4Idj7HY7HexxB~F9bDQH4BPQt62zqJj6Pf0cyvMqyy~P94-8q47kIlQ-VOtHGZCehAadRekZR3PZgiB44rwTAKd~q6XK6zR0ET1S2uBjcl8JNM89NpT-VlnZ5iQZ-aQq00OnPNRQPvWSMsxyEF7xmcgbs78ZORF8SVG1BRZy92t71iKg6LRxQljyBpGzMDtDBeeiiH1d4Razv9PrbYi-RN~vW4Nuluc8dNkJcsF2LHQ__",
    github: "https://github.com/HarshRaval31/Webpages/tree/main/web%205",
    live: "https://jocular-elf-fd9cd4.netlify.app/",
  },
  {
    image:
      "https://media-hosting.imagekit.io//325fc1d2679d44da/screencapture-file-F-harsh-development-Webpages-web-4-foodfun-html-2025-03-13-15_54_42%20(1).jpg?Expires=1836469829&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j6DBBBbuILaVqeBWvsndnt9Ix8N1mkUbN~XenwjDZ3K~rdhq06S1v4fpgN7jfhYGuzEeuKP7mj6rQ5VLgO698uqpDtTAOLR3aykETUqStvMTkjNzBQ4LIgqizcXdkdfS~YcUceR6EeFyLKzmp2J8ZlIu2JUzG2q3LCuZE322iJcQS0P8fbwSu-t7xza5347ZzdU3CnUBPHVMj4XM5RubTWVvtXFDbyHUddj9APSTcGeIjRihCbJRZDqOYGC4TldMZjg5kQ4tKHAfzHhXDX-UiBVmEmKbC5UyCwrKDEBIHlABXK2uqINk1VRC9SBAhznDwlsSpVpeoAfB7tMMuaGnUQ__",
    github: "https://github.com/HarshRaval31/Webpages/tree/main/web%204",
    live: "https://jocular-elf-fd9cd4.netlify.app/",
  },
  {
    image:
      "https://media-hosting.imagekit.io//fd9f277f4dec47b4/screencapture-file-F-SUBMIT-web-pages-web-6-Hotel-html-2025-03-13-15_57_24.png?Expires=1836469760&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Gybx3Zo8sVL-pSWDWRX-hMwbcLZQFZYTlfl6X~DI9VfReteZwd4SW4c5-c~lytwPfE7~Rz4CA3YCxvOM-fCemtiGBpQ4B48gM0qoDrVKzUfrPerppbL0he7h2Cl~c~3qSM6p661BbxSLiwwbHDNOIl13SVinyVcx1BeL9gYZlhcQW~3AdsIxl02TDiHjAQf~xVBOoa6BdUvZEF7WkYEvZ1A8GeAp4UHE-0ofq8o4BuJQGmUYNdIzzuhrZ90fPN~~mbBJGdTahsZ2wwTSMxwHbnCURiW4b70td17lfOJE7WY8JQIkgwRCJl2fX~ecouKMVFbesAlUYVDfB0TciW5xHQ__",
    github: "https://github.com/HarshRaval31/Webpages/tree/main/web%206",
    live: "https://jocular-elf-fd9cd4.netlify.app/",
  },
  {
    image:
      "https://media-hosting.imagekit.io//5bee0dc17f14417a/screencapture-file-F-SUBMIT-web-pages-web-9-knights-html-2025-03-13-15_56_32.png?Expires=1836469875&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bbESKXN9SZxCZt9GoSI0zMpsDbagXndr0LFsZj7DWpMJTdaZuknW6DS8wYP67J9pSm-KLcq2TLneAue0jaaSb8djiXOn536XFwM7JP9CZgW3MY0z7oC8m3rAxLDYW2M0JIJIHpHNHKxH98XQzxvPG7ou7t0TlnyA4w83hruTQF5mIH3z4c7ogMrpVi~TV-jFcPTWSwQCvwAIdObc43XJ-LuC6lISoaJAMlpv6WnAz1RlEH2U3-97rTCF7I7V5hY2s2DabNa8SM7jLuATmW25uSpw4r57M3qYmcyXERDdVefccPWb8Li9b8eViN3OEbku27dBrdjg0H1U9U0BwgHH7Q__",
    github: "https://github.com/HarshRaval31/Webpages/tree/main/web%209ko",
    live: "https://jocular-elf-fd9cd4.netlify.app/",
  },
  {
    image:
      "https://media-hosting.imagekit.io//ae408e1e728145d6/screencapture-file-F-harsh-development-Webpages-web-8-Hotel-html-2025-03-13-16_10_13.png?Expires=1836470469&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j4XbFzp71Q-9NDI5Pr4Sr~4A27UsSZ2ald09qP88jax1qdXZa0dPS4ntuliHXVvJzZ3DRlJgNsb0Dn-bpPcVQ7OuO8pUJQ~EW88aIByd~EqY-i0weAusghbkBK69fxz4VaoY~w5zISwItgz-qgUZJBSQ3XTQxkwrfpUKN~BosDIJdEGLqj33kB73Cg~EzO6q~YBsh15F~YC0izjLNRmZ1raY4x0fu1WBwkHraeqxwItS3YcpcDoRzrMGb4cc-5Mbq9hTeaogXqCBeEsdiQrpdteI8iiTfu4seSLyNwC72Cwqu1MbY-sp8F0g6XUhSSgiBJEHFIwRRkg1zDS3sgIDRA__",
    github: "https://github.com/HarshRaval31/Webpages/tree/main/web%208",
    live: "https://jocular-elf-fd9cd4.netlify.app/",
  },
];

function Screenshot({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 rounded-xl bg-[#191919] p-5 text-center">
        <span className="text-3xl text-[#4BFFA5]">!</span>
        <p className="text-sm font-semibold text-white">
          Screenshot unavailable
        </p>
        <p className="max-w-xs text-xs leading-5 text-gray-500">
          This image URL may have expired. The project links are still available.
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full rounded-xl object-cover object-top"
    />

  );
}

function ProjectLinks({ github, live }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source code on GitHub"
        className="inline-flex items-center gap-2 rounded-lg border border-[#4BFFA5]/50 px-4 py-2 text-sm font-semibold text-[#4BFFA5] transition-colors hover:bg-[#4BFFA5] hover:text-black"
      >
        <i className="ri-github-fill text-lg" />
        GitHub
      </a>

      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open live project"
        className="inline-flex items-center gap-2 rounded-lg bg-[#4BFFA5] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white"
      >
        <i className="ri-global-line text-lg" />
        Live Demo
      </a>
    </div>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState("websites");

  const tabs = [
    { id: "websites", label: "Websites" },
    { id: "webpages", label: "Webpages" },
    { id: "projects", label: "Other Projects" },
  ];

  const videoProjects = [
    {
      title: "Game Project",
      video: Video1,
      github: "https://github.com/HarshRaval31/Webpages/tree/main",
      live: "https://luxury-gumption-36fa46.netlify.app/",
    },
    {
      title: "Time Project",
      video: Video2,
      github: "https://github.com/HarshRaval31/Webpages/tree/main",
      live: "https://cool-tarsier-049cc3.netlify.app/",
    },
    {
      title: "Weather Project",
      video: Video3,
      github: "https://github.com/HarshRaval31/Webpages/tree/main",
      live: "https://verdant-fenglisu-5bd920.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#0C0C0C] px-4 pb-20 pt-10 text-white sm:px-6 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* Hero */}
        <div className="relative flex min-h-[240px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#4BFFA5]/20 bg-gradient-to-br from-[#202020] to-[#111111] px-5 py-12 text-center sm:min-h-[290px] lg:min-h-[340px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,255,165,0.09),transparent_65%)]" />

          <p className="relative mb-4 text-xs uppercase tracking-[0.35em] text-gray-400 sm:text-sm">
            My work and creations
          </p>

          <h1 className="relative text-5xl font-bold tracking-tight text-[#4BFFA5] sm:text-6xl lg:text-7xl">
            Projects<span className="text-white">.</span>
          </h1>

          <p className="relative mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of websites, webpage designs, and interactive projects
            built using frontend technologies.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-8 flex w-full justify-center">
          <div className="flex flex-wrap justify-center gap-2 rounded-xl border border-white/10 bg-[#151515] p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                aria-pressed={activeCategory === tab.id}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${activeCategory === tab.id
                  ? "bg-[#4BFFA5] text-[#0C0C0C] shadow-[0_0_20px_rgba(75,255,165,0.15)]"
                  : "text-gray-400 hover:bg-white/5 hover:text-[#4BFFA5]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Websites */}
        {activeCategory === "websites" && (
          <div className="mt-10 w-full">
            <SectionHeading>Websites</SectionHeading>

            <div className="mt-7 flex flex-col gap-6">
              {websiteProjects.map((project, index) => (
                <article
                  key={project.title}
                  className="grid min-w-0 grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-[#121212] p-4 transition-all duration-300 hover:border-[#4BFFA5]/50 sm:p-6 lg:gap-8 lg:p-8 xl:grid-cols-2"
                >
                  <div
                    className={`flex h-[280px] min-w-0 items-start justify-center overflow-hidden rounded-xl border border-white/10 bg-[#191919] sm:h-[360px] lg:h-[440px] ${project.title === "Admin Panel"
                      ? "lg:w-[100%] lg:mx-auto"
                      : "w-full"
                      } ${index % 2 === 1 ? "xl:order-2" : ""}`}
                  >
                    <Screenshot
                      src={project.image}
                      alt={`${project.title} website screenshot`}
                    />
                  </div>

                  <div className="flex min-w-0 flex-col justify-center py-2">
                    <h2 className="text-xl font-semibold text-white sm:text-2xl">
                      <span className="mr-2 text-[#4BFFA5]">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {project.title}
                    </h2>

                    <div className="mb-5 mt-4 h-px w-16 bg-[#4BFFA5]" />

                    <p className="text-sm leading-7 text-gray-400 sm:text-base">
                      {project.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                        >
                          <i className="ri-arrow-right-s-line mt-0.5 text-xl text-[#4BFFA5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7">
                      <ProjectLinks
                        github={project.github}
                        live={project.live}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Webpages */}
        {activeCategory === "webpages" && (
          <div className="mt-10 w-full">
            <SectionHeading>Webpages</SectionHeading>

            <div className="mt-7 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {webpageProjects.map((project, index) => (
                <article
                  key={project.live + index}
                  className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#4BFFA5]/60 hover:shadow-[0_8px_30px_rgba(75,255,165,0.08)] sm:p-4"
                >
                  <div className="h-[300px] overflow-hidden rounded-xl bg-[#191919] sm:h-[340px]">
                    <Screenshot
                      src={project.image}
                      alt={`Webpage project ${index + 1} screenshot`}
                    />
                  </div>

                  <div className="mt-4 flex justify-center">
                    <ProjectLinks
                      github={project.github}
                      live={project.live}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Other projects */}
        {activeCategory === "projects" && (
          <div className="mt-10 w-full">
            <SectionHeading>Other Projects</SectionHeading>

            <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {videoProjects.map((project) => (
                <article
                  key={project.title}
                  className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-4 transition-all duration-300 hover:border-[#4BFFA5]/50 sm:p-5"
                >
                  <h2 className="mb-4 text-lg font-semibold text-white sm:text-xl">
                    <span className="mr-2 text-[#4BFFA5]">/</span>
                    {project.title}
                  </h2>

                  <video
                    src={project.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full rounded-xl bg-black object-contain"
                  >
                    Your browser does not support video playback.
                  </video>

                  <div className="mt-5">
                    <ProjectLinks
                      github={project.github}
                      live={project.live}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Back to top */}
        <a
          href="#projects"
          aria-label="Back to projects heading"
          className="fixed bottom-6 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#4BFFA5]/30 bg-[#151515]/90 text-2xl text-[#4BFFA5] shadow-lg transition hover:bg-[#4BFFA5] hover:text-black sm:bottom-8 sm:right-8"
        >
          <i className="ri-arrow-up-line" />
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="flex justify-center">
      <h2 className="text-center text-2xl font-semibold text-[#4BFFA5] underline decoration-white decoration-2 underline-offset-8 sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

export default Projects;