import React from "react";

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
    <section id="about" className="border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20 lg:flex-row">
        {/* LEFT: 스토리 */}
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-violet-300">ABOUT</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            비전공에서 클라우드 보안으로, 고객 경험을 이해하는 보안컨설턴트 지망생
          </h2>
          <p className="text-xs font-medium text-slate-400 sm:text-[13px]">
            경영학 · 대한항공 · 해외 경험을 바탕으로, 이제는 클라우드 보안과 보안컨설팅에 집중하고 있습니다.
          </p>
          <div className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            <p>
              저는 대전대학교 경영학과를 졸업하고, 대한항공에서 근무하며 현장 운영과 고객 경험을 가까이에서 경험했습니다. 비정상
              상황이 발생했을 때 여러 부서와 협력하여 승객 동선, 서류, 휠체어 지원, 승무원 호흡까지 조율했던 경험은{" "}
              <span className="font-semibold text-slate-100">위기 대응, 의사소통, 조정 능력</span>을 크게 키워주었습니다.
            </p>
            <p>
              이후 미국에서의 생활을 거치며, 데이터와 시스템이 안전하게 운영되는 것이 중요하다는 것을 깨닫고{" "}
              <span className="font-semibold text-slate-100">클라우드 보안과 정보보호</span>로 커리어 전환을 결심했습니다. 현재는
              한국폴리텍대학 대전캠퍼스 클라우드보안과 하이테크 과정에서 클라우드 보안, 네트워크 보안, 웹 취약점 진단, Docker,
              Linux, AWS, 모의해킹 등을 집중적으로 학습하고 있습니다.
            </p>
            <p>
              특히 인상 깊었던 것은{" "}
              <span className="font-semibold text-slate-100">Lockument(PII 마스킹 &amp; 암호화 웹서비스)</span>와 웹 취약점 진단,
              네트워크 인프라 구축 프로젝트입니다. 단순 실습을 넘어 요구사항 정의 → 설계 → 구현 → 진단/개선 → 보고서 작성까지
              보안컨설턴트의 실무 흐름을 의식하며 진행했습니다.
            </p>
            <p>
              앞으로는{" "}
              <span className="font-semibold text-slate-100">“고객 환경을 이해하는 보안컨설턴트”</span>를 목표로, 클라우드 보안과
              보안 솔루션·클라우드 영업까지 기술과 비즈니스를 함께 이해하는 인력으로 성장하고자 합니다.
            </p>
          </div>
        </div>

        {/* RIGHT: Strengths */}
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-violet-300">STRENGTHS</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 text-[13px] text-slate-300 shadow-[0_12px_35px_rgba(15,23,42,0.8)]"
              >
                <h3 className="mb-1 text-[13px] font-semibold text-slate-50">{item.title}</h3>
                <p className="leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

