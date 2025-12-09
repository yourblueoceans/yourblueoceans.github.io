export type ExperienceType = "work" | "activity";

export type ExperienceItem = {
  id: string;
  type: ExperienceType;
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "koreanair",
    type: "work",
    period: "2023.02.06. ~ 2023.08.31.",
    title: "대한항공 (San Francisco Int'l Airport)",
    subtitle: "지상직 (미주본부)",
    description: "고객 응대, 탑승 수속, 현장 이슈 대응 등",
    tags: ["고객응대", "현장대응", "여객운영"],
  },
  {
    id: "apotheco",
    type: "work",
    period: "2022.03. ~ 2023.01.",
    title: "Apotheco Pharmacy Choice Bay Area (Pleasanton)",
    subtitle: "미국 약국 근무",
    description: "처방 관련 업무 보조, 고객 응대, 재고/문서 관리",
    tags: ["고객응대", "처방보조", "문서관리"],
  },
  {
    id: "computer-ahnex",
    type: "work",
    period: "2021.01. ~ 2021.08.",
    title: "Computer Ahnex (Los Angeles)",
    subtitle: "컴퓨터 판매·수리점",
    description: "HW 진단, 수리, 고객 상담, 재고 관리",
    tags: ["HW Diagnostics", "고객상담", "재고관리"],
  },
  {
    id: "white-desk",
    type: "work",
    period: "2017.05. ~ 2018.03.",
    title: "하얀책상 4호점 (대전 갈마지점)",
    subtitle: "카페 운영 관련 실무",
    description: "매장 관리, 고객 응대, 현장 운영",
    tags: ["매장운영", "고객응대"],
  },
  {
    id: "lao-korea",
    type: "work",
    period: "2015.02. ~ 2016.09.",
    title: "LAO-KOREA SCIENCE AND TECHNOLOGY CENTER (루앙프라방, 라오스)",
    subtitle: "코디네이터/운영 지원",
    description: "현지 프로젝트 지원, 행정/운영 보조",
    tags: ["운영지원", "행정", "코디네이션"],
  },
  {
    id: "mentoring",
    type: "activity",
    period: "2013.09 ~ 2013.12.",
    title: "창업진흥원 고등학생 대상 멘토링",
    description: "고등학생 대상 멘토링 활동",
    tags: ["멘토링", "교육지원"],
  },
  {
    id: "tw-plan",
    type: "activity",
    period: "2013.04 ~ 2014.05.",
    title: "중소기업청·창업진흥원 TW 사업계획서 및 운영",
    description: "TW 사업계획서 작성 및 운영 지원",
    tags: ["사업계획", "운영지원"],
  },
  {
    id: "kentech",
    type: "activity",
    period: "2010.05 ~ 2010.08.",
    title: "한국에너지기술연구원 청정연료 팀 근로장학생",
    description: "청정연료 팀 연구 지원 근로",
    tags: ["연구지원", "근로장학생"],
  },
];
