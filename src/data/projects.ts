export type ProjectId = "lockument" | "dropThePort" | "webVapt";

export type ProjectDeliverable = {
  id: string;
  label: string;
  type: "PDF" | "PPTX" | "HWP" | "ETC";
  note?: string;
  href?: string;
};

export type Project = {
  id: ProjectId;
  title: string;
  subtitle: string;
  period: string;
  teamInfo: string;
  highlight: string;
  image?: string;
  tags: string[];
  problem: string[];
  approach: string[];
  impact: string[];
  role: string[];
  tech: string[];
  deliverables: ProjectDeliverable[];
};

export const projects: Project[] = [
  {
    id: "lockument",
    title: "Lockument (SecureDoc Cloud PoC)",
    subtitle: "PII 마스킹 & AES-GCM 암복호화 기반 문서 보안 SaaS PoC",
    period: "2025.08.18–2025.10.30",
    teamInfo: "2인 팀장, 캡스톤 금상",
    highlight: "주민번호·계좌 등 PII 자동 탐지·마스킹 및 AWS KMS 연동 AES-GCM 암복호화 PoC 완성",
    image: "/assets/lockument-core.png",
    tags: ["PII 마스킹", "AES-GCM", "AWS KMS", "Docker", "React/Flask"],
    problem: [
      "문서 업로드 직후 주민번호·계좌·연락처 등 PII 필드를 자동 탐지·마스킹해 달라는 요구가 있었습니다.",
      "암복호화 키와 접근 로그를 AWS KMS와 연계해 추적·감사할 수 있는 SaaS 구조가 필요했습니다.",
    ],
    approach: [
      "데이터 흐름을 기준으로 AWS KMS CMK + AES-GCM 키 관리 파이프라인을 설계했습니다.",
      "React/Flask + Docker 멀티스테이지 구조로 업로드·탐지·암복호화를 하나의 PoC로 구현했습니다.",
      "Presigned URL과 격리된 Docker 네트워크로 파일 전송 구간과 감사 로그 수집을 강화했습니다.",
    ],
    impact: [
      "주민번호·계좌·연락처 등 PII 필드를 정책별로 탐지 후 마스킹",
      "AWS KMS CMK를 이용한 키 생성·회전·로그 감사 체계를 구현",
      "Presigned URL과 격리된 Docker 네트워크로 파일 전송 구간 보호",
      "요구사항 정의→설계→구현→테스트→리포트/발표까지 일련의 컨설팅 워크플로우 완수",
    ],
    role: [
      "보안 아키텍트 & 팀장으로 요구사항 정의와 품질 검증 총괄",
      "암호화 설계, 키 정책, 감사 로깅 표준 문서를 직접 작성",
      "최종 리포트/슬라이드 제작 및 스폰서 대응 발표",
    ],
    tech: ["AWS KMS", "AES-GCM", "React", "Flask", "Docker", "PostgreSQL"],
    deliverables: [
      {
        id: "lockument-architecture",
        label: "Lockument 보안 설계 & 리포트",
        type: "PDF",
        note: "PII 탐지 정책, 암복호화 다이어그램, 키 관리·감사 설계 정리",
        href: "/deliverables/01 서상원_PII정보 마스킹 및 암호화 클라우스웹서비스.pdf",
      },
      {
        id: "lockument-presentation",
        label: "Lockument 캡스톤 발표 슬라이드",
        type: "PPTX",
        note: "고객 시나리오, PoC 데모, 기대 효과를 담은 발표 자료",
        href: "/deliverables/서상원_PII 정보 마스킹 암호화 클라우스웹서비스_금상수상작.pptx",
      },
    ],
  },
  {
    id: "dropThePort",
    title: "Drop the Port",
    subtitle: "세그멘테이션 기반 사내 네트워크 보안 아키텍처",
    period: "2025.08.21–11.03",
    teamInfo: "4인 팀장, CB 정보통신(가상의 스타트업)",
    highlight: "서비스/업무/DMZ 세그먼트 분리와 40+ 방화벽 정책으로 사내 네트워크 재설계",
    image: "/assets/security-cube.png",
    tags: ["사내형 네트워크 인프라", "세그멘테이션", "방화벽 정책", "VLAN", "DMZ"],
    problem: [
      "CB 정보통신(가상) 서비스망·관리망이 혼재되어 보안 경계가 붕괴된 상태였습니다.",
      "업무별 세그먼트, DMZ, 로그 수집 절차를 재정의해 위협 노출을 줄여야 했습니다.",
    ],
    approach: [
      "L2/L3 스위치와 VLAN으로 서비스/업무/DMZ 영역을 분리하고 IP 플랜을 재작성했습니다.",
      "방화벽·NAT·ACL 정책을 수립해 접근 제어, 포트 포워딩, 운영 절차를 문서화했습니다.",
      "Syslog·NetFlow 기반 모니터링 루틴과 점검 체크리스트로 운영팀 인수인계를 준비했습니다.",
    ],
    impact: [
      "서비스·업무·DMZ 세그먼트를 구분한 VLAN/서브넷·IP 플랜 완성",
      "방화벽 정책·ACL 40여 개와 NAT/Port-Forward 룰로 접근 통제",
      "Syslog·NetFlow 기반 모니터링 루틴과 운영 절차 문서화",
      "CB 정보통신 운영팀을 위한 정책 변경·점검 체크리스트 제공",
    ],
    role: [
      "인프라 총괄 & 팀장으로 요구사항 수집과 스코프 정의",
      "아키텍처 다이어그램, VLAN/방화벽 정책, 운영 문서 작성",
      "운영팀 브리핑 및 점검 체크리스트/교육 자료 제작",
    ],
    tech: ["Cisco L2/L3", "VLAN", "Firewall", "DMZ", "NAT", "Ubuntu Server"],
    deliverables: [
      {
        id: "drop-topology",
        label: "네트워크 설계도 & 토폴로지",
        type: "PDF",
        note: "세그먼트, 방화벽 경계, DMZ 구성을 시각화한 보안 설계도",
        href: "/deliverables/02 서상원_네트워크 인프라 구축.pdf",
      },
      {
        id: "drop-packet-report",
        label: "패킷 캡처 분석 리포트",
        type: "PDF",
        note: "정책 적용 전·후 트래픽 캡처와 ACL 검증 보고서",
        href: "/deliverables/02 서상원_네트워크 인프라 구축.pdf",
      },
      {
        id: "drop-ops-slide",
        label: "운영 정책 슬라이드",
        type: "PPTX",
        note: "방화벽 변경 절차와 점검 체크리스트 안내 슬라이드",
        href: "/deliverables/서상원_네트워크 인프라 구축.pptx",
      },
    ],
  },
  {
    id: "webVapt",
    title: "Web VAPT Lab (웹 취약점 분석)",
    subtitle: "Upload/XSS/CSRF 시나리오 기반 웹 취약점 재현 및 조치 분석",
    period: "2025.11.12",
    teamInfo: "1인 수행, 실습 프로젝트",
    highlight: "VMware 기반 Ubuntu·Kali 환경에서 Upload/XSS/CSRF 재현 및 조치 보고서 작성",
    image: "/assets/security-cube2.png",
    tags: ["File Upload", "XSS", "CSRF", "Directory Indexing", "OWASP Top 10"],
    problem: [
      "교수자 제공 교안과 주통기에 맞춰 Upload/XSS/CSRF 취약점을 재현해야 했습니다.",
      "VMware 기반 Ubuntu 웹 서버와 Kali 공격 서버 간 공격/방어 로그를 수집해 제출해야 했습니다.",
    ],
    approach: [
      "Ubuntu 웹 서버와 Kali 공격 서버를 VMware 상에 구성하고 시나리오별 증적을 캡처했습니다.",
      "HTTP Request/Response, 파라미터, 쿠키/세션을 분석하며 취약점 결과를 문서화했습니다.",
      "교수자 양식·주요정보통신기반시설 기술적 취약점 가이드에 맞춰 조치안을 정리했습니다.",
    ],
    impact: [
      "파일 업로드 취약점 재현으로 임의 스크립트 업로드·실행 가능성 증명",
      "Stored/Reflected XSS 시나리오로 세션·쿠키 탈취 위험을 설명",
      "CSRF 토큰 미검증 사례를 파라미터 단위로 분석해 대응안 제시",
      "입력 검증, 파일 확장자/컨텐츠 타입 검증, CSRF 토큰 적용 등 조치안을 리포트로 정리",
    ],
    role: [
      "리드 테스터로 VMware 테스트베드와 공격/방어 서버 구성",
      "HTTP 트래픽 분석과 스크린샷·로그 증적 수집",
      "취약점 보고서·재진단 체크리스트 작성 및 발표",
    ],
    tech: ["VMware", "Ubuntu Server", "Kali Linux", "HTTP(S)", "PHP Test App"],
    deliverables: [
      {
        id: "webvapt-report",
        label: "취약점 진단 리포트",
        type: "PDF",
        note: "Upload/XSS/CSRF 재현 단계, 로그, 조치 권고 포함 리포트",
        href: "/deliverables/03 서상원_웹 취약점 진단 결과 보고서.pdf",
      },
      {
        id: "webvapt-slides",
        label: "발표 슬라이드",
        type: "PDF",
        note: "주요 취약점 캡처와 개선 효과 브리핑 자료",
        href: "/assets/web-vapt-presentation.pdf",
      },
      {
        id: "webvapt-checklist",
        label: "재진단 체크리스트",
        type: "PDF",
        note: "조치 완료 여부를 검증하는 테스트 케이스 모음",
      },
    ],
  },
];

