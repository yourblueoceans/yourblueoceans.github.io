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
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.015] p-8 text-center">
        <div className="space-y-4 text-sm text-slate-300 sm:text-base">
          {contactCopy.paragraphs.map((paragraph, index) => (
            <div key={`contact-paragraph-wrapper-${index}`} className="leading-relaxed">
              {renderParagraph(paragraph, index)}
            </div>
          ))}

          <div className="space-y-3">
            <a
              href={`mailto:${contactCopy.email}`}
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              {contactCopy.email}
            </a>
            <p className="text-xs text-slate-500">
              GitHub:
              {" "}
              <a
                href="https://github.com/yourblueoceans"
                className="text-slate-200 underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yourblueoceans
              </a>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

