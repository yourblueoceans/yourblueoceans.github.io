import React from "react";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "default" | "panel" | "subtle";
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  variant = "default",
  className = "",
  contentClassName = "",
  children,
}) => {
  const headingId = title && id ? `${id}-title` : undefined;
  const headerAlignment =
    align === "center" ? "text-center items-center" : "text-left";
  const subtitleMaxWidth = align === "center" ? "sm:mx-auto" : "";

  const variantSurface: Record<NonNullable<typeof variant>, string> = {
    default: "",
    panel:
      "rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-8 sm:px-10 sm:py-10",
    subtle:
      "rounded-3xl border border-white/10 bg-white/[0.01] px-6 py-8 sm:px-8 sm:py-10",
  };

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative border-t border-white/5 py-16 text-slate-50 first:border-t-0 sm:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div
          className={`flex flex-col gap-10 ${variantSurface[variant]} ${contentClassName}`}
        >
          {(eyebrow || title || subtitle) && (
            <header className={`flex flex-col gap-3 ${headerAlignment}`}>
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2
                  id={headingId}
                  className="text-3xl font-semibold text-white sm:text-4xl"
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p
                  className={`max-w-3xl text-base leading-relaxed text-slate-300 ${subtitleMaxWidth}`}
                >
                  {subtitle}
                </p>
              )}
            </header>
          )}

          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;

