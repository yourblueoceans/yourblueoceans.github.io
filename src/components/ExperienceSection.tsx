import React from "react";
import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline";
import { bodyText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const ExperienceSection: React.FC = () => {
  return (
    <motion.section id="experience" className={`${sectionClass} bg-white`} {...sectionMotion}>
      <div className={`${innerClass} space-y-10`}>
        <header className="max-w-[820px] space-y-4">
          <p className={overline}>EXPERIENCE</p>
          <h2 className={`${heading2} text-[clamp(2rem,3.2vw,2.6rem)] font-extrabold tracking-tight`}>경험과 학습 경로</h2>
          <p className={`${bodyText} max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            보안 프로젝트, 고객 현장, 해외 경험 순으로 진행된 여정을 수평 타임라인으로 정리했습니다. 좌우로 스크롤하며 어떤 시점에 어떤 역할을 맡았는지 한눈에 볼 수 있습니다.
          </p>
        </header>

        <ExperienceTimeline />
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

