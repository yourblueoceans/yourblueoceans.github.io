import React from "react";
import { motion } from "framer-motion";
import { bodyText, cardClass, captionText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const strengths = [
  {
    title: "위기 대응 & 고객 커뮤니케이션",
    body: "대한항공 현장 운영에서 비정상 상황이 발생했을 때 여러 부서와 협업하여 승객 동선, 서류, 휠체어 지원, 승무원 호흡까지 조율했던 경험이 있습니다.",
  },
  {
    title: "실습 기반 보안 이해",
    body: "AWS KMS, AES-GCM, Docker, 웹 취약점(Upload/XSS/CSRF 등), VLAN·방화벽·DMZ 등 이론과 실습을 함께 진행하며 보안 구조를 이해하고 있습니다.",
  },
  {
    title: "문서화 & 발표",
    body: "웹 취약점 진단 보고서, 네트워크 인프라 구성 문서, 캡스톤 결과보고서 등 실제 컨설팅 리포트 형식으로 정리하고 설명하는 능력을 갖추고 있습니다.",
  },
  {
    title: "도전과 실행",
    body: "비전공자에서 클라우드 보안으로 커리어를 전환하면서, 여러 자격증 취득과 프로젝트를 병행하며 목표 중심으로 실행해 온 경험이 있습니다.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <motion.section id="about-details" className={sectionClass} {...sectionMotion}>
      <div className={`${innerClass} md:grid md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] md:items-start md:gap-12`}>
        <div>
          <p className={overline}>ABOUT</p>
          <h2 className={heading2}>비전공에서 클라우드 보안으로, 고객 경험을 이해하는 보안컨설턴트 지망생</h2>
          <div className="section-lead mt-3 space-y-3">
            <p>비전공에서 시작해 항공사 현장 운영과 해외 경험을 거쳐 보안으로 전환했습니다. 현재는 웹 취약점 진단과 클라우드·인프라 보안을 두 축으로 실습을 이어가고 있습니다.</p>
            <p>장기적으로는 고객 환경을 깊이 이해하고 제안까지 책임지는 보안컨설턴트형 엔지니어를 지향합니다.</p>
          </div>
          <div className={`${bodyText} mt-6 space-y-5`}>
            <p>
              대전대학교 경영학과 재학 중 대한항공 지상직으로 근무하며 비정상 상황 대응, 부서 간 협업, 고객 동선 관리 등을 경험했습니다. 이 과정에서{" "}
              <span className="font-semibold text-[var(--color-text-strong)]">위기 대응 · 커뮤니케이션 · 조정 능력</span>을 크게 키웠습니다.
            </p>
            <p>
              이후 미국 생활과 온라인 비즈니스 운영을 거치며 데이터 보호의 중요성을 체감해{" "}
              <span className="font-semibold text-[var(--color-text-strong)]">클라우드 보안·정보보호</span>로 전환했습니다. 현재는 한국폴리텍대학 클라우드보안과 하이테크 과정에서 클라우드 보안, 네트워크 보안, Web VAPT, Docker, AWS 등을 실습 중심으로 학습하고 있습니다.
            </p>
            <p>
              <span className="font-semibold text-[var(--color-text-strong)]">SecureDoc Cloud</span>, <span className="font-semibold text-[var(--color-text-strong)]">Drop the Port</span>,{" "}
              <span className="font-semibold text-[var(--color-text-strong)]">웹 취약점 분석</span> 프로젝트를 통해 요구사항 정의 → 설계 → 구현 → 테스트 → 리포트 → 발표까지 전체 컨설팅 워크플로우를 반복했습니다. 이 경험을 바탕으로 “고객 환경을 이해하는 보안컨설턴트”로 성장하는 것이 목표입니다.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-6 md:mt-0">
          <p className={overline}>STRENGTHS</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item.title} className={`${cardClass} min-h-[180px]`}>
                <h3 className="text-[var(--fs-body-lg)] font-semibold text-[var(--color-text-strong)]">{item.title}</h3>
                <p className={`mt-3 ${captionText}`}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

