import React from "react";
import SectionWrapper from "./SectionWrapper";
import { copy } from "../copy";
import type { RichParagraph } from "../copy";

const renderParagraph = (segments: RichParagraph, paragraphIndex: number) => (
  <p key={`about-paragraph-${paragraphIndex}`} className="leading-relaxed">
    {segments.map((segment, segmentIndex) =>
      segment.highlight ? (
        <span key={`about-paragraph-${paragraphIndex}-segment-${segmentIndex}`} className="font-medium text-slate-100">
          {segment.text}
        </span>
      ) : (
        <React.Fragment key={`about-paragraph-${paragraphIndex}-segment-${segmentIndex}`}>
          {segment.text}
        </React.Fragment>
      )
    )}
  </p>
);

const AboutSection: React.FC = () => {
  const aboutCopy = copy.about;

  return (
    <SectionWrapper
      id="about"
      eyebrow={aboutCopy.eyebrow}
      title={aboutCopy.title}
      subtitle={aboutCopy.subtitle}
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-base leading-relaxed text-slate-300">
          {aboutCopy.paragraphs.map((paragraph, index) => (
            <div
              key={`about-paragraph-${index}`}
              className="rounded-3xl border border-white/10 bg-white/[0.015] p-5 sm:p-6"
            >
              {renderParagraph(paragraph, index)}
            </div>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Background", value: "경영학 · 대한항공 · 해외 경험" },
              { label: "Focus", value: "클라우드 보안 · VAPT · 인프라" },
              { label: "Goal", value: "고객 환경을 이해하는 보안컨설턴트" },
              { label: "Working style", value: "요구사항 → 설계 → 진단 → 보고" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.015] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Strengths
          </p>
          <div className="space-y-4">
            {aboutCopy.strengths.map((strength) => (
              <div
                key={strength.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-5"
              >
                <p className="text-base font-semibold text-white">{strength.title}</p>
                <p className="mt-1 text-sm text-slate-300">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

