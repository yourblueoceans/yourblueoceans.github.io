import React from "react";
import { motion } from "framer-motion";
import { cardClass, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const highlightBlocks = [
  {
    title: "Problem",
    body: "민감정보가 포함된 내부 문서를 테스트/운영 환경에서 안전하게 다루고, 클라우드에 암호화된 형태로 저장해야 한다는 요구.",
  },
  {
    title: "Approach",
    body: "문서 업로드 → PII 탐지·마스킹 → AES-GCM 암복호화 → AWS KMS 기반 키 관리 전체 플로우를 설계하고 PoC 구현.",
  },
  {
    title: "Outcome",
    body: "20+ 문서 포맷 자동 마스킹 성공, 캡스톤 디자인 2위, “실제 솔루션 같다”는 심사위원 피드백 확보.",
  },
];

const bullets = [
  "AWS KMS + AES-GCM 키 체계 설계, 자동 키 순환/재암호화 시나리오 정의",
  "업로드 즉시 PII 탐지·마스킹 → 암호화 저장 → 접근 제어 로그까지 이어지는 End-to-End 흐름",
];

const FeaturedCaseStudy: React.FC = () => {
  const handleDemoClick = () => {
    // 외부 영상/링크 연결 예정
  };

  return (
    <motion.section id="case-studies" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <div>
          <p className={overline}>CASE STUDY · PII MASKING &amp; ENCRYPTION</p>
          <h2 className={heading2}>민감정보 마스킹과 AES-GCM 암호화를 결합한 Lockument PoC</h2>
          <p className="section-lead mt-3">
            Lockument는 문서 업로드와 동시에 개인정보 필드를 탐지·마스킹하고, AES-GCM과 AWS KMS를 활용해 암호화된 형태로 저장하는 보안 서비스입니다.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {highlightBlocks.map((block) => (
                <article key={block.title} className={cardClass}>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500">{block.title}</p>
                  <p className="mt-3 text-[var(--fs-body)] leading-[var(--lh-normal)]">{block.body}</p>
                </article>
              ))}
            </div>

            <ul className={`${cardClass} space-y-3`}>
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--fs-body)] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardClass} relative overflow-hidden`}>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
              <button
                type="button"
                onClick={handleDemoClick}
                className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-xl text-slate-900 shadow-xl"
                aria-label="Lockument demo video"
              >
                ▶
              </button>
              <div className="absolute bottom-6 left-6 text-slate-200">
                <div className="text-base font-semibold">Lockument Demo · 1:30</div>
                <div className="mt-1 text-sm text-slate-300">문서 업로드 → PII 탐지·마스킹 → AES-GCM 암호화 흐름</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedCaseStudy;

