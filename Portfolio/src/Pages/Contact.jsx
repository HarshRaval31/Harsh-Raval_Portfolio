
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current || status === "sending") return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_7vtggsj",
        "template_bqqcsd9",
        form.current,
        {
          publicKey: "2_GKYCQRU82MskyFy",
        }
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const contactDetails = [
    {
      icon: "ri-map-pin-2-line",
      label: "Location",
      value: "Rajkot, Gujarat, India",
    },
    {
      icon: "ri-mail-line",
      label: "Email Address",
      value: "ravalharsh3103@gmail.com",
      href: "mailto:ravalharsh3103@gmail.com",
    },
    {
      icon: "ri-phone-line",
      label: "Phone Number",
      value: "9662087774",
      href: "tel:+919662087774",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#0C0C0C] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#4BFFA5]/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#4BFFA5]/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4BFFA5]/20 bg-[#4BFFA5]/[0.06] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4BFFA5]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4BFFA5]">
              Let's Connect
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get in <span className="text-[#4BFFA5]">Touch</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Have a project in mind or an opportunity to discuss? I'd love to
            hear from you. Send me a message and let's connect.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#4BFFA5]" />
        </div>

        {/* Main contact layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact information */}
          <div className="flex flex-col rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#191919] to-[#111111] p-6 sm:p-8 lg:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4BFFA5]">
              Contact Information
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
              Let's build something
              <span className="text-[#4BFFA5]"> great together.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              I'm a Frontend Developer interested in building responsive,
              user-friendly web experiences. Feel free to reach out about
              projects, collaborations, or job opportunities.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => {
                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#4BFFA5]/20 bg-[#4BFFA5]/[0.07] text-xl text-[#4BFFA5] transition-colors group-hover:bg-[#4BFFA5]/[0.14]">
                      <i className={item.icon} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-medium text-gray-200 transition-colors group-hover:text-[#4BFFA5] sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-black/20 p-4 transition-all hover:border-[#4BFFA5]/25 hover:bg-white/[0.03]"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-black/20 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-[#4BFFA5]/15 bg-[#4BFFA5]/[0.04] p-5">
              <div className="flex items-center gap-3">
                <i className="ri-briefcase-4-line text-2xl text-[#4BFFA5]" />
                <h3 className="font-semibold text-white">
                  Open to opportunities
                </h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Interested in frontend development roles and opportunities to
                contribute to meaningful web projects.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-auto pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/harsh-raval-a9b6b5444/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-gray-300 transition-all hover:border-[#4BFFA5]/40 hover:text-[#4BFFA5]"
                >
                  <i className="ri-linkedin-fill" />
                </a>

                <a
                  href="https://github.com/HarshRaval31"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-gray-300 transition-all hover:border-[#4BFFA5]/40 hover:text-[#4BFFA5]"
                >
                  <i className="ri-github-fill" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#141414] p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Send me a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill in the details below and I'll receive your message by
                email.
              </p>
            </div>

            <form
              id="contactForm"
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Full Name <span className="text-[#4BFFA5]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-[#0C0C0C] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#4BFFA5]/60 focus:ring-2 focus:ring-[#4BFFA5]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email Address <span className="text-[#4BFFA5]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0C0C0C] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#4BFFA5]/60 focus:ring-2 focus:ring-[#4BFFA5]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject <span className="text-[#4BFFA5]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-white/10 bg-[#0C0C0C] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#4BFFA5]/60 focus:ring-2 focus:ring-[#4BFFA5]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Contact Number <span className="text-[#4BFFA5]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phonenumber"
                  autoComplete="tel"
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-white/10 bg-[#0C0C0C] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#4BFFA5]/60 focus:ring-2 focus:ring-[#4BFFA5]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message <span className="text-[#4BFFA5]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a little about your project or opportunity..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#0C0C0C] px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#4BFFA5]/60 focus:ring-2 focus:ring-[#4BFFA5]/10"
                />
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-[#4BFFA5]/20 bg-[#4BFFA5]/[0.07] p-4 text-sm text-[#4BFFA5]"
                >
                  <i className="ri-checkbox-circle-line mr-2" />
                  Message sent successfully! Thank you for reaching out.
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/[0.06] p-4 text-sm text-red-400"
                >
                  <i className="ri-error-warning-line mr-2" />
                  Your message could not be sent. Please try again or email me
                  directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#4BFFA5] px-6 py-4 font-semibold text-[#0C0C0C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_30px_rgba(75,255,165,0.12)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-lg" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="ri-send-plane-fill text-lg" />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-gray-600">
                Your details will be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-600 sm:text-sm">
            Thanks for visiting my portfolio. I look forward to connecting
            with you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
