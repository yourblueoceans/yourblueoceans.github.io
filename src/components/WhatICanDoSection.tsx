import React from "react";
import { motion } from "framer-motion";
import ProjectAccordion from "./ProjectAccordion";
import { bodyText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const WhatICanDoSection: React.FC = () => {
  return (
    <motion.section id="what-i-can-do" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <header className="max-w-[760px] space-y-3">
          <p className={overline}>WHAT I CAN DO</p>
          <h2 className={`${heading2} text-[clamp(1.9rem,3vw,2.3rem)] font-extrabold tracking-tight`}>팀에서 맡길 수 있는 보안·클라우드 중심 역할</h2>
          <p className={`${bodyText} text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            Lockument, Drop the Port, Web VAPT Lab 세 프로젝트를 기준으로 웹 취약점 진단, 클라우드·데이터 보안 설계, 네트워크 인프라 보안 역할을 한 번에 살펴볼 수 있도록
            아코디언으로 정리했습니다.
          </p>
        </header>

        <div className="mt-10">
          <ProjectAccordion />
        </div>
      </div>
    </motion.section>
  );
};

export default WhatICanDoSection;

