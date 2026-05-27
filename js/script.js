const viewButtons = Array.from(document.querySelectorAll("[data-view]"));
const jumpButtons = Array.from(document.querySelectorAll("[data-jump]"));
const viewSections = Array.from(document.querySelectorAll(".view-section"));
const summaryCards = document.getElementById("summary-cards");
const roadmapList = document.getElementById("roadmap-list");
const roadmapResources = document.getElementById("roadmap-resources");
const problemLogContainer = document.getElementById("problem-log-container");
const snippetGrid = document.getElementById("snippet-grid");
const sidebarProgress = document.getElementById("sidebar-progress");
const sidebarWeek = document.getElementById("sidebar-week");
const currentWeekTitle = document.getElementById("current-week-title");
const currentWeekDesc = document.getElementById("current-week-desc");
const overallProgress = document.getElementById("overall-progress");
const todayTaskTitle = document.getElementById("today-task-title");
const todayTaskDesc = document.getElementById("today-task-desc");
const todayTaskList = document.getElementById("today-task-list");
const goalStack = document.getElementById("goal-stack");
const searchInput = document.getElementById("search-input");
const difficultyFilter = document.getElementById("difficulty-filter");
const statusFilter = document.getElementById("status-filter");
const reviewFilter = document.getElementById("review-filter");

const state = {
  activeView: "dashboard",
  problemFilters: {
    query: "",
    difficulty: "all",
    status: "all",
    review: "all",
  },
};

function setActiveView(viewName) {
  state.activeView = viewName;

  viewSections.forEach((section) => {
    section.classList.toggle("is-active", section.id === `${viewName}-view`);
  });

  viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewName);
    button.setAttribute("aria-pressed", String(button.dataset.view === viewName));
  });

  const activeBottomItems = Array.from(document.querySelectorAll(".bottom-nav__item"));
  activeBottomItems.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewName);
    button.setAttribute("aria-pressed", String(button.dataset.view === viewName));
  });
}

function getDifficultyBadge(difficulty) {
  const label = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  const className =
    difficulty === "easy"
      ? "badge--success"
      : difficulty === "medium"
        ? "badge--warning"
        : "badge--danger";
  return `<span class="badge ${className}">${label}</span>`;
}

function getStatusBadge(status) {
  const meta = {
    completed: { label: "Completed", className: "badge--success", icon: "✓" },
    review: { label: "Review Needed", className: "badge--warning", icon: "!" },
    failed: { label: "Failed", className: "badge--danger", icon: "×" },
    locked: { label: "Locked", className: "badge--muted", icon: "⌁" },
    "in-progress": { label: "In Progress", className: "badge--accent", icon: "→" },
  };
  const current = meta[status] || meta.locked;
  return `<span class="badge ${current.className}">${current.icon} ${current.label}</span>`;
}

function renderDashboard() {
  summaryCards.innerHTML = dashboardSummaryData.stats
    .map(
      (stat) => `
        <article class="card status-card">
          <p class="section-label">${stat.label}</p>
          <p class="status-card__value">${stat.value}</p>
          <p class="status-card__label">${stat.detail}</p>
        </article>
      `,
    )
    .join("");

  sidebarProgress.textContent = `${dashboardSummaryData.overallProgress}%`;
  sidebarWeek.textContent = `${dashboardSummaryData.currentWeek}주차`;
  currentWeekTitle.textContent = dashboardSummaryData.currentWeekTitle;
  currentWeekDesc.textContent = dashboardSummaryData.currentWeekDescription;
  overallProgress.textContent = `${dashboardSummaryData.overallProgress}%`;
  document
    .querySelector(".progress-ring")
    ?.style.setProperty("--progress", `${dashboardSummaryData.overallProgress}%`);

  todayTaskTitle.textContent = dashboardSummaryData.todayTask.title;
  todayTaskDesc.textContent = dashboardSummaryData.todayTask.description;
  todayTaskList.innerHTML = dashboardSummaryData.todayTask.checklist
    .map((item) => `<li>${item}</li>`)
    .join("");

  goalStack.innerHTML = dashboardSummaryData.goals
    .map(
      (goal, index) => `
        <div class="goal-chip">
          <span class="badge badge--accent">${index + 1}</span>
          <span>${goal}</span>
        </div>
      `,
    )
    .join("");
}

