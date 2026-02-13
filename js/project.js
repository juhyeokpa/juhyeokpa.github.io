const cards = document.querySelectorAll(".project-card");

const title = document.getElementById("detail-title");
const summary = document.getElementById("detail-summary");
const problem = document.getElementById("detail-problem");
const role = document.getElementById("detail-role");
const tech = document.getElementById("detail-tech");

const empty = document.querySelector(".empty-state");
const content = document.querySelector(".detail-content");

const video = document.getElementById("detail-video");
const videoSource = document.getElementById("detail-video-source");

const pharmacySection = document.getElementById("pharmacy-gallery-section");
const pharmacyGallery = document.getElementById("pharmacy-gallery");
const pharmacyEmpty = document.getElementById("pharmacy-gallery-empty");
const pharmacyPreviewImage = document.getElementById("pharmacy-preview-image");
const pharmacyPreviewEmpty = document.getElementById("pharmacy-preview-empty");
const pharmacyImages = [
  "assets/척척약사/home.jpg",
  "assets/척척약사/1.jpg",
  "assets/척척약사/2.jpg",
  "assets/척척약사/3.jpg",
  "assets/척척약사/4.jpg",
  "assets/척척약사/login.jpg",
  "assets/척척약사/main.jpg",
  "assets/척척약사/photo.jpg",
  "assets/척척약사/search.jpg",
  "assets/척척약사/5.jpg",
  "assets/척척약사/time.jpg",
  "assets/척척약사/time2.jpg",
  "assets/척척약사/alarm.jpg",
  "assets/척척약사/Activity Diagram.jpg",
  "assets/척척약사/Activity Diagram2.jpg",
  "assets/척척약사/Communication Diagram.jpg",
  "assets/척척약사/classdiagram.jpg",
  "assets/척척약사/State Diagram.jpg",
  "assets/척척약사/시퀀스1.jpg",
  "assets/척척약사/시퀀스2.jpg"
];
let pharmacyGalleryReady = false;
let activeThumbnail = null;


const data = {
  healthcare: {
    title: "노동자 헬스케어 시스템",
    summary: "CCTV 기반 동작 분석 및 부상 예방 시스템",
    problem: "현장 근로자의 근골격계 부상 위험",
    role: "백엔드 및 AI 연동",
    tech: "Python, FastAPI, OpenAI"
  },
  family: {
    title: "AI 기반 가족 소통 플랫폼",
    summary: "심리 분석 기반 대화 추천",
    problem: "가족 간 소통 단절",
    role: "API 설계 및 챗봇 로직",
    tech: "Spring Boot,FastAPI, OpenAI, MYSQL",
    video: "assets/일단가족.mp4"
  },
  law: {
    title: "법률 도메인 특화 AI 챗봇",
    summary: "법률 문서 자동 생성",
    problem: "법률 정보 접근성 부족",
    role: "도메인 프롬프트 설계",
    tech: "Python, RAG, OpenAI"
  },
  pharmacy: {
    title: "척척약사",
    summary: "의약품 관리 및 처방 시스템",
    problem: "의약품 관리의 복잡성 및 처방 오류",
    role: "풀스택 개발 및 데이터베이스 설계,아키텍처 설계,데이터 흐름 설계,API 구조 설계",
    tech: "python,JAVA, Swift, PostgreSQL",
    video: "assets/척척약사/ppt.mp4"
  }
};

const buildPharmacyGallery = () => {
  if (!pharmacyGallery || pharmacyGalleryReady) {
    return;
  }

  const isDiagram = (src) => /diagram|Diagram|시퀀스/.test(src);
  const diagramImages = pharmacyImages.filter(isDiagram);
  const screenImages = pharmacyImages.filter((src) => !isDiagram(src));

  const selectPreview = (src, thumb) => {
    if (!pharmacyPreviewImage || !pharmacyPreviewEmpty) {
      return;
    }

    pharmacyPreviewImage.src = src;
    pharmacyPreviewImage.classList.remove("hidden");
    pharmacyPreviewEmpty.classList.add("hidden");

    if (activeThumbnail) {
      activeThumbnail.classList.remove("is-active");
    }

    if (thumb) {
      thumb.classList.add("is-active");
      activeThumbnail = thumb;
    }
  };

  const createGroup = (titleText, images) => {
    const group = document.createElement("div");
    group.className = "pharmacy-gallery-group";

    const title = document.createElement("h4");
    title.textContent = titleText;
    group.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "pharmacy-gallery-grid";

    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "척척약사 이미지";
      img.loading = "lazy";
      img.addEventListener("click", () => selectPreview(src, img));
      grid.appendChild(img);
    });

    group.appendChild(grid);
    pharmacyGallery.appendChild(group);
  };

  if (diagramImages.length) {
    createGroup("다이어그램", diagramImages);
  }

  if (screenImages.length) {
    createGroup("화면", screenImages);
  }

  pharmacyGalleryReady = true;
};

const showPharmacyGallery = () => {
  if (!pharmacySection || !pharmacyGallery || !pharmacyEmpty) {
    return;
  }

  buildPharmacyGallery();
  pharmacyGallery.classList.remove("hidden");
  pharmacyEmpty.classList.add("hidden");
};

const hidePharmacyGallery = () => {
  if (!pharmacySection || !pharmacyGallery || !pharmacyEmpty) {
    return;
  }

  pharmacyGallery.classList.add("hidden");
  pharmacyEmpty.classList.remove("hidden");

  if (pharmacyPreviewImage && pharmacyPreviewEmpty) {
    pharmacyPreviewImage.classList.add("hidden");
    pharmacyPreviewImage.src = "";
    pharmacyPreviewEmpty.classList.remove("hidden");
  }

  if (activeThumbnail) {
    activeThumbnail.classList.remove("is-active");
    activeThumbnail = null;
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

    // 🎬 비디오 처리
    if (project.video) {
      videoSource.src = project.video;
      video.load();
      video.classList.remove("hidden");
      video.play().catch(() => {
        // Autoplay can be blocked by the browser.
      });
    } else {
      video.pause();
      video.classList.add("hidden");
    }

    if (key === "pharmacy") {
      showPharmacyGallery();
    } else {
      hidePharmacyGallery();
    }

    empty.classList.add("hidden");
    content.classList.remove("hidden");
  });
});
