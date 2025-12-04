import React from "react";
import { CARD_HOVER, CARD_SURFACE, SECTION_CONTAINER, SECTION_SPACING, EYEBROW_TEXT } from "../constants/layout";

type ProjectAsset = {
  type: "pdf" | "ppt";
  label: string;
  href: string;
};

type ProjectMedia = {
  id: string;
  name: string;
  category: string;
  description: string;
  thumb: string;
  assets: ProjectAsset[];
};

const projects: ProjectMedia[] = [
  {
    id: "web-vapt",
    name: "웹 취약점 진단 실습 – Upload · XSS · CSRF",
    category: "Web VAPT",
    description: "실제 모의해킹 절차에 맞춰 Upload, XSS, CSRF를 재현하고 대응 리포트를 작성한 프로젝트.",
    thumb: "/images/projects/web-vapt.jpg",
    assets: [
      { type: "pdf", label: "취약점 진단 리포트(PDF)", href: "/assets/web-vapt-report.pdf" },
      { type: "pdf", label: "발표 슬라이드(PDF)", href: "/assets/web-vapt-presentation.pdf" },
    ],
  },
  {
    id: "network-infra",
    name: "사내형 네트워크 인프라 구축 & 보안 설계",
    category: "Network & Infra Security",
    description: "VLAN, 방화벽, DMZ를 통해 서비스망/관리망을 분리하고 트래픽 플로우를 검증한 프로젝트.",
    thumb: "/images/projects/network-infra.jpg",
    assets: [
      { type: "pdf", label: "설계/구성 문서(PDF)", href: "/assets/network-design.pdf" },
      { type: "pdf", label: "패킷 캡처 분석 리포트(PDF)", href: "/assets/network-packet-report.pdf" },
    ],
  },
];

const ProjectsMediaRail: React.FC = () => {
  return (
    <section id="projects-media" className={SECTION_SPACING}>
      <div className={`${SECTION_CONTAINER} py-24 sm:py-28 lg:py-32`}>
        <div className="space-y-3">
          <p className={EYEBROW_TEXT}>MEDIA &amp; DELIVERABLES</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">프로젝트 산출물 &amp; 리포트</h2>
          <p className="max-w-3xl text-sm text-slate-400">
            메가존 파트너 섹션처럼 각 프로젝트의 리포트, 발표 자료, 설계 문서를 카드와 CTA 버튼으로 바로 확인할 수 있도록 구성했습니다.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-full gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`${CARD_SURFACE} ${CARD_HOVER} w-full min-w-[320px] max-w-md flex-shrink-0 space-y-4 p-5`}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={project.thumb}
                    alt={project.name}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
                    {project.category}
                  </span>
                  <h3 className="text-base font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-3">
                  {project.assets.map((asset) => (
                    <a
                      key={asset.label}
                      href={asset.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:border-violet-400/70"
                    >
                      <span>{asset.label}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{asset.type}</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMediaRail;

