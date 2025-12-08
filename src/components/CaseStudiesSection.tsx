import React from "react";
import { motion } from "framer-motion";
import ProjectAccordion from "./ProjectAccordion";
import { bodyText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const CaseStudiesSection: React.FC = () => {
  return (
    <motion.section id="case-studies" className={`${sectionClass} bg-white`} {...sectionMotion}>
      <div className={`${innerClass} flex flex-col gap-10`}>
        <div className="max-w-[820px] space-y-4">
          <p className={overline}>CASE STUDIES</p>
          <h2 className={`${heading2} text-[clamp(2rem,3.2vw,2.6rem)] font-extrabold tracking-tight`}>
            {"Lockument · Drop\u00A0the\u00A0Port · Web\u00A0VAPT Lab"}
          </h2>
          <p className={`${bodyText} max-w-[760px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            세 프로젝트의 Problem → Approach → Impact → Role → Tech → Deliverables를 한 곳에서 파고들 수 있도록 정리했습니다. 필요한 프로젝트만 아코디언으로 열고 살펴보세요.
          </p>
        </div>
        <ProjectAccordion />
      </div>
    </motion.section>
  );
};

export default CaseStudiesSection;

