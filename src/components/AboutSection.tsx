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
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          {aboutCopy.paragraphs.map((paragraph, index) => renderParagraph(paragraph, index))}
        </div>

        <div className="space-y-4 text-sm text-slate-300">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
            Strengths
          </h3>
          <ul className="space-y-3">
            {aboutCopy.strengths.map((strength) => (
              <li key={strength.title} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>
                  <span className="font-medium text-slate-100">{strength.title}:</span>{" "}
                  {strength.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

