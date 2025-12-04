import React from "react";
import SectionWrapper from "./SectionWrapper";
import { copy } from "../copy";
import type { RichParagraph } from "../copy";

const renderParagraph = (segments: RichParagraph, paragraphIndex: number) => (
  <p key={`contact-paragraph-${paragraphIndex}`}>
    {segments.map((segment, segmentIndex) =>
      segment.highlight ? (
        <span key={`contact-paragraph-${paragraphIndex}-segment-${segmentIndex}`} className="font-medium text-slate-100">
          {segment.text}
        </span>
      ) : (
        <React.Fragment key={`contact-paragraph-${paragraphIndex}-segment-${segmentIndex}`}>
          {segment.text}
        </React.Fragment>
      )
    )}
  </p>
);

const ContactSection: React.FC = () => {
  const contactCopy = copy.contact;

  return (
    <SectionWrapper
      id="contact"
      eyebrow={contactCopy.eyebrow}
      title={contactCopy.title}
      subtitle={contactCopy.subtitle}
      align="center"
    >
      <div className="mx-auto w-full max-w-3xl space-y-6 text-center text-sm text-slate-300 sm:text-base">
        {contactCopy.paragraphs.map((paragraph, index) => (
          <div key={`contact-paragraph-wrapper-${index}`} className="leading-relaxed">
            {renderParagraph(paragraph, index)}
          </div>
        ))}

        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-100">
            Contact
          </p>
          <p>
            이메일:{" "}
            <a
              href={`mailto:${contactCopy.email}`}
              className="text-violet-300 transition hover:text-violet-200"
            >
              {contactCopy.email}
            </a>
          </p>
          <p className="text-xs text-slate-500">
            GitHub / LinkedIn / Notion 링크는 추후 업데이트 예정입니다.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

