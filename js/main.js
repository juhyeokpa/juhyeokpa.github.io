document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "Backend Developer",
    "Spring Boot & FastAPI",
    "AI Service Backend",
    "Clean & Scalable Code"
  ];

  let textIndex = 0;
  let charIndex = 0;
  const textElement = document.getElementById("changing-text");

  function typeEffect() {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 80);
    } else {
      setTimeout(() => {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        textElement.textContent = "";
        typeEffect();
      }, 1500);
    }
  }

  textElement.textContent = "";
  typeEffect();
});

// 버튼 선택
const toggleBtn = document.getElementById("theme-toggle");

// 초기 로드 시 localStorage 확인
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️"; // 다크모드면 햇살 아이콘
} else {
  toggleBtn.textContent = "🌙"; // 라이트모드면 달 아이콘
}

// 버튼 클릭 이벤트
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark"); // 저장
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light"); // 저장
  }
});

const books = document.querySelectorAll('.book');
const projects = document.querySelectorAll('.project-detail');

books.forEach(book => {
  book.addEventListener('click', () => {
    // 모든 프로젝트 숨기기
    projects.forEach(p => p.style.display = 'none');

    // 클릭한 책과 연결된 프로젝트 보여주기
    const projectId = book.dataset.project;
    document.getElementById(projectId).style.display = 'block';
  });
});

