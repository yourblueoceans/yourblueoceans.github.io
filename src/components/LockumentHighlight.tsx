import React from "react";
import { CARD_HOVER, CARD_SURFACE, SECTION_CONTAINER, SECTION_SPACING, EYEBROW_TEXT } from "../constants/layout";

const lockumentMedia = {
  youtubeId: "",
  localVideo: "/videos/lockument-hero.mp4",
  poster: "/images/lockument-poster.jpg",
  duration: "1:30",
};

const highlightBlocks = [
  {
    title: "Problem",
    body: "민감정보가 포함된 내부 문서를 테스트/운영 환경에서 안전하게 다루고, 클라우드에 암호화된 형태로 저장해야 하는 요구.",
  },
  {
    title: "Approach",
    body: "문서 업로드 → PII 탐지·마스킹 → AES-GCM 암복호화 → AWS KMS 기반 키 관리 전체 플로우를 설계하고 PoC 구현.",
  },
  {
    title: "Outcome",
    body: "20+ 문서 포맷 자동 마스킹 성공, 캡스톤 디자인 2위, “실제 솔루션 같다”는 심사위원 피드백을 확보.",
  },
];

const deliverables = [
  { label: "캡스톤 발표 자료(PDF)", href: "/assets/lockument-presentation.pdf" },
  { label: "보안 설계 & PII 리포트(PDF)", href: "/assets/lockument-report.pdf" },
];

const LockumentHighlight: React.FC = () => {
  const videoId = lockumentMedia.youtubeId?.trim();

  return (
    <section id="lockument" className={`${SECTION_SPACING} border-t border-white/5`}>
      <div className={`${SECTION_CONTAINER} flex flex-col gap-12 py-24 sm:py-28 lg:py-32`}>
        <div className="space-y-4 text-left">
          <p className={EYEBROW_TEXT}>CASE STUDY · PII MASKING &amp; ENCRYPTION</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            민감정보 마스킹과 AES-GCM 암호화를 결합한 클라우드 보안 PoC
          </h2>
          <p className="max-w-3xl text-sm text-slate-400 sm:text-base">
            Lockument는 문서 업로드와 동시에 개인정보 필드를 탐지·마스킹하고, AES-GCM과 AWS KMS를 활용해 암호화된 형태로 저장하는 웹 보안
            서비스입니다.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className={`space-y-6 ${CARD_SURFACE} ${CARD_HOVER} p-8`}>
            <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
              {highlightBlocks.map((block) => (
                <div key={block.title}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">{block.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-200">{block.body}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                AWS KMS + AES-GCM 키 체계를 설계하고 자동 키 순환 및 재암호화 시나리오 정의
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                업로드 즉시 PII 탐지·마스킹 → 암호화 저장 → 접근 제어 로그까지 포함한 E2E 플로우 구축
              </li>
            </ul>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-300">DELIVERABLES</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {deliverables.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-violet-400/70"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative ${CARD_SURFACE} ${CARD_HOVER} overflow-hidden p-4`}>
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/15 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}`}
                  title="Lockument Demo"
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={lockumentMedia.localVideo}
                  poster={lockumentMedia.poster}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
              <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-slate-100">
                Lockument Demo · {lockumentMedia.duration}
              </span>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              영상과 리포트를 통해 실제 PoC 흐름과 운영 가이드를 공유할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LockumentHighlight;

