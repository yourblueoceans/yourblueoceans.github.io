import React from "react";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  children: React.ReactNode;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  children,
}) => {
  const headingId = title && id ? `${id}-title` : undefined;
  const headerAlignment =
    align === "center" ? "text-center items-center" : "text-left";
  const subtitleMaxWidth = align === "center" ? "sm:mx-auto" : "";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="relative bg-slate-950 py-16 text-slate-50 sm:py-20"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 xl:px-0">
        {(eyebrow || title || subtitle) && (
          <header
            className={`flex flex-col gap-3 ${headerAlignment}`}
          >
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="text-2xl font-semibold text-slate-50 sm:text-3xl"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-sm leading-relaxed text-slate-300 sm:text-base sm:max-w-2xl ${subtitleMaxWidth}`}
              >
                {subtitle}
              </p>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

