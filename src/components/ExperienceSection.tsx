import React from "react";
import { motion } from "framer-motion";
import { bodyText, cardClass, captionText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const experience = [
  {
    period: "2024 – 현재",
    title: "한국폴리텍대학 대전캠퍼스 – 클라우드보안과 (하이테크)",
    desc: "SecureDoc Cloud, Drop the Port, 웹 취약점 분석 프로젝트를 수행하며 Web VAPT · 클라우드 보안 · 인프라 보안 실습을 진행하고 있습니다.",
  },
  {
    period: "2023.02 – 2023.09",
    title: "대한항공 근무 (지상직)",
    desc: "공항 현장 운영, 고객 응대, 비정상 상황 대응 시 여러 부서와 협업하며 커뮤니케이션과 위기 대응 경험을 쌓았습니다.",
  },
  {
    period: "2020.12 – 2021.09",
    title: "Computer Ahnex",
    desc: "컴퓨터 판매·수리점에서 장비 상담, 수리, 매장 운영을 담당하며 고객 응대와 문제 해결 경험을 축적했습니다.",
  },
  {
    period: "2024.01 – 2025.10",
    title: "스마트스토어 운영",
    desc: "중국 구매대행 스마트스토어를 운영하며 상품 소싱, 주문·배송 관리, CS 대응 등 온라인 비즈니스 전반을 경험했습니다.",
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
          <p className={`${bodyText} mt-3 max-w-3xl text-[0.98rem] md:text-base lg:text-[1.05rem]`}>보안 지식뿐 아니라 운영, 영업, 고객 경험을 결합해 컨설팅 역량을 확장하고 있습니다.</p>
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
            <p className="text-[var(--fs-body-lg)] font-semibold text-[var(--color-text-strong)]">2025 SecureDoc Cloud 캡스톤 금상</p>
            <p className={`${captionText} mt-2`}>PII 탐지·마스킹과 AES-GCM 암호화를 결합한 SecureDoc Cloud PoC로 “실제 기업 솔루션 같다”는 평가를 받았습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

