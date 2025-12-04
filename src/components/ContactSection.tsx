import React from "react";
import { SECTION_CONTAINER, EYEBROW_TEXT } from "../constants/layout";

const ContactSection: React.FC = () => {
  const handleEmail = () => {
    window.location.href = "mailto:bluetrees88@gmail.com?subject=Contact%20from%20portfolio";
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),transparent_60%)]" />
      <div className={`${SECTION_CONTAINER} relative max-w-4xl py-24 sm:py-28 lg:py-32`}>
        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 px-8 py-12 text-center shadow-[0_35px_120px_rgba(15,23,42,0.8)]">
          <p className={EYEBROW_TEXT}>CONTACT</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-50 sm:text-3xl">
            웹 취약점 진단·클라우드 보안 PoC에 대해 이야기 나누고 싶으시다면
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            인턴·주니어 포지션, 프로젝트 협업, 보안 컨설팅/영업 관련 논의 등 언제든지 편하게 연락 주세요.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(76,29,149,0.55)] transition hover:from-violet-400 hover:to-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            >
              이메일 보내기
            </button>
            <a
              href="https://github.com/yourblueoceans"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              GitHub 보기
            </a>
          </div>
          <p className="mt-8 text-[11px] text-slate-500">© {new Date().getFullYear()} Sangwon Seo. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

