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
      <div className={`${innerClass} space-y-12 lg:grid lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:items-stretch lg:gap-14 lg:space-y-0`}>
        <div className="space-y-10">
          <div className="space-y-5">
            <p className={overline}>ABOUT</p>
            <h2 className={`${heading2} text-[clamp(1.9rem,3vw,2.3rem)] text-balance`}>비전공에서 클라우드 보안으로, 고객 경험을 이해하는 보안컨설턴트 지망생</h2>
            <div className="section-lead mt-3 space-y-3 text-base leading-relaxed text-slate-700 md:text-[1.08rem]">
              <p>비전공에서 시작해 항공사 현장 운영과 해외 경험을 거쳐 보안으로 전환했습니다. 현재는 웹 취약점 진단과 클라우드·인프라 보안을 두 축으로 실습을 이어가고 있습니다.</p>
              <p>장기적으로는 고객 환경을 깊이 이해하고 제안까지 책임지는 보안컨설턴트형 엔지니어를 지향합니다.</p>
            </div>
            <div className={`${bodyText} mt-6 space-y-4 text-[1.02rem] leading-relaxed text-slate-700`}>
              <p>
                대전대학교 경영학과와 대한항공 미주본부 지상직을 거치며 고객 위기 대응·커뮤니케이션·조정 역량을 다졌고, 미국 생활과 온라인 비즈니스 운영을 통해 데이터 보호의 필요성을 체감했습니다. 그 경험을 바탕으로
                현재는 한국폴리텍대학 클라우드보안과 하이테크 과정에서 클라우드/웹/인프라 보안을 실습 중심으로 학습하고 있습니다.
              </p>
              <p>
                대표 프로젝트 세 건은 모두 <span className="font-semibold text-[var(--color-text-strong)]">Case Studies</span> 섹션에서 PROBLEM → APPROACH → IMPACT 순으로 정리했습니다. 이곳에서는 제 여정과 강점을
                간단히 소개하고, 세부 스토리는 <a href="#case-studies" className="font-semibold text-indigo-600 underline-offset-2 hover:underline">Case Studies</a>에서 확인할 수 있도록
                영역을 분리했습니다.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className={overline}>STRENGTHS</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item.title} className={`${cardClass} min-h-[200px]`}>
                  <h3 className="text-[1.1rem] font-semibold text-[var(--color-text-strong)]">{item.title}</h3>
                  <p className={`mt-3 ${captionText} text-[0.98rem] leading-relaxed`}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-[2.4rem] shadow-2xl ring-1 ring-white/10 lg:mt-0">
          <figure className="relative flex min-h-[520px] flex-col items-center justify-between overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-[#1b1230] via-[#20163b] to-[#070913]">
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-b from-white/8 via-transparent to-transparent opacity-70" />
            <div className="absolute inset-x-12 bottom-10 h-64 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/10 to-cyan-400/20 blur-3xl" />
            <div className="relative flex w-full flex-col items-center gap-4 px-8 pt-10 text-center text-slate-200">
              <div className="space-y-1 text-xs font-semibold uppercase tracking-[0.45em] text-indigo-200/80">
                <p>Sangwon Suh</p>
                <p className="text-[0.65rem]">Security Consultant in Training</p>
              </div>
              <p className="text-sm font-medium text-slate-200">Cloud Security &amp; Web VAPT · 고객 환경을 이해하는 컨설턴트형 엔지니어</p>
            </div>
            <img
              src="/itsme.png"
              alt="Sangwon Suh full body profile"
              className="relative mx-auto mt-auto w-full max-w-[360px] object-contain drop-shadow-[0_40px_60px_rgba(15,23,42,0.7)] md:max-w-[400px] lg:max-w-[420px] max-h-[40vh] min-h-[30vh]"
            />
            <figcaption className="relative w-full px-8 pb-6 text-center text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200/80">
              보안컨설턴트를 향한 여정
            </figcaption>
          </figure>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

