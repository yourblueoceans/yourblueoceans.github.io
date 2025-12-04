import React from "react";
import { copy } from "../copy";

type HeroProps = {
  onViewProjects?: () => void;
  onDownloadResumeKr?: () => void;
};

const Hero: React.FC<HeroProps> = ({
  onViewProjects,
  onDownloadResumeKr,
}) => {
  const handleViewProjects = () => {
    if (onViewProjects) {
      onViewProjects();
      return;
    }

    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResumeKr = () => {
    if (onDownloadResumeKr) {
      onDownloadResumeKr();
      return;
    }

    window.open("/resume_kr.pdf", "_blank");
  };

  const heroCopy = copy.hero;
  const heroText = heroCopy.ko;
  const headline = heroText.headline;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 sm:px-8 lg:flex-row lg:items-center lg:gap-16 xl:px-0">
        <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-1 text-xs font-medium tracking-wide text-slate-200 sm:self-start">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>{heroCopy.pill}</span>
          </div>

          <div className="space-y-3">
            <h1
              id="hero-title"
              className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl"
            >
              {headline.leading}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                {headline.highlight}
              </span>
              {headline.trailing}
            </h1>
            <p className="text-sm text-slate-300 sm:text-base">
              {heroText.subtitle}
            </p>
          </div>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0">
            {heroText.body}
          </p>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {heroCopy.keywordLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200 sm:text-[13px]"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={handleViewProjects}
              aria-label="프로젝트 섹션으로 이동"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-900/40 transition hover:translate-y-px hover:shadow-md hover:shadow-violet-900/30"
            >
              프로젝트 보기
            </button>
            <button
              type="button"
              onClick={handleDownloadResumeKr}
              aria-label="국문 이력서 다운로드"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-400 hover:bg-slate-800/80"
            >
              이력서 다운로드 (KR)
            </button>
            <span className="text-center text-xs text-slate-400 sm:text-left sm:text-[13px]">
              {heroCopy.ctaNote}
            </span>
          </div>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-violet-500/60 via-indigo-500/40 to-sky-500/40 blur-xl opacity-70" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-4 rounded-3xl surface-glass p-6 shadow-brand-glow">
              <div className="h-32 w-32 overflow-hidden rounded-2xl border border-slate-600/80 bg-slate-800/80">
                <img src="/profile.jpg" alt="서상원 증명사진" className="h-full w-full object-cover" />
              </div>

              <div className="space-y-1 text-center">
                <p className="text-sm font-semibold text-slate-50">서상원 Sangwon Seo</p>
                <p className="text-xs text-slate-300">Cloud Security &amp; Information Protection</p>
              </div>

              <div className="grid w-full gap-2 text-xs text-slate-200">
                {heroCopy.profileFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between rounded-2xl bg-slate-800/80 px-3 py-2"
                  >
                    <span className="text-slate-400">{fact.label}</span>
                    <span className="text-right font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-1 text-center text-[11px] text-slate-400">
                현재: 웹 취약점 진단 · 네트워크 보안 · 클라우드 보안 실습에 집중하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

