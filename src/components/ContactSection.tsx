import React from "react";

const ContactSection: React.FC = () => {
  const handleEmail = () => {
    window.location.href = "mailto:bluetrees88@gmail.com?subject=Contact%20from%20portfolio";
  };

  return (
    <section id="contact" className="bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-violet-300">CONTACT</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            웹 취약점 진단·클라우드 보안 PoC에 대해 이야기 나누고 싶으시다면
          </h2>
          <p className="text-sm text-slate-400">
            인턴·주니어 포지션, 프로젝트 협업, 보안 컨설팅/영업 관련 논의 등 언제든지 편하게 연락 주시면 감사하겠습니다.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-violet-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              이메일 보내기
            </button>
            <a
              href="https://github.com/yourblueoceans"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 px-6 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-800/90"
            >
              GitHub 보기
            </a>
          </div>
          <p className="pt-4 text-[11px] text-slate-500">© {new Date().getFullYear()} Sangwon Seo. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

