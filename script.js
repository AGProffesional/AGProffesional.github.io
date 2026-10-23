const carousel = document.getElementById('carousel');
const slides = carousel.children;

let currentIndex = 0;

// Smooth scroll animation
function smoothScrollTo(target) {
  const start = carousel.scrollLeft;
  const distance = target - start;
  const duration = 400;
  let startTime = null;

  function animation(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;

    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    carousel.scrollLeft = start + distance * ease;

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Move to slide
function goToSlide(index) {
  const targetSlide = slides[index];
  const targetScroll = targetSlide.offsetLeft;
  smoothScrollTo(targetScroll);
  currentIndex = index;
  updateArrows();
  updateOverlay();
}

// Update outside arrows
function updateArrows() {
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  if (currentIndex === 0) {
    prev.style.opacity = "0";
    prev.style.pointerEvents = "none";
    prev.style.cursor = "default";
  } else {
    prev.style.opacity = "1";
    prev.style.pointerEvents = "auto";
    prev.style.cursor = "pointer";
  }

  if (currentIndex === slides.length - 1) {
    next.style.opacity = "0";
    next.style.pointerEvents = "none";
    next.style.cursor = "default";
  } else {
    next.style.opacity = "1";
    next.style.pointerEvents = "auto";
    next.style.cursor = "pointer";
  }
}

// Update hover overlay arrows
function updateOverlay() {
  const left = document.getElementById("hoverLeft");
  const right = document.getElementById("hoverRight");

  if (currentIndex === 0) {
    left.style.opacity = "0";
    left.style.pointerEvents = "none";
    left.style.cursor = "default";
  } else {
    left.style.opacity = "1";
    left.style.pointerEvents = "auto";
    left.style.cursor = "pointer";
  }

  if (currentIndex === slides.length - 1) {
    right.style.opacity = "0";
    right.style.pointerEvents = "none";
    right.style.cursor = "default";
  } else {
    right.style.opacity = "1";
    right.style.pointerEvents = "auto";
    right.style.cursor = "pointer";
  }
}

// Clickable overlay arrows
document.getElementById("hoverLeft").onclick = () => {
  if (currentIndex > 0) goToSlide(currentIndex - 1);
};

document.getElementById("hoverRight").onclick = () => {
  if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1);
};

// Clickable outside arrows
document.getElementById("nextBtn").onclick = () => {
  if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1);
};

document.getElementById("prevBtn").onclick = () => {
  if (currentIndex > 0) goToSlide(currentIndex - 1);
};

// ----------------------------
// PROJECT ZOOM-IN MODAL LOGIC
// ----------------------------

const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");



