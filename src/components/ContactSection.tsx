import React from "react";
import { motion } from "framer-motion";
import { cardClass, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const ContactSection: React.FC = () => {
  const handleEmail = () => {
    window.location.href = "mailto:bluetrees88@gmail.com?subject=Contact%20from%20portfolio";
  };

  return (
    <motion.section id="contact" className={sectionClass} {...sectionMotion}>
      <div className={`${innerClass} max-w-4xl`}>
        <div className={`${cardClass} text-center`}>
          <p className={overline}>CONTACT</p>
          <h2 className={`${heading2} text-[clamp(1.9rem,3vw,2.3rem)] text-balance`}>웹 취약점 진단·클라우드 보안 PoC에 대해 이야기 나누고 싶으시다면</h2>
          <p className="section-lead mx-auto mt-3 max-w-[640px] text-base leading-relaxed text-slate-700">
            인턴·주니어 포지션, 프로젝트 협업, 보안 컨설팅/영업 관련 논의 등 언제든지 편하게 연락 주세요.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button type="button" onClick={handleEmail} className="btn-primary text-base">
              이메일 보내기
            </button>
            <a href="https://github.com/yourblueoceans" target="_blank" rel="noreferrer" className="btn-secondary text-base text-slate-900">
              GitHub 보기
            </a>
          </div>
          <p className="mt-6 text-[0.75rem] text-[var(--color-muted)]">© {new Date().getFullYear()} Sangwon Suh. All rights reserved.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

