import React from "react";

const experience = [
  {
    period: "2024 – 현재",
    title: "한국폴리텍대학 대전캠퍼스 · 클라우드보안과 (하이테크)",
    desc: "Lockument 캡스톤(PII 마스킹 & 암호화 웹서비스), 웹 취약점 진단, 네트워크 인프라 구축 등 보안 실습 프로젝트 수행.",
  },
  {
    period: "이전",
    title: "대한항공 근무 (지상직)",
    desc: "공항 현장 운영, 고객 응대, 비정상 상황 대응 및 여러 부서와의 협업을 통해 커뮤니케이션·조정 역량을 쌓음.",
  },
  {
    period: "이전",
    title: "미국 거주 경험",
    desc: "다양한 문화·환경 속에서 생활하며 커뮤니케이션, 회화, 글로벌 환경에 대한 감각을 익힘.",
  },
];

const certs = [
  "정보보안기사",
  "CISCO CCST",
  "정보처리기사(필기 합격)",
  "네트워크관리사 2급",
  "기타 보유 자격 (한국사, 컴활 등)",
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
          {/* LEFT: Experience Timeline */}
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-violet-300">EXPERIENCE</p>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">경험과 학습 경로</h2>
              <p className="max-w-xl text-sm text-slate-400">
                보안 지식뿐 아니라, 현장 운영·고객 경험·해외 생활을 통해 쌓은 역량을 함께 가져가고자 합니다.
              </p>
            </div>
            <ol className="space-y-4 border-l border-slate-800 pl-4">
              {experience.map((item) => (
                <li key={item.title} className="relative space-y-1">
                  <span className="absolute -left-2.5 mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{item.period}</p>
                  <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                  <p className="text-[13px] text-slate-300">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* RIGHT: Certs & Awards */}
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-violet-300">CERTIFICATIONS</p>
              <h3 className="text-lg font-semibold text-slate-50">자격증</h3>
              <p className="text-sm text-slate-400">보안·네트워크·IT 인프라 기반을 다지기 위해 준비하거나 취득한 자격들입니다.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {certs.map((cert) => (
                <span key={cert} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
                  {cert}
                </span>
              ))}
            </div>
            <div className="space-y-2 pt-4">
              <p className="text-xs font-semibold tracking-[0.25em] text-violet-300">HIGHLIGHTS</p>
              <div className="rounded-3xl bg-gradient-to-r from-violet-500/40 via-indigo-500/30 to-transparent p-[1px] shadow-[0_20px_60px_rgba(88,28,135,0.35)]">
                <div className="rounded-[inherit] border border-slate-800 bg-slate-900/80 p-4 text-[13px] text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-50">2025 캡스톤 디자인 대회 2위 – Lockument</span>
                    <br />
                    PII 정보 마스킹 및 암호화 클라우드 웹서비스로, 심사위원들로부터 “실제 기업 솔루션 같다”는 평가를 받았습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