function renderRoadmap() {
  roadmapList.innerHTML = roadmapData
    .map((week) => {
      const statusClass =
        week.status === "completed"
          ? "is-complete"
          : week.status === "in-progress"
            ? "is-active"
            : "is-locked";
      const statusLabel = getStatusBadge(week.status);
      return `
        <article class="roadmap-card ${statusClass}">
          <div class="roadmap-card__top">
            <div>
              <p class="section-label">${week.week}</p>
              <h4 class="card-title">${week.title}</h4>
              <p class="card-text">${week.summary}</p>
            </div>
            ${statusLabel}
          </div>
          <div class="roadmap-card__meta" style="margin-top: 14px;">
            <span class="badge badge--muted">${week.keyConcepts}</span>
          </div>
          <ul class="roadmap-card__list">
            ${week.learningGoals.map((goal) => `<li>${goal}</li>`).join("")}
          </ul>
          <div class="roadmap-card__meta" style="margin-top: 14px; flex-wrap: wrap;">
            ${week.recommendedProblems.map((problem) => `<span class="badge badge--accent">${problem}</span>`).join("")}
          </div>
        </article>
      `;
    })
    .join("");

  roadmapResources.innerHTML = [
    "문제는 쉬운 유형부터 빠르게 손으로 풀어보기",
    "오답은 다음 날 아침에 10분만 다시 확인하기",
    "정답보다 풀이 과정을 먼저 설명할 수 있어야 합니다",
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function matchesFilters(problem) {
  const query = state.problemFilters.query.trim().toLowerCase();
  const matchesQuery =
    !query ||
    [problem.title, problem.topic, problem.memo].some((value) =>
      value.toLowerCase().includes(query),
    );
  const matchesDifficulty =
    state.problemFilters.difficulty === "all" ||
    problem.difficulty === state.problemFilters.difficulty;
  const matchesStatus =
    state.problemFilters.status === "all" || problem.status === state.problemFilters.status;
  const matchesReview =
    state.problemFilters.review === "all" ||
    (state.problemFilters.review === "yes" ? problem.reviewNeeded : !problem.reviewNeeded);

  return matchesQuery && matchesDifficulty && matchesStatus && matchesReview;
}

function renderProblemTable(problems) {
  const rows = problems
    .map(
      (problem) => `
        <tr>
          <td>${problem.title}</td>
          <td>${problem.topic}</td>
          <td>${getDifficultyBadge(problem.difficulty)}</td>
          <td>${getStatusBadge(problem.status)}</td>
          <td>${problem.reviewNeeded ? '<span class="badge badge--warning">복습 필요</span>' : '<span class="badge badge--success">OK</span>'}</td>
          <td>${problem.solvedDate}</td>
          <td>
            <div class="table-cell-stack">
              <div>${problem.memo}</div>
              <div class="snippet-card__meta">
                <span class="badge badge--muted">${problem.timeComplexity}</span>
                <span class="badge badge--muted">${problem.spaceComplexity}</span>
              </div>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");

  return `
    <div class="problem-table-wrap table-wrap">
      <table class="problem-table">
        <thead>
          <tr>
            <th scope="col">문제명</th>
            <th scope="col">주제</th>
            <th scope="col">난이도</th>
            <th scope="col">상태</th>
            <th scope="col">복습</th>
            <th scope="col">풀이일</th>
            <th scope="col">메모</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}

function renderProblemCards(problems) {
  return `
    <div class="problem-card-list">
      ${problems
        .map(
          (problem) => `
            <article class="problem-card">
              <div class="problem-card__top">
                <div>
                  <h4 class="problem-card__title">${problem.title}</h4>
                  <p class="card-text">${problem.topic}</p>
                </div>
                ${getDifficultyBadge(problem.difficulty)}
              </div>
              <div class="problem-card__meta">
                <div class="meta-row"><span>상태</span><strong>${problem.status === "completed" ? "Completed" : problem.status === "review" ? "Review Needed" : "Failed"}</strong></div>
                <div class="meta-row"><span>복습 필요</span><strong>${problem.reviewNeeded ? "필요" : "불필요"}</strong></div>
                <div class="meta-row"><span>풀이일</span><strong>${problem.solvedDate}</strong></div>
                <p class="card-text">${problem.memo}</p>
                <div class="snippet-card__meta">
                  <span class="badge badge--muted">${problem.timeComplexity}</span>
                  <span class="badge badge--muted">${problem.spaceComplexity}</span>
                  ${getStatusBadge(problem.status)}
                </div>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderEmptyState() {
  return `
    <div class="card empty-state">
      <div class="empty-state__icon" aria-hidden="true">⌁</div>
      <h4 class="card-title">검색 결과가 없습니다.</h4>
      <p class="empty-state__text">조건을 바꾸거나 검색어를 지워서 다시 찾아보세요.</p>
    </div>
  `;
}

function renderProblemLog() {
  const filteredProblems = problemLogData.filter(matchesFilters);
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const markup =
    filteredProblems.length > 0
      ? `${isMobile ? renderProblemCards(filteredProblems) : renderProblemTable(filteredProblems)}`
      : renderEmptyState();

  problemLogContainer.innerHTML = markup;
}

function renderSnippets() {
  snippetGrid.innerHTML = snippetData
    .map(
      (snippet) => `
        <article class="card snippet-card" data-snippet-id="${snippet.id}">
          <div class="snippet-card__top">
            <div>
              <p class="section-label">${snippet.language}</p>
              <h4 class="snippet-card__title">${snippet.title}</h4>
            </div>
            <button
              type="button"
              class="copy-btn"
              data-copy-target="${snippet.id}"
              aria-label="${snippet.title} 코드 복사"
            >
              <span aria-hidden="true">⧉</span>
              <span>Copy</span>
            </button>
          </div>
          <p class="snippet-card__desc">${snippet.description}</p>
          <div class="snippet-card__meta">
            <span class="badge badge--accent">${snippet.concept}</span>
            <span class="badge badge--muted">${snippet.timeComplexity}</span>
            <span class="badge badge--muted">${snippet.spaceComplexity}</span>
          </div>
          <div class="code-block">
            <pre><code>${escapeHtml(snippet.code)}</code></pre>
          </div>
          <div class="snippet-card__footer">
            <span>Time: ${snippet.timeComplexity}</span>
            <span>Space: ${snippet.spaceComplexity}</span>
          </div>
          <div class="copy-feedback" id="${snippet.id}-feedback" aria-live="polite"></div>
        </article>
      `,
    )
    .join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function copyCodeSnippet(snippetId) {
  const snippet = snippetData.find((item) => item.id === snippetId);
  if (!snippet) {
    return;
  }

  try {
    await navigator.clipboard.writeText(snippet.code);
    showCopyFeedback(snippetId, "Copied!");
  } catch {
    showCopyFeedback(snippetId, "Copy failed");
  }
}

function showCopyFeedback(snippetId, message) {
  const feedback = document.getElementById(`${snippetId}-feedback`);
  if (!feedback) {
    return;
  }

  feedback.textContent = message;
  window.clearTimeout(feedback.timeoutId);
  feedback.timeoutId = window.setTimeout(() => {
    feedback.textContent = "";
  }, 1500);
}

function bindEvents() {
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveView(button.dataset.view));
  });

  jumpButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveView(button.dataset.jump));
  });

  searchInput.addEventListener("input", (event) => {
    state.problemFilters.query = event.target.value;
    renderProblemLog();
  });

  [difficultyFilter, statusFilter, reviewFilter].forEach((element) => {
    element.addEventListener("change", () => {
      state.problemFilters.difficulty = difficultyFilter.value;
      state.problemFilters.status = statusFilter.value;
      state.problemFilters.review = reviewFilter.value;
      renderProblemLog();
    });
  });

  problemLogContainer.addEventListener("click", (event) => {
    const copyTarget = event.target.closest("[data-copy-target]");
    if (copyTarget) {
      copyCodeSnippet(copyTarget.dataset.copyTarget);
    }
  });

  snippetGrid.addEventListener("click", (event) => {
    const copyTarget = event.target.closest("[data-copy-target]");
    if (copyTarget) {
      copyCodeSnippet(copyTarget.dataset.copyTarget);
    }
  });

  window.addEventListener("resize", () => {
    renderProblemLog();
  });
}

function init() {
  renderDashboard();
  renderRoadmap();
  renderProblemLog();
  renderSnippets();
  bindEvents();
  setActiveView("dashboard");
}

document.addEventListener("DOMContentLoaded", init);
