export type Project = {
  id: string;
  category: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  role: string;
  period?: string;
  techStack: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "securedoc",
    category: "Application Security · Cloud",
    titleKo: "Lockument (SecureDoc Cloud PoC) – PII 마스킹 & 암복호화 웹서비스",
    titleEn: "Lockument (SecureDoc Cloud PoC) – PII Masking & Encryption Web Service",
    summaryKo:
      "문서 업로드 시 내부 PII 필드를 자동 탐지·마스킹하고 AWS KMS + AES-GCM 기반으로 암복호화·로그를 통합한 SaaS PoC입니다. Docker, React/Flask를 활용해 실제 서비스 수준의 아키텍처를 설계·구현했습니다.",
    summaryEn:
      "Lockument detects PII in uploaded documents, applies masking, and performs AES-GCM encryption with AWS KMS-driven key management as a SecureDoc Cloud PoC.",
    role: "팀 리더/PM, 아키텍처 설계, 보안 플로우 정의, 발표",
    period: "2025 캡스톤 금상",
    techStack: "AWS KMS, AES-GCM, Docker, React, Flask, PostgreSQL",
    tags: ["PII Masking", "AES-GCM", "AWS KMS", "Dockerized", "Capstone"],
  },
  {
    id: "web-vapt",
    category: "Web VAPT · Consulting",
    titleKo: "Web Vulnerability Assessment – 웹 취약점 진단",
    titleEn: "Web Vulnerability Assessment – Upload, XSS, CSRF & More",
    summaryKo:
      "VMware 기반 Ubuntu 웹 서버와 Kali 공격 서버를 구성해 파일 업로드, Stored/Reflected XSS, CSRF 취약점을 주요정보통신기반시설 가이드에 따라 실습하고, HTTP 분석과 조치 방안을 리포트로 정리했습니다.",
    summaryEn:
      "Configured VMware-based Ubuntu web server and Kali attack server to reproduce File Upload, Stored/Reflected XSS, and CSRF vulnerabilities following the Korean critical infrastructure guideline, documenting HTTP analysis and remediation steps.",
    role: "웹 취약점 진단 수행, 요청/응답 분석, 보고서 작성",
    period: "2025 실습 프로젝트",
    techStack: "VMware, Ubuntu Server, Kali Linux, HTTP/S, Cookie/Session",
    tags: ["Directory Indexing", "File Upload", "XSS", "CSRF", "Consulting Report"],
  },
  {
    id: "network-infra",
    category: "Network & Infra Security",
    titleKo: "Network Infrastructure Build – VLAN/방화벽/DMZ 보안 인프라 구축",
    titleEn: "Network Infrastructure Build – VLAN, Firewall & DMZ",
    summaryKo:
      "L2/L3 스위치, VLAN, 방화벽, NAT, DMZ, 서버를 구성하여 실제 서비스 환경을 가정한 네트워크 인프라를 설계·구축했습니다. 내부망/외부망 분리, 방화벽 정책, 로그 설정을 통해 인프라 보안 관점을 강화했습니다.",
    summaryEn:
      "Designed and built a secure network topology with VLANs, L2/L3 switches, firewall, NAT, DMZ, and servers, focusing on segmentation, access control, and logging from a security engineer’s perspective.",
    role: "네트워크 설계, 방화벽 정책 정의, 보안 영역 분리",
    period: "2025 네트워크 보안 실습",
    techStack: "Cisco L2/L3, Firewall, NAT, DMZ, Linux Server",
    tags: ["VLAN", "Firewall Policy", "DMZ", "NAT", "Network Topology"],
  },
];

