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
    title: "SecureDoc Cloud",
    subtitle: "PII 마스킹 & 암복호화 기반 클라우드 보안 PoC",
    period: "2025.08–11",
    team: "2인 팀장, 캡스톤 금상",
    focus: ["PII 마스킹", "AES-GCM 암복호화", "AWS KMS", "Docker", "React/Flask"],
    story: {
      problem:
        "문서 협업 과정에서 개인정보가 포함된 문서를 외부와 공유해야 했고, 업로드 즉시 민감 필드를 탐지·마스킹한 뒤 암·복호화를 통제할 방법이 필요했습니다.",
      approach:
        "AWS KMS로 키를 관리하고 AES-GCM 암·복호화를 처리하는 파이프라인을 설계했으며, React/Flask + Docker 멀티스테이지 구성으로 PoC를 구축했습니다.",
      impact: [
        "주민번호·계좌·연락처 등 PII 필드를 자동 탐지해 정책별로 마스킹",
        "AWS KMS CMK + AES-GCM 암·복호화와 키 회전·로그 설계를 결합",
        "Presigned URL과 Docker 기반 멀티스테이지 배포로 안전한 파일 흐름 구현",
        "캡스톤 금상 수상 및 보안 설계·발표 자료로 신뢰성 확보",
      ],
      role: "보안 아키텍트 & 팀장 – 요구사항 정의, 암호화 플로우 설계, 리포트·발표 총괄",
      tech: ["AWS KMS", "AES-GCM", "React", "Flask", "Docker", "PostgreSQL"],
    },
    deliverables: [
      {
        label: "보안 설계 & 리포트",
        type: "report",
        format: "PDF",
        description: "PII 탐지 정책, AES-GCM 키 관리 전략, 위협 모델을 포함한 전체 아키텍처 문서",
        href: "/assets/lockument-report.pdf",
      },
      {
        label: "캡스톤 발표 슬라이드",
        type: "slides",
        format: "PDF",
        description: "고객 시나리오와 PoC 데모 흐름을 요약한 발표 자료",
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
        "내부 개발팀이 웹 취약점 리포트와 재현 스크린샷을 요구해 공격·조치 evidence를 빠르게 만들어야 했습니다.",
      approach:
        "Burp Suite·Chrome DevTools로 Upload/XSS/CSRF 취약점을 재현하고, 조치 후 재진단까지 포함한 컨설팅 양식 리포트를 작성했습니다.",
      impact: [
        "파일 업로드 취약점으로 WebShell 업로드 및 WAF 우회 시나리오 재현",
        "Reflected/Persistent XSS payload로 세션·쿠키 탈취 위험 증명",
        "CSRF 토큰 미검증 케이스를 요청 단위로 분석하고 대응안 제시",
        "조치 완료 후 재진단 체크리스트와 증빙 스크린샷 제공",
      ],
      role: "리드 테스터 – 테스트 케이스 설계, 요청/응답 분석, 보고서 작성",
      tech: ["Burp Suite", "Chrome DevTools", "OWASP ZAP", "PHP Test App", "Ubuntu"],
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
