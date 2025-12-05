import React from "react";
import { motion } from "framer-motion";
import { bodyText, cardClass, captionText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const securityProjects = [
  {
    period: "2025.08 ~ 2025.11",
    title: "SecureDoc Cloud – PII 마스킹 & 암호화 웹서비스",
    desc: "2인 팀장 · 캡스톤 금상. AWS KMS + AES-GCM 아키텍처를 설계하고 Web VAPT 대응, 리포트/발표까지 총괄했습니다.",
  },
  {
    period: "2025.08.21 ~ 2025.11.03",
    title: "Drop the Port – 사내형 네트워크 인프라 & 방화벽 설계",
    desc: "4인 팀장. VLAN, 방화벽, DMZ를 재설계해 서비스/관리망을 분리하고 패킷 캡처로 정책을 검증했습니다.",
  },
  {
    period: "2025.11 ~ 2025.12",
    title: "웹 취약점 분석 – Upload / XSS / CSRF 실습",
    desc: "Burp Suite·DevTools로 취약점을 재현하고, 조치 리포트와 발표 자료까지 완성한 Web VAPT 프로젝트입니다.",
  },
];

const customerExperience = [
  {
    period: "2024 – 현재",
    title: "한국폴리텍대학 대전캠퍼스 – 클라우드보안과 (하이테크)",
    desc: "클라우드 보안, 네트워크 보안, Web VAPT 실습을 진행하며 보안컨설팅 워크플로우를 반복 학습 중입니다.",
  },
  {
    period: "2023.02 – 2023.09",
    title: "대한항공 (지상직)",
    desc: "공항 현장 운영과 고객 응대, 비정상 상황 대응 시 여러 부서와 협업하며 커뮤니케이션 역량을 다졌습니다.",
  },
  {
    period: "2020.12 – 2021.09",
    title: "Computer Ahnex",
    desc: "컴퓨터 판매·수리점에서 장비 상담, 수리, 매장 운영을 담당하며 고객 맞춤형 문제 해결 경험을 쌓았습니다.",
  },
  {
    period: "2024.01 – 2025.10",
    title: "스마트스토어 운영",
    desc: "중국 구매대행 스마트스토어를 운영하며 상품 소싱, 주문·배송 관리, CS 대응 등 온라인 비즈니스를 직접 운영했습니다.",
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
          <h2 className={`${heading2} text-4xl font-extrabold tracking-tight`}>경험과 학습 경로</h2>
          <p className={`${bodyText} mt-3 max-w-3xl text-[0.98rem] md:text-base lg:text-[1.05rem]`}>
            보안 프로젝트 타임라인과 고객 경험 타임라인을 분리해 역량 축적 과정을 투명하게 정리했습니다.
          </p>
          <ol className="mt-8 space-y-6 border-l border-slate-200 pl-6">
            {securityProjects.map((item) => (
              <li key={item.title} className="relative space-y-2">
                <span className="absolute -left-[13px] mt-1 h-3 w-3 rounded-full bg-sky-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">{item.period}</p>
                <p className="text-xl font-semibold text-[var(--color-text-strong)]">{item.title}</p>
                <p className="text-[var(--fs-body)] leading-relaxed text-[var(--color-text)]">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 space-y-6 md:mt-0">
          <div className="space-y-4">
            <p className={overline}>CUSTOMER &amp; OPERATIONS</p>
            <div className="space-y-4">
              {customerExperience.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/90 p-4">
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-indigo-500">{item.period}</p>
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="text-[var(--fs-body)] leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
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
              <p className={`${captionText} mt-2 leading-relaxed`}>PII 탐지·마스킹과 AES-GCM 암호화를 결합한 SecureDoc Cloud PoC로 “실제 기업 솔루션 같다”는 평가를 받았습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

