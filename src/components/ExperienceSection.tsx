import React from "react";
import { motion } from "framer-motion";
import { cardClass, captionText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

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
    <motion.section id="experience" className={sectionClass} {...sectionMotion}>
      <div className={`${innerClass} md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12`}>
        <div>
          <p className={overline}>EXPERIENCE</p>
          <h2 className={heading2}>경험과 학습 경로</h2>
          <p className="section-lead mt-3">보안 지식뿐 아니라 현장 운영·고객 경험·해외 생활로 쌓은 역량을 함께 가져가고자 합니다.</p>
          <ol className="mt-8 space-y-6 border-l border-slate-200 pl-6">
            {experience.map((item) => (
              <li key={item.title} className="relative space-y-2">
                <span className="absolute -left-[13px] mt-1 h-3 w-3 rounded-full bg-sky-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">{item.period}</p>
                <p className="text-[1.05rem] font-semibold text-[var(--color-text-strong)] md:text-lg">{item.title}</p>
                <p className="text-[var(--fs-body)] text-[var(--color-text)]">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 space-y-6 md:mt-0">
          <div className="space-y-3">
            <p className={overline}>CERTIFICATIONS</p>
            <h3 className="text-[var(--fs-card-title)] font-semibold text-[var(--color-text-strong)]">자격증 &amp; 배지</h3>
            <div className="flex flex-wrap gap-2 text-sm text-[var(--color-text)]">
              {certs.map((cert) => (
                <span key={cert} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className={overline}>HIGHLIGHT</p>
            <div className={cardClass}>
              <p className="text-[var(--fs-body-lg)] font-semibold text-[var(--color-text-strong)]">2025 캡스톤 디자인 대회 2위 – Lockument</p>
              <p className={`${captionText} mt-2`}>PII 정보 마스킹 및 암호화 클라우드 웹서비스로 “실제 기업 솔루션 같다”는 평가를 받았습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

