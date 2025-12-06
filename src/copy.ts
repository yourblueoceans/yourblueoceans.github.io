export type RichTextSegment = {
  text: string;
  highlight?: boolean;
};

export type RichParagraph = RichTextSegment[];

export const copy = {
  hero: {
    pill: "서상원 (Sangwon Suh) · Security Consulting & Cloud Security",
    keywordLabels: [
      "Cloud Security",
      "Security Consulting",
      "Web VAPT (Upload / XSS / CSRF)",
      "Network & Infra",
      "AWS · Docker · React",
    ],
    profileFacts: [
      {
        label: "Program",
        value: "폴리텍 대전 · 클라우드보안과",
      },
      {
        label: "Certs",
        value: "정보보안기사 · CCST",
      },
      {
        label: "Highlight",
        value: "2025 SecureDoc Cloud 캡스톤 금상",
      },
    ],
    ctaNote: "English summary available below.",
    ko: {
      headline: {
        leading: "보안컨설턴트를 목표로 성장하는 ",
        highlight: "클라우드 보안 엔지니어",
        trailing: ", 서상원입니다.",
      },
      subtitle: "Aspiring Security Consultant & Cloud Security Engineer.",
      body:
        "Web VAPT, 클라우드 보안, 사내형 네트워크 인프라를 직접 설계·실습하며 고객 환경을 이해하는 주니어 정보보안 엔지니어입니다. SecureDoc Cloud, Drop the Port, Web VAPT Lab(웹 취약점 분석) 프로젝트를 통해 설계–테스트–리포트–발표까지 이어지는 컨설팅 워크플로우를 경험했습니다.",
    },
    en: {
      headline: "Aspiring Security Consultant & Cloud Security Engineer.",
      body:
        "Security Consultant in training focusing on Web VAPT, Cloud & Infra Security, and Security Solution PoC through SecureDoc Cloud, Drop the Port, and Web Vulnerability Analysis projects.",
    },
  },
  about: {
    eyebrow: "ABOUT",
    title: "비전공에서 클라우드 보안으로, 고객 경험을 이해하는 보안컨설턴트 지망생",
    subtitle:
      "경영학 · 대한항공 · 해외 경험을 바탕으로, 이제는 클라우드 보안과 보안컨설팅에 집중하고 있습니다.",
    paragraphs: [
      [
        { text: "저는 " },
        { text: "대전대학교 경영학과를 졸업", highlight: true },
        { text: "하고, 대한항공에서 근무하며 현장 운영과 고객 경험을 가까이에서 경험했습니다. 비정상 상황이 발생했을 때 여러 부서와 협력하여 승객 동선, 셔틀, 휠체어 지원, 승무원 호텔까지 조율했던 경험은 " },
        { text: "위기 대응, 의사소통, 조정 능력", highlight: true },
        { text: "을 크게 키워주었습니다." },
      ],
      [
        { text: "미국에서의 생활과 다양한 사회활동을 거치며, 데이터와 시스템이 안전하게 운영되는 것의 중요성을 체감했고 " },
        { text: "클라우드 보안과 정보보호", highlight: true },
        { text: "로 커리어 전환을 결심했습니다. 현재는 " },
        { text: "한국폴리텍대학 대전캠퍼스 클라우드보안과 하이테크 과정", highlight: true },
        { text: "에서 클라우드 보안, 네트워크 보안, 웹 취약점 진단, Docker, Linux, AWS, 모의해킹 등을 집중적으로 학습하고 있습니다." },
      ],
      [
        { text: "공부 과정에서 특히 의미 있었던 것은 " },
        { text: "SecureDoc Cloud, Drop the Port, Web VAPT Lab(웹 취약점 분석)", highlight: true },
        { text: " 프로젝트입니다. 단순 실습을 넘어 요구사항 정의 → 설계 → 구현 → 진단/개선 → 보고서 작성까지 보안컨설턴트의 실제 업무 흐름을 의식하며 진행했습니다." },
      ],
      [
        { text: "앞으로는 " },
        { text: "\"고객 환경을 이해하는 보안컨설턴트\"", highlight: true },
        { text: "를 목표로, 클라우드 보안과 보안 솔루션·클라우드 영업 직무에서 기술과 비즈니스를 함께 이해하는 인력으로 성장하고자 합니다." },
      ],
    ] as RichParagraph[],
    strengths: [
      {
        title: "문서화 & 보고서 작성",
        description:
          "웹 취약점 진단 보고서, 네트워크 인프라 구성 문서, 캡스톤 결과보고서 등 실제 컨설팅 리포트 형식으로 정리하고 설명하는 능력을 갖추고 있습니다.",
      },
      {
        title: "실습 기반 이해",
        description:
          "AWS KMS, AES-GCM, Docker, 웹 취약점(Upload/XSS/CSRF 등), VLAN·방화벽·DMZ 등 이론과 실습을 함께 경험하며 보안 구조를 이해하고 있습니다.",
      },
      {
        title: "커뮤니케이션 & 발표",
        description:
          "대한항공 근무, 대학교 토론대회·스피치 대회 수상, 캡스톤 발표 등을 통해 비전공자·경영진·기술자 모두에게 이해시키는 설명 방식을 연습했습니다.",
      },
      {
        title: "도전과 실행",
        description:
          "기술창업 아이디어 경진대회 금상, 창업 아이디어 공모전 우수상, TW 사업 선정 등 목표를 세우고 실행해 성과를 만든 경험이 있습니다.",
      },
    ],
  },
  projects: {
    eyebrow: "PROJECTS",
    title: "SecureDoc Cloud · Drop the Port · Web VAPT Lab",
    subtitle:
      "SecureDoc Cloud, Drop the Port, Web VAPT Lab(웹 취약점 분석) 프로젝트를 통해 애플리케이션·웹·인프라 보안을 균형 있게 경험했습니다.",
  },
  experience: {
    eyebrow: "EXPERIENCE & CERTS",
    title: "경험과 자격",
    subtitle:
      "현장 경험, 학력, 자격증, 수상 경력을 통해 보안컨설팅에 필요한 기반을 갖추고 있습니다.",
    experience: {
      heading: "Experience",
      items: [
        {
          eyebrow: "Airline Operations",
          title: "대한항공 · 여객 서비스/운영 경험",
          body:
            "항공기 지연, 환승 문제, 승객 동선 등 비정상 상황에서 여러 부서·외주업체와 협업하며 위기 대응, 조정, 커뮤니케이션 능력을 키웠습니다. 이 경험은 보안컨설팅에서 다양한 이해관계자와 소통하는 데 큰 기반이 됩니다.",
        },
      ],
    },
    education: {
      heading: "Education",
      items: [
        {
          eyebrow: "Cloud Security",
          title: "한국폴리텍대학 대전캠퍼스 · 클라우드보안과 (하이테크)",
          body:
            "클라우드 보안, 네트워크 보안, 웹 취약점 진단, Docker, Linux, AWS, 모의해킹 등 보안컨설팅에 필요한 전반적인 기술 스택을 실습 중심으로 학습 중입니다.",
        },
        {
          eyebrow: "Business Administration",
          title: "대전대학교 · 경영학과",
          body:
            "경영학 전공을 통해 비즈니스 관점, 재무·마케팅·조직 이해를 쌓았고, 이는 보안 투자·위험 관리·솔루션 영업을 이해하는 데 도움이 됩니다.",
        },
      ],
    },
    awards: {
      heading: "Awards & Activities",
      items: [
        "대전대학교 토론대회 대상",
        "한국 카네기 리더십 센터 MVP",
        "대전대학교 비전스피치 금상",
        "기술창업 아이디어 경진대회 금상",
        "창업 아이디어 공모전 우수상",
        "중소기업청/창업진흥원 TW 사업 1,000만원 지원 선정",
      ],
    },
    certifications: {
      heading: "Core Security & Network Certifications",
      items: [
        {
          name: "정보보안기사",
          detail: "국가공인 정보보안 전문가 자격",
          badge: "Security Engineer",
          accent: "emerald",
        },
        {
          name: "Cisco Certified Support Technician (CCST)",
          detail: "Cisco · Networking Fundamentals",
          badge: "Networking",
          accent: "sky",
        },
        {
          name: "네트워크관리사 2급",
          detail: "기초 네트워크 구성 및 운용 역량",
          badge: "Network",
          accent: "slate",
        },
      ],
    },
    additionalQualifications: {
      heading: "Additional Qualifications",
      items: ["정보처리기사 필기 합격", "컴퓨터활용능력 2급 필기 합격", "한국사능력검정시험 1급", "TOEIC SPEAKING IH (150점)"],
    },
  },
  contact: {
    eyebrow: "CONTACT",
    title: "함께 보안을 고민하고 싶다면",
    subtitle: "보안컨설팅, 클라우드 보안, 보안·클라우드 솔루션 영업 관련 기회에 관심이 있습니다.",
    paragraphs: [
      [
        { text: "현재는 클라우드 보안, 웹 취약점 진단, 네트워크 보안 실습을 기반으로 보안컨설턴트·클라우드 보안 엔지니어 커리어를 준비하고 있습니다. 실제 프로젝트와 문서화된 결과물을 바탕으로 " },
        { text: "현실적인 보안 대안", highlight: true },
        { text: " 을 제안할 수 있는 전문가가 되고자 합니다." },
      ],
    ] as RichParagraph[],
    email: "bluetrees88@gmail.com",
  },
};

