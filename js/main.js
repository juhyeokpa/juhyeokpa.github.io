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

// Let's Go Button
const goBtn = document.querySelector('.go-btn');
if (goBtn) {
  goBtn.addEventListener('click', () => {
    // 페이드 아웃 이펙트
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    
    // 0.5초 후 페이지 이동
    setTimeout(() => {
      window.location.href = 'about.html';
    }, 500);
  });
}

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

// Scroll Animation with Intersection Observer
const sectionItems = document.querySelectorAll('.section-item');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sectionItems.forEach(item => {
  observer.observe(item);
});


const skillCards = document.querySelectorAll('.skill-card');
const skillModal = document.getElementById('skillModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.querySelector('.modal-close');

if (skillCards && skillCards.length > 0 && skillModal && modalTitle && modalDescription) {
  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      const skill = card.dataset.skill;
      const description = card.dataset.description;
      
      modalTitle.textContent = skill;
      modalDescription.textContent = description;
      skillModal.classList.add('active');
    });
  });
}

if (skillModal && modalClose) {
  modalClose.addEventListener('click', () => {
    skillModal.classList.remove('active');
  });

  skillModal.addEventListener('click', (e) => {
    if (e.target === skillModal) {
      skillModal.classList.remove('active');
    }
  });
}

// Image Modal
const awardImages = document.querySelectorAll('.award-images img');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

if (awardImages.length > 0 && imageModal) {
  awardImages.forEach(img => {
    img.addEventListener('click', () => {
      modalImage.src = img.src;
      imageModal.classList.add('active');
    });
  });

  // Close button
  const imageModalClose = imageModal.querySelector('.modal-close');
  if (imageModalClose) {
    imageModalClose.addEventListener('click', () => {
      imageModal.classList.remove('active');
    });
  }

  // Click outside to close
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove('active');
    }
  });
}

