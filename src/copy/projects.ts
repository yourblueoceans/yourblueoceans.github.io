export type ProjectDeliverableType = "report" | "slides" | "diagram" | "video";

export type ProjectDeliverable = {
  label: string;
  type: ProjectDeliverableType;
  format: string;
  description: string;
  href?: string;
};

export type ProjectStory = {
  problem: string;
  approach: string;
  impact: string[];
  role: string;
  tech: string[];
};

export interface Project {
  id: "securedoc" | "droptheport" | "webvapt";
  title: string;
  subtitle: string;
  period: string;
  team: string;
  focus: string[];
  story: ProjectStory;
  deliverables: ProjectDeliverable[];
}

export const PROJECTS: Project[] = [
  {
    id: "securedoc",
    title: "Lockument (SecureDoc Cloud PoC)",
    subtitle: "PII 마스킹 & 암복호화 기반 문서 보안 SaaS PoC",
    period: "2025.08.18–2025.10.30",
    team: "2인 팀장, 캡스톤 금상",
    focus: ["PII 마스킹", "AES-GCM", "AWS KMS", "Docker", "React/Flask"],
    story: {
      problem:
        "문서 업로드 직후 내부 PII 필드를 자동 탐지·마스킹하고 암복호화 로그까지 추적할 수 있는 클라우드형 솔루션이 필요했습니다.",
      approach:
        "데이터 흐름을 기준으로 AWS KMS + AES-GCM 키 관리 파이프라인을 설계하고, React/Flask·Docker 멀티스테이지 환경으로 PoC를 구축했습니다.",
      impact: [
        "주민번호·계좌·연락처 등 PII 필드를 정책별로 탐지 후 마스킹",
        "AWS KMS CMK를 이용한 키 생성·회전·로그 감사 체계를 구현",
        "Presigned URL과 격리된 Docker 네트워크로 파일 전송 구간 보호",
        "요구사항 정의→설계→구현→테스트→리포트/발표까지 일련의 컨설팅 워크플로우 완수",
      ],
      role: "보안 아키텍트 & 팀장 – 요구사항 정의, 암호화 설계, 품질 검증, 리포트/발표 총괄",
      tech: ["AWS KMS", "AES-GCM", "React", "Flask", "Docker", "PostgreSQL"],
    },
    deliverables: [
      {
        label: "Lockument 보안 설계 & 리포트",
        type: "report",
        format: "PDF",
        description: "PII 탐지 정책, 암복호화 다이어그램, 키 관리·감사 설계를 정리한 공식 문서",
        href: "/assets/lockument-report.pdf",
      },
      {
        label: "Lockument 캡스톤 발표 슬라이드",
        type: "slides",
        format: "PDF",
        description: "고객 시나리오, PoC 데모 흐름, 기대 효과를 담은 발표 자료",
        href: "/assets/lockument-presentation.pdf",
      },
    ],
  },
  {
    id: "droptheport",
    title: "Drop the Port",
    subtitle: "세그멘테이션 기반 사내 네트워크 보안 아키텍처",
    period: "2025.08.21–11.03",
    team: "4인 팀장, CB 정보통신(가상의 스타트업)",
    focus: ["사내형 네트워크 인프라", "세그멘테이션", "보안 아키텍처", "방화벽 정책"],
    story: {
      problem:
        "CB 정보통신(가상) 서비스/관리망이 혼재되어 보안 영역이 붕괴된 상태라, 업무별 세그먼트와 DMZ를 나눠 위협을 최소화해야 했습니다.",
      approach:
        "L2/L3 스위치와 VLAN으로 구간을 분리하고, 방화벽·NAT·DMZ 정책을 수립해 접근 제어·로그 수집·운영 절차를 정립했습니다.",
      impact: [
        "서비스·업무·DMZ 세그먼트를 구분한 VLAN/서브넷·IP 플랜 완성",
        "방화벽 정책·ACL 40여 개와 NAT/Port-Forward 룰로 접근 통제",
        "Syslog·NetFlow 기반 모니터링 루틴과 운영 절차 문서화",
        "CB 정보통신 운영팀을 위한 정책 변경·점검 체크리스트 제공",
      ],
      role: "인프라 총괄 & 팀장 – 요구사항 수집, 아키텍처 다이어그램, 정책 문서 작성",
      tech: ["Cisco L2/L3", "VLAN", "Firewall", "DMZ", "NAT", "Ubuntu Server"],
    },
    deliverables: [
      {
        label: "네트워크 설계도 & 토폴로지",
        type: "diagram",
        format: "PDF",
        description: "세그먼트, 방화벽 경계, DMZ 구성을 한눈에 볼 수 있는 보안 설계도",
        href: "/assets/network-design.pdf",
      },
      {
        label: "패킷 캡처 분석 리포트",
        type: "report",
        format: "PDF",
        description: "정책 적용 전·후 트래픽 캡처와 ACL 검증 결과를 정리한 문서",
        href: "/assets/network-packet-report.pdf",
      },
      {
        label: "운영 정책 슬라이드",
        type: "slides",
        format: "PPTX",
        description: "교대 근무자가 참고할 방화벽 변경 절차와 점검 체크리스트",
      },
    ],
  },
  {
    id: "webvapt",
    title: "Web VAPT Lab (웹 취약점 분석)",
    subtitle: "Upload/XSS/CSRF 시나리오 기반 웹 취약점 분석",
    period: "2025.11–12",
    team: "1인 수행, 실습 프로젝트",
    focus: ["File Upload", "XSS", "CSRF", "Directory Indexing", "OWASP Top 10 학습"],
    story: {
      problem:
        "VMware 기반의 Ubuntu 웹 서버에서 Upload/XSS/CSRF 취약점을 재현하고, 조치 방안을 문서화해 교육용 샘플로 제시해야 했습니다.",
      approach:
        "Ubuntu 웹 서버와 Kali 공격 서버를 구성하고, 교수자 제공 양식·주통기·주요정보통신기반시설 기술적 취약점 가이드에 맞춰 시나리오·증적을 수집했습니다.",
      impact: [
        "파일 업로드 취약점 재현으로 임의 스크립트 업로드·실행 가능성을 증명",
        "Stored/Reflected XSS 시나리오로 세션·쿠키 탈취 위험을 설명",
        "CSRF 토큰 미검증 사례를 파라미터 단위로 분석해 대응안을 제시",
        "입력 검증, 파일 확장자/컨텐츠 타입 검증, CSRF 토큰 적용 등 조치안을 리포트로 정리",
      ],
      role: "리드 테스터 – VMware 환경 구성, HTTP 트래픽 분석, 보고서 작성",
      tech: ["VMware", "Ubuntu Server", "Kali Linux", "HTTP(S)", "PHP Test App"],
    },
    deliverables: [
      {
        label: "취약점 진단 리포트",
        type: "report",
        format: "PDF",
        description: "Upload/XSS/CSRF 재현 단계와 로그, 조치 권고를 담은 컨설팅 형식 리포트",
        href: "/assets/web-vapt-report.pdf",
      },
      {
        label: "발표 슬라이드",
        type: "slides",
        format: "PDF",
        description: "주요 취약점 재현 캡처와 개선 효과를 공유한 브리핑 자료",
        href: "/assets/web-vapt-presentation.pdf",
      },
      {
        label: "재진단 체크리스트",
        type: "report",
        format: "PDF",
        description: "조치 완료 여부를 확인하는 테스트 케이스와 증빙 목록",
      },
    ],
  },
];
