const data = [
  {
    title: "IT Support",
    content: "IT support is a service that offers assistance and solutions",
  },
  {
    title: "HR Systems",
    content: "Manage Employee life cycle from recruitement to onboarding...",
  },
  {
    title: "Modern Workspace",
    content: "A workspace is a technology framework that support business",
  },
  {
    title: "SAP Systems",
    content: "Manage business operations and customer relations",
  },
];

const container = document.getElementById("cards-container");
console.log(container);
data.map((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div>
      <h3>${item.title}</h3>
      <p>${item.content}</p>
      </div>
      <div class="cardflex">
      <button class = "card-button">
      <div>
       →
       </div>
        </button>
        </div>
    `;
  container.appendChild(card);
});

const select = document.querySelector("#select");
const dataSelect = [
  {
    image: "images/departmentBgImage.jpg",
    title: "FINANCE",
    content: "Manage finncial asset of money, currency and capital assets",
    button: "→ Learn More",
  },
  {
    image: "images/departmentBgImage.jpg",
    title: "CORPORATE FINANCE",
    content:
      "Managing funding sources, capital structuring, Accounting and Investment",
    button: "→ Learn More",
  },
];

dataSelect.map((item) => {
  const card = document.createElement("div");
  card.classList.add("newcard");
  card.innerHTML = `
      <div class="imagecardnew">
      <img src="${item.image}" alt="err">
      </div>
      <div class="rightcard">
      <h1>${item.title}</h1>
      <p>${item.content}</p>
      <button class = "">
        ${item.button}
        </button>
        </div>
    `;
  select.appendChild(card);
});

const datalast = [
  {
    image: "images/departmentBgImage.jpg",
    title: "EMPLOYEE GUIDELINES",
    created: `Created: 17 May 2024&nbsp;&nbsp;|&nbsp;&nbsp;Type:
            PDF&nbsp;&nbsp;|&nbsp;&nbsp;Size: 3.5 MB`,
    button: "Open",
    button2: "Download",
  },
  {
    image: "images/departmentBgImage.jpg",
    title: "EMPLOYEE HANDBOOK 2019 ENGLISH",
    created: `Created: 17 May 2024&nbsp;&nbsp;|&nbsp;&nbsp;Type:
            PDF&nbsp;&nbsp;|&nbsp;&nbsp;Size: 3.5 MB`,
    button: "Open",
    button2: "Download",
  },
  {
    image: "images/departmentBgImage.jpg",
    title: "PERFORMANCE HANDBOOK 2019 ARABIC",
    created: `Created: 17 May 2024&nbsp;&nbsp;|&nbsp;&nbsp;Type:
            PDF&nbsp;&nbsp;|&nbsp;&nbsp;Size: 3.5 MB`,
    button: "Open",
    button2: "Download",
  },
  {
    image: "images/departmentBgImage.jpg",
    title: "PERFORMANCE HANDBOOK 2019 ENGLISH",
    created: `Created: 17 May 2024&nbsp;&nbsp;|&nbsp;&nbsp;Type:
            PDF&nbsp;&nbsp;|&nbsp;&nbsp;Size: 3.5 MB`,
    button: "Open",
    button2: "Download",
  },
];
const lastContainer = document.querySelector(".containerlast");

datalast.map((item, index) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-wrapper");

  const card = document.createElement("div");
  card.classList.add("lastcard");

  if (index % 2 === 0) {
    card.classList.add("from-left");
  } else {
    card.classList.add("from-right");
  }

  card.innerHTML = `
      <div class="document-card">
        <img
          src="${item.image}"
          alt="Performance Handbook 2019 English"
          class="document-image"
        />
        <div class="document-content">
          <h3 class="document-title">${item.title}</h3>
          <p class="document-info">
            Created: 17 May 2024&nbsp;&nbsp;|&nbsp;&nbsp;Type:
            PDF&nbsp;&nbsp;|&nbsp;&nbsp;Size: 3.5 MB
          </p>
          <div class="document-buttons">
            <button class="open-btn">Open</button>
            <button class="download-btn">Download</button>
          </div>
        </div>
      </div>
    `;

  cardWrapper.appendChild(card);
  lastContainer.appendChild(cardWrapper);
});

// const element = document.querySelector(".bg-half");
// console.log(element);
// const rect = element.getBoundingClientRect();

// console.log("X:", rect.x, "Y:", rect.y);
// console.log("Width:", rect.width, "Height:", rect.height);

const allSections = document.querySelectorAll(".section");
// Animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
        console.log(entry);
        console.log(entry.target);
      }
    });
  }, options);

  const elements = document.querySelectorAll(
    ".from-left, .from-right, .demo, .bg-half"
  );
  elements.forEach((element) => {
    observer.observe(element);
  });
});

const backGround = document.querySelector(".background");
const button = document.querySelector(".hidden");
const body = document.querySelector(".main");
const navEl = document.querySelector(".navEL");
const hiddenButton = document.querySelector(".btn-hidden");
hiddenButton.addEventListener("click", function () {
  body.classList.remove(".background");
  backGround.style.display = "none";
  navEl.style.display = "block";
  navEl.style.padding = " 2% 5%";
  navEl.style.margin = "0";
  hiddenButton.style.display = "none";
  button.style.display = "block";
});
const img = "images/ahcBg.jpg";
button.addEventListener("click", function () {
  body.classList.add(".background");
  backGround.style.display = "flex";
  backGround.style.margin = "50px auto";
  navEl.style.padding = "0";
  navEl.style.margin = "0 0 0 44px";
  navEl.style.display = "none";
  hiddenButton.style.display = "block";
  button.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    navEl.style.display = "flex";
    navEl.classList.add(".navEL");
    hiddenButton.style.display = "none";
    button.style.display = "none";
  } else if (window.innerWidth < 900) {
    navEl.style.display = "none";
    hiddenButton.style.display = "block ";
  }
});
