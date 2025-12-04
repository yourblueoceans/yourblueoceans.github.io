export const sectionClass = "section section-light";

export const innerClass = "section-shell";

export const heading2 = "section-title";

export const bodyText = "section-body";

export const captionText = "section-caption";

export const overline = "section-kicker";

export const heroTitle = "hero-title";

export const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-sky-200 to-violet-200";

export const cardClass = "card-shell";

export const pillClass = "pill-chip";

export const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

