import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { bodyText, cardClass, captionText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const securityProjects = [
  {
    period: "2025.08.18–2025.10.30",
    title: "Lockument (SecureDoc Cloud PoC)",
    desc: "AWS KMS + AES-GCM 문서 암복호화 파이프라인을 설계·구현하고 팀장을 맡아 PoC 테스트·리포트·발표를 총괄.",
  },
  {
    period: "2025.08.21–11.03",
    title: "Drop the Port – 사내형 네트워크 & 방화벽 설계",
    desc: "세그멘테이션·방화벽 정책·DMZ 재설계를 통해 서비스/관리망을 분리하고 패킷 캡처로 정책을 검증.",
  },
  {
    period: "2025.11–12",
    title: "Web VAPT Lab (웹 취약점 분석)",
    desc: "VMware 기반 Ubuntu 웹 서버·Kali 공격 서버로 Upload/XSS/CSRF 시나리오를 재현하고 조치 리포트를 작성.",
  },
];

const customerExperience = [
  {
    period: "2025.03–2026.02",
    title: "한국폴리텍대학 대전캠퍼스 – 클라우드보안과 (하이테크)",
    desc: "클라우드 보안, 네트워크 보안, Web VAPT, Docker, Linux 실습 프로젝트 수행. Lockument, Drop the Port, Web VAPT Lab을 통해 컨설팅 워크플로우 반복.",
  },
  {
    period: "2023.02–2023.09",
    title: "대한항공 (미주본부 · 지상직)",
    desc: "미주본부 여객 서비스를 지원하며 비정상 상황 대응, 고객 동선 조율, 다부서 협업을 경험.",
  },
  {
    period: "2022.02–2023.02",
    title: "Apotheco Pharmacy (Pleasanton, CA)",
    desc: "환자 응대, 처방 정보 확인, 매장 운영 보조를 담당하며 영어 기반 고객 커뮤니케이션을 강화.",
  },
  {
    period: "2020.12–2021.09",
    title: "Computer Ahnex",
    desc: "컴퓨터 판매·수리점에서 장비 상담, 수리, 매장 운영을 담당하며 고객 맞춤형 문제 해결 경험을 쌓았습니다.",
  },
  {
    period: "2024.01–2025.10",
    title: "스마트스토어 운영",
    desc: "중국 구매대행 스마트스토어를 운영하며 상품 소싱, 주문·배송 관리, CS 대응 등 온라인 비즈니스를 직접 운영했습니다.",
  },
];

const certs = [
  { name: "정보보안기사", detail: "국내 정보보안 이론·법규·기술 역량 검증", code: "No. 23-****-1023" },
  { name: "Cisco CCST", detail: "네트워크 기초/장비 운용 역량", code: "No. 24-****-4421" },
  { name: "정보처리기사(필기)", detail: "소프트웨어 공학·데이터 구조 기초 역량", code: "합격" },
  { name: "네트워크관리사 2급", detail: "네트워크 구성·장애 대응 실무", code: "No. 21-****-3321" },
  { name: "한국사 1급 · TOEIC SPEAKING IH", detail: "비즈니스 커뮤니케이션/문화 이해", code: "-" },
];

const ExperienceSection: React.FC = () => {
  const [openCustomer, setOpenCustomer] = useState<string | null>(customerExperience[0]?.title ?? null);

  const toggleCustomer = (title: string) => {
    setOpenCustomer((prev) => (prev === title ? null : title));
  };

  return (
    <motion.section id="experience" className={`${sectionClass} bg-white`} {...sectionMotion}>
      <div className={`${innerClass} md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12`}>
        <div>
          <p className={overline}>EXPERIENCE</p>
          <h2 className={`${heading2} text-[clamp(2rem,3.2vw,2.6rem)] font-extrabold tracking-tight`}>경험과 학습 경로</h2>
          <p className={`${bodyText} mt-3 max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            보안 프로젝트 타임라인과 고객 경험 타임라인을 분리해 역량 축적 과정을 투명하게 정리했습니다.
          </p>
          <ol className="mt-8 space-y-6 border-l border-slate-200 pl-6">
            {securityProjects.map((item) => (
              <li key={item.title} className="relative space-y-2">
                <span className="absolute -left-[13px] mt-1 h-3 w-3 rounded-full bg-sky-500" />
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.3em] text-indigo-500">{item.period}</p>
                <p className="text-[1.3rem] font-semibold text-[var(--color-text-strong)]">{item.title}</p>
                <p className="text-[1.02rem] leading-relaxed text-[var(--color-text)]">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 space-y-6 md:mt-0">
          <div className="space-y-4">
            <p className={overline}>CUSTOMER &amp; OPERATIONS</p>
            <div className="space-y-3">
              {customerExperience.map((item) => {
                const isOpen = openCustomer === item.title;
                return (
                  <article key={item.title} className="rounded-2xl border border-slate-200 bg-white/90">
                    <button
                      type="button"
                      className="flex w-full flex-col gap-2 px-4 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => toggleCustomer(item.title)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-indigo-500">{item.period}</p>
                          <p className="text-[1.05rem] font-semibold text-slate-900">{item.title}</p>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          key={`${item.title}-body`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="px-4 pb-4 text-[1.02rem] leading-relaxed text-slate-600"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-3">
            <p className={overline}>CERTIFICATIONS</p>
            <h3 className="text-[var(--fs-card-title)] font-semibold text-[var(--color-text-strong)]">자격증 &amp; 배지</h3>
            <div className="flex flex-wrap gap-3 text-sm text-[var(--color-text)]">
              {certs.map((cert) => (
                <div key={cert.name} className="group relative rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-slate-700">
                  {cert.name}
                  <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden w-52 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 text-xs font-medium text-slate-600 shadow-lg group-hover:block">
                    <p>{cert.detail}</p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">{cert.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className={overline}>HIGHLIGHT</p>
            <div className={cardClass}>
              <p className="text-[1.08rem] font-semibold text-[var(--color-text-strong)]">2025 Lockument (SecureDoc Cloud PoC) 캡스톤 금상</p>
              <p className={`${captionText} mt-2 leading-relaxed text-[0.98rem]`}>PII 탐지·마스킹과 AWS KMS + AES-GCM 암복호화를 결합한 Lockument PoC로 “실제 기업 솔루션 같다”는 평가를 받았습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