// Project Content
const projectData = {

  project0: {
    content: `
      <h1 class="text-5xl font-bold mb-4">Angelo Galioto</h1>

      <h2 class="text-2xl text-black-400 mb-6">
        Aspiring AI Engineer & Software Developer
      </h2>

      <p class="text-lg mb-4">
        I build software, machine learning applications,
        and AI-powered tools with a focus on solving
        real-world problems through clean and scalable
        solutions.
      </p>

      <p class="text-lg mb-8">
        My interests include software engineering, full stack
        development, artificial intelligence, machine learning,
        and cloud technologies.
      </p>

      <div class="flex gap-4">
        <button
  onclick="window.open('https://github.com/AGProffesional', '_blank')"
  style="
    background-color: #0969da;
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  "
  onmouseover="this.style.backgroundColor='#0550ae'"
  onmouseout="this.style.backgroundColor='#0969da'"
>
  GitHub
</button>
      </div>
    `,
    images: []
  },

  project1: {
    content: `
      <h2 class="text-4xl font-bold mb-4">
        Patient Hospitalization Prediction Model
      </h2>

      <p><strong>Overview:</strong> Have you ever visited the emergency room and wondered why some patients wait so long for care? This project explores whether machine learning can help identify cases that are most likely to require hospitalization at the moment a patient enters the system.</p>

      <p><strong>Project Goal:</strong> Use anonymized emergency call data to predict whether or not a patient would be hospitalized while preserving patient privacy.</p>

      <p><strong>Technologies Used:</strong> Gaussian Naive Bayes, Logistic Regression, Random Forest, AdaBoost, XGBoost, KNN, Gradient Boosting, Ensemble Learning, Python, Seaborn, Matplotlib, NumPy, Scikit-learn.</p>

      <p><strong>Model Performance:</strong> The ensemble classifier achieved 96% accuracy, precision, recall, and F1 score, along with a 90% AUC score.</p>

      <p><strong>Challenges:</strong> Dataset imbalance and learning ensemble learning concepts for proper model selection and evaluation.</p>

      <p><strong>Lessons Learned:</strong> I gained practical experience with machine learning workflows, data preprocessing, and ensemble learning techniques.</p>

      <br>

      <button
  onclick="window.open('https://ieeexplore.ieee.org/document/10850470', '_blank')"
  style="
    background-color: #0969da;
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  "
  onmouseover="this.style.backgroundColor='#0550ae'"
  onmouseout="this.style.backgroundColor='#0969da'"
>
  View The Published Paper
</button>
    `,
    images: [
      "images/Patientmodel/metricspatient.png",
      "images/Patientmodel/hospitalvsnon.png",
      "images/Patientmodel/gendergraph.png"
    ]
  },

  project2: {
    content: `
      <h2 class="text-4xl font-bold mb-4">
        Application Tracking Tool
      </h2>

      <p><strong>Overview:</strong> The application tracking tool is a backend API that allows users to manage and organize job applications.</p>

      <p><strong>Project Goal:</strong> Create a clean API schema that supports creating and tracking job application records.</p>

      <p><strong>Technologies:</strong> FastAPI, PostgreSQL, Docker, Docker Compose, GitHub Actions, Pydantic.</p>

      <p><strong>Performance:</strong> The application successfully provides REST API endpoints for creating, retrieving, updating, and managing job application records. User-submitted data is validated through Pydantic models and stored within PostgreSQL.</p>

      <p><strong>Challenges:</strong> Dependency compatibility issues, debugging, syntax mistakes, and configuration problems.</p>

      <p><strong>Lessons Learned:</strong> I learned the value of systematic debugging, dependency management, and testing.</p>

      <br>

      <button
  onclick="window.open('https://github.com/AGProffesional/Application-Tracker-Public', '_blank')"
  style="
    background-color: #0969da;
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  "
  onmouseover="this.style.backgroundColor='#0550ae'"
  onmouseout="this.style.backgroundColor='#0969da'"
>
  View The GitHub Repository
</button>
    `,
    images: [
      "images/BackendApplication/fastapicreate.png",
      "images/BackendApplication/fastapigetall.png",
      "images/BackendApplication/filterfastapi.png"
    ]
  },

  project3: {
    content: `
      <h2 class="text-4xl font-bold mb-4">
        SIEM AI Enrichment Layer
      </h2>

      <p><strong>Overview:</strong> This project enriches SIEM alerts using AI-generated context to speed up analyst triage.</p>

      <p><strong>Project Goal:</strong> Utilize AI to improve readability and response speed for SIEM alerts.</p>

      <p><strong>Technologies:</strong> Python, PyTorch, Elastic Stack, Elastic Agent, Suricata, Deepseek Qwen, VMware Workstation, LM Studio.</p>

      <p><strong>Project Performance:</strong> Successfully generated AI-enriched alert summaries from SIEM event data and integrated enrichment into the testing environment.</p>

      <p><strong>Challenges:</strong> VM compatibility issues and lack of cybersecurity-specific training data for the language model.</p>

      <p><strong>Lessons Learned:</strong> Effective security solutions often require adapting to environmental constraints. This project demonstrated the value of building custom testing scenarios and validation methods when standard tools are incompatible or unavailable.</p>

      <br>

      <button
  onclick="window.open('https://github.com/AGProffesional/AI-Elastic-Enrichment-Pipeline', '_blank')"
  style="
    background-color: #0969da;
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  "
  onmouseover="this.style.backgroundColor='#0550ae'"
  onmouseout="this.style.backgroundColor='#0969da'"
>
  View The GitHub Repository
</button>
    `,
    images: [
      "images/SIEMAI/alert1.png",
      "images/SIEMAI/Alert2.png",
      "images/SIEMAI/Alert3.png",
      "images/SIEMAI/kibanaalerts.png"
    ]
  }
};



// Open modal when clicking a slide
document.querySelectorAll(".slide").forEach(slide => {
  slide.addEventListener("click", () => {
    const key = slide.dataset.project;
    const project = projectData[key];

modalContent.innerHTML = `
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

    <div class="lg:col-span-2">
        ${project.content}
    </div>

    <div class="space-y-4">
        ${project.images.map(img => `
            <img
                src="${img}"
                class="w-full rounded-lg shadow-md border cursor-pointer hover:scale-105 transition"
                onclick="openImageModal('${img}')"
            >
        `).join("")}
    </div>

</div>
`;
    modal.classList.remove("hidden");
    modal.style.opacity = "1";
  });
});



// Close modal
closeModal.onclick = () => {
  modal.style.opacity = "0";
  setTimeout(() => modal.classList.add("hidden"), 300);
};

// Initialize
updateArrows();
updateOverlay();

// Reset to first slide on refresh
window.onload = () => {
  currentIndex = 0;
  goToSlide(0);
};

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeImageModal = document.getElementById("closeImageModal");

function openImageModal(src)
{
    modalImage.src = src;
    imageModal.classList.remove("hidden");
}

closeImageModal.onclick = () =>
{
    imageModal.classList.add("hidden");
};

imageModal.onclick = (e) =>
{
    if (e.target === imageModal)
    {
        imageModal.classList.add("hidden");
    }
};