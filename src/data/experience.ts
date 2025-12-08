export type ExperienceType = "project" | "education" | "work" | "business";

export type ExperienceItem = {
  id: string;
  type: ExperienceType;
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
};

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "computer-annex",
    type: "business",
    period: "2020.12–2021.09",
    title: "Computer Annex",
    subtitle: "소규모 컴퓨터 판매·수리점 운영 보조",
    description: "장비 상담, 수리, 재고 관리를 맡으며 고객 요구를 기술 사양으로 바꾸는 경험을 쌓았습니다.",
    tags: ["고객상담", "HW Diagnostics", "Inventory", "Troubleshooting"],
  },
  {
    id: "apotheco",
    type: "work",
    period: "2022.02–2023.02",
    title: "Apotheco Pharmacy (Pleasanton, CA)",
    subtitle: "현지 약국 운영 보조",
    description: "영어 기반 고객 응대, 처방 정보 확인, 재고/배송 조율을 맡아 커뮤니케이션과 문서 정확성을 익혔습니다.",
    tags: ["Customer Service", "Prescription", "English Comm", "Inventory"],
  },
  {
    id: "koreanair",
    type: "work",
    period: "2023.02–2023.09",
    title: "대한항공 (미주본부 · 지상직)",
    subtitle: "여객 서비스/운영",
    description: "기상·지연 상황에서 여러 부서와 협업하며 승객 동선, 서류, 특수 지원을 조율했습니다.",
    tags: ["Crisis Response", "Coordination", "항공운영", "Service"],
  },
  {
    id: "smartstore",
    type: "business",
    period: "2024.01–2025.10",
    title: "온라인 스마트스토어 운영",
    subtitle: "중국 구매대행 · CS/물류",
    description: "상품 소싱부터 주문·배송·CS까지 직접 운영하며 데이터 기반 의사결정과 자동화 도구를 익혔습니다.",
    tags: ["Biz Ops", "Automation", "CS", "Logistics"],
  },
  {
    id: "politech",
    type: "education",
    period: "2025.03–2026.02",
    title: "한국폴리텍대학 대전캠퍼스 – 클라우드보안과 (하이테크)",
    description: "클라우드 보안, 네트워크 보안, Web VAPT, Docker, AWS를 실습 중심으로 학습 중입니다.",
    tags: ["Cloud Security", "Web VAPT", "Docker", "AWS", "Infra"],
  },
  {
    id: "lockument-project",
    type: "project",
    period: "2025.08.18–2025.10.30",
    title: "Lockument (SecureDoc Cloud PoC)",
    subtitle: "PII 마스킹 & 암복호화 SaaS · 2인 팀장 · 금상",
    description: "주민번호·계좌 등 PII 자동 탐지와 AWS KMS 연동 AES-GCM 암복호화를 갖춘 클라우드 문서 보안 PoC를 총괄했습니다.",
    tags: ["PII Masking", "AWS KMS", "AES-GCM", "Docker", "React/Flask"],
  },
  {
    id: "droptheport-project",
    type: "project",
    period: "2025.08.21–11.03",
    title: "Drop the Port",
    subtitle: "세그멘테이션 & 방화벽 재설계 · 4인 팀장",
    description: "서비스/업무/DMZ 세그먼트와 40여 개의 방화벽·ACL 정책을 설계해 사내 네트워크 접근 제어를 재정립했습니다.",
    tags: ["Segmentation", "Firewall", "VLAN", "DMZ", "Ops Docs"],
  },
  {
    id: "webvapt-project",
    type: "project",
    period: "2025.11.12",
    title: "Web VAPT Lab",
    subtitle: "Upload/XSS/CSRF 재현",
    description: "VMware 기반 Ubuntu 웹 서버와 Kali 공격 서버를 구성해 Upload/XSS/CSRF 시나리오를 재현하고 조치 리포트를 작성했습니다.",
    tags: ["Upload", "XSS", "CSRF", "VMware", "HTTP Analysis"],
  },
];
