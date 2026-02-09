const cards = document.querySelectorAll(".project-card");

const title = document.getElementById("detail-title");
const summary = document.getElementById("detail-summary");
const problem = document.getElementById("detail-problem");
const role = document.getElementById("detail-role");
const tech = document.getElementById("detail-tech");

const empty = document.querySelector(".empty-state");
const content = document.querySelector(".detail-content");

const data = {
  healthcare: {
    title: "노동자 헬스케어 시스템",
    summary: "CCTV 기반 동작 분석 및 부상 예방 시스템",
    problem: "현장 근로자의 근골격계 부상 위험",
    role: "백엔드 및 AI 연동",
    tech: "Spring Boot, FastAPI, OpenAI"
  },
  family: {
    title: "AI 기반 가족 소통 플랫폼",
    summary: "심리 분석 기반 대화 추천",
    problem: "가족 간 소통 단절",
    role: "API 설계 및 챗봇 로직",
    tech: "FastAPI, OpenAI, PostgreSQL"
  },
  law: {
    title: "법률 도메인 특화 AI 챗봇",
    summary: "법률 문서 자동 생성",
    problem: "법률 정보 접근성 부족",
    role: "도메인 프롬프트 설계",
    tech: "Spring Boot, RAG"
  }
};

cards.forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.project;
    const project = data[key];

    title.textContent = project.title;
    summary.textContent = project.summary;
    problem.textContent = project.problem;
    role.textContent = project.role;
    tech.textContent = project.tech;

    empty.classList.add("hidden");
    content.classList.remove("hidden");
  });
});
