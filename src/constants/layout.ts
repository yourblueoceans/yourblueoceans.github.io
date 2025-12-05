export const SECTION_CONTAINER = "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10";

export const SECTION_SPACING = "relative border-b border-slate-800/60 bg-slate-950";

export const CARD_SURFACE =
  "rounded-3xl border border-slate-700/60 bg-slate-900/80 shadow-[0_18px_60px_rgba(15,23,42,0.7)] backdrop-blur";

export const CARD_HOVER =
  "transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-[0_28px_80px_rgba(15,23,42,0.9)]";

export const EYEBROW_TEXT =
  "text-xs font-semibold tracking-[0.25em] text-violet-300 uppercase text-[0.6rem]";

export const SECTION_MOTION = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

