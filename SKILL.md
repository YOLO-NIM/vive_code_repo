---
name: javaprep-static-web
description: |
  JavaPrep Elite 프로젝트를 DESIGN.md 기준에 맞춰 HTML, CSS, Vanilla JavaScript로 구현하는 스킬입니다.
  초보 및 주니어 개발자를 위한 6주 Java 코딩 테스트 학습 관리 웹앱을 정적 웹 기술로 구현합니다.
  React, Vite, TypeScript 없이 CSS Variables, Flexbox, Grid, Media Query, mock data 기반 JavaScript를 사용합니다.
  디자인 토큰, 컴포넌트 상태, 반응형 레이아웃, 접근성 기준은 DESIGN.md를 최우선으로 따릅니다.
---

# JavaPrep Elite Static Web 구현 스킬

이 스킬은 **JavaPrep Elite** 프로젝트를 `DESIGN.md` 기준에 맞춰  
**HTML, CSS, Vanilla JavaScript**만으로 구현하기 위한 전체 워크플로와 규칙을 정의합니다.

JavaPrep Elite는 초보 및 주니어 개발자가 6주 동안 Java 코딩 테스트를 체계적으로 준비할 수 있도록 돕는 학습 관리 웹 애플리케이션입니다.

---

## 스킬 목적

이 스킬의 목적은 다음과 같습니다.

1. `DESIGN.md`에 정의된 UI/UX 기준을 실제 정적 웹 페이지로 구현한다.
2. 현재 학습 범위인 HTML, CSS, JavaScript만 사용한다.
3. React, Vite, TypeScript 없이도 컴포넌트 기반 사고방식을 적용한다.
4. 디자인 토큰, 반응형 레이아웃, 접근성 기준을 일관되게 유지한다.
5. GitHub Pages로 배포 가능한 정적 웹앱 구조를 만든다.

---

## 사용 기술 범위

### 사용하는 기술

| 기술               | 용도                                           |
| ------------------ | ---------------------------------------------- |
| HTML5              | 페이지 구조 및 시맨틱 마크업                   |
| CSS3               | 스타일, 레이아웃, 반응형 디자인                |
| Vanilla JavaScript | 화면 전환, 필터링, 복사 기능, mock data 렌더링 |
| CSS Variables      | 디자인 토큰 관리                               |
| Flexbox            | 단순 정렬 및 컴포넌트 내부 배치                |
| CSS Grid           | 카드 목록, 대시보드 레이아웃                   |
| Media Query        | 데스크톱, 태블릿, 모바일 반응형 처리           |
| GitHub Pages       | 정적 웹 배포                                   |

### 초기 버전에서 사용하지 않는 기술

초기 구현에서는 다음 기술을 사용하지 않습니다.

- React
- Vite
- TypeScript
- Next.js
- Tailwind CSS
- 외부 상태 관리 라이브러리
- 서버 API
- 데이터베이스
- 인증 기능

> 이 프로젝트는 현재 학습 수준에 맞춰 HTML, CSS, JavaScript의 기본기를 충분히 연습하는 것을 우선합니다.

---

## 참조 문서

에이전트는 작업 전 반드시 아래 문서를 확인합니다.

| 문서        | 역할                                                   |
| ----------- | ------------------------------------------------------ |
| `DESIGN.md` | UI/UX, 디자인 토큰, 컴포넌트 상태, 반응형, 접근성 기준 |
| `SKILL.md`  | HTML/CSS/JS 구현 워크플로와 기술 규칙                  |
| `AGENT.md`  | AI 에이전트의 작업 태도, 응답 방식, 수정 원칙          |
| `README.md` | 프로젝트 소개, 실행 방법, 배포 정보                    |

우선순위는 다음과 같습니다.

```txt
DESIGN.md > SKILL.md > AGENT.md > README.md
```

디자인 또는 구현 방식이 충돌할 경우 `DESIGN.md`를 최우선 기준으로 삼습니다.

---

## 권장 프로젝트 구조

에이전트는 다음 구조를 기준으로 파일을 생성하거나 수정합니다.

```txt
javaprep-elite/
├─ README.md
├─ DESIGN.md
├─ SKILL.md
├─ AGENT.md
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  ├─ data.js
│  └─ script.js
└─ assets/
   ├─ images/
   └─ icons/
```

### 파일별 역할

| 파일            | 역할                                                |
| --------------- | --------------------------------------------------- |
| `index.html`    | 전체 화면 구조, 시맨틱 마크업                       |
| `css/style.css` | 디자인 토큰, 레이아웃, 컴포넌트 스타일, 반응형      |
| `js/data.js`    | 로드맵, 문제 기록, 코드 스니펫 등 mock data         |
| `js/script.js`  | 화면 렌더링, 탭 전환, 필터링, 복사 기능 등 인터랙션 |
| `assets/`       | 이미지, 아이콘, 기타 정적 리소스                    |

---

## 에이전트 실행 워크플로

이 스킬을 활성화하면 에이전트는 아래 단계를 순서대로 수행합니다.

---

### Step 1 — 문서와 현재 상태 확인

먼저 프로젝트 문서와 현재 파일 구조를 확인합니다.

```bash
ls
```

확인할 문서:

```txt
DESIGN.md
SKILL.md
AGENT.md
README.md
```

에이전트는 다음 사항을 먼저 파악합니다.

- 프로젝트가 JavaPrep Elite인지
- 현재 구현된 파일이 있는지
- `DESIGN.md`의 디자인 토큰과 컴포넌트 규칙이 무엇인지
- 사용자가 요청한 작업이 신규 구현인지, 수정인지, 검수인지
- 기존 코드가 있다면 어떤 파일을 수정해야 하는지

> `DESIGN.md`를 확인하지 않고 UI 구현을 시작하지 않습니다.

---

### Step 2 — 파일 구조 생성 또는 점검

필요한 파일이 없다면 아래 구조를 생성합니다.

```bash
mkdir -p css js assets/images assets/icons
touch index.html css/style.css js/data.js js/script.js
```

단, 이미 파일이 존재하는 경우에는 덮어쓰지 않고 기존 구조를 먼저 확인합니다.

확인 기준:

- `index.html`이 존재하는가?
- `css/style.css`가 연결되어 있는가?
- `js/data.js`, `js/script.js`가 연결되어 있는가?
- mock data가 HTML 내부에 직접 하드코딩되어 있지 않은가?

---

### Step 3 — 디자인 토큰 구현

`css/style.css` 최상단에 `DESIGN.md` 기준의 CSS 변수를 정의합니다.

예시:

```css
:root {
  --color-primary: #00236f;
  --color-primary-hover: #001a52;
  --color-secondary: #b45309;
  --color-secondary-hover: #92400e;
  --color-accent-light: #fef3c7;

  --color-bg-app: #f7f9fb;
  --color-surface: #ffffff;
  --color-surface-hover: #f1f5f9;
  --color-surface-dim: #f8fafc;

  --color-border: #d8dadc;
  --color-border-variant: #e2e8f0;

  --color-text-main: #1e293b;
  --color-text-muted: #64748b;

  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;

  --color-code-bg: #1e293b;
  --color-focus-ring: #3b82f6;
}
```

### 디자인 토큰 규칙

- 주요 색상은 CSS 변수로 선언합니다.
- 컴포넌트에서 hex 코드를 반복 사용하지 않습니다.
- 새로운 색상을 임의로 추가하지 않습니다.
- 투명도가 필요한 배지 배경은 `rgba()` 사용을 허용합니다.
- 기존 토큰으로 해결 가능한 스타일은 반드시 기존 토큰을 재사용합니다.

---

### Step 4 — HTML 기본 레이아웃 구현

`index.html`은 다음 주요 영역을 포함해야 합니다.

```txt
.app
├─ sidebar / bottom navigation
├─ top app bar
└─ main content
   ├─ dashboard section
   ├─ roadmap section
   ├─ problem log section
   └─ snippets section
```

사용해야 하는 시맨틱 태그:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `aside`
- `footer`
- `button`
- `table`
- `thead`
- `tbody`
- `label`
- `input`
- `select`

### HTML 작성 규칙

- 버튼 역할은 `div`가 아니라 `button`을 사용합니다.
- 페이지 이동 또는 외부 링크는 `a` 태그를 사용합니다.
- 주요 콘텐츠는 `main` 내부에 배치합니다.
- 화면 단위는 `section`으로 구분합니다.
- 입력 필드에는 `label` 또는 `aria-label`을 연결합니다.
- 아이콘만 있는 버튼에는 반드시 `aria-label`을 작성합니다.

---

### Step 5 — CSS 레이아웃과 컴포넌트 구현

CSS는 다음 순서로 작성합니다.

```css
/* 1. Variables */
/* 2. Reset */
/* 3. Base */
/* 4. Layout */
/* 5. Components */
/* 6. Pages */
/* 7. Responsive */
/* 8. Utilities */
```

### 클래스명 작성 규칙

클래스명은 역할이 드러나도록 작성합니다.

권장 예시:

```txt
.app
.sidebar
.sidebar__item
.topbar
.main-content
.dashboard
.status-card
.roadmap-card
.problem-table
.problem-card
.badge
.badge--success
.badge--warning
.badge--danger
.code-block
.btn
.btn--accent
.btn--secondary
.btn--ghost
.btn--icon
```

### CSS 구현 기준

- 대시보드 카드 목록은 CSS Grid를 우선 사용합니다.
- 단순 정렬은 Flexbox를 사용합니다.
- 카드, 버튼, 배지, 입력 필드는 `DESIGN.md`의 상태 규칙을 따릅니다.
- 잠금 상태 카드는 전체 opacity를 낮추지 않습니다.
- 모바일에서는 가로 스크롤이 생기지 않도록 주의합니다.

---

### Step 6 — mock data 작성

`js/data.js`에는 화면에 필요한 정적 데이터를 작성합니다.

필수 데이터 예시:

```txt
roadmapData
problemLogData
snippetData
dashboardSummaryData
```

### Roadmap 데이터

각 주차 데이터는 다음 정보를 포함합니다.

- 주차
- 제목
- 학습 목표
- 주요 개념
- 추천 문제
- 완료 여부
- 잠금 여부
- 진행률

### Problem Log 데이터

각 문제 데이터는 다음 정보를 포함합니다.

- 문제 제목
- 플랫폼
- 난이도
- 알고리즘 분류
- 풀이 상태
- 풀이 날짜
- 복습 필요 여부

### Snippet 데이터

각 코드 스니펫 데이터는 다음 정보를 포함합니다.

- 개념 이름
- 설명
- 코드
- 언어
- 시간 복잡도
- 공간 복잡도
- 카테고리

### 데이터 작성 규칙

- mock data는 HTML에 직접 반복 작성하지 않습니다.
- 데이터는 배열 또는 객체 형태로 작성합니다.
- 렌더링은 `js/script.js`에서 담당합니다.
- 화면 표시용 문자열은 일관된 형식을 유지합니다.

---

### Step 7 — JavaScript 인터랙션 구현

`js/script.js`는 DOM 렌더링과 사용자 인터랙션을 담당합니다.

권장 함수 예시:

```js
renderDashboard();
renderRoadmap();
renderProblemLog();
renderSnippets();
filterProblems();
copyCodeSnippet();
updateActiveNavigation();
showEmptyState();
```

### JavaScript 작성 규칙

- 이벤트 처리는 `addEventListener`를 사용합니다.
- HTML 이벤트 속성에 직접 JavaScript를 작성하지 않습니다.
- 반복되는 DOM 생성 로직은 함수로 분리합니다.
- 상태나 동작 연결이 필요한 요소에는 `data-*` 속성을 사용할 수 있습니다.
- 같은 DOM 요소를 여러 번 선택할 경우 변수로 저장합니다.
- 함수 하나가 너무 많은 책임을 갖지 않도록 분리합니다.

### 사용 가능한 `data-*` 예시

```html
<button data-view="dashboard">Dashboard</button>
<button data-filter="easy">Easy</button>
<button data-copy-target="snippet-1">Copy</button>
```

---

### Step 8 — 주요 화면 구현

에이전트는 최소한 다음 화면을 구현해야 합니다.

| 화면                  | 구현 내용                                            |
| --------------------- | ---------------------------------------------------- |
| Dashboard             | 학습 요약 카드, 현재 주차, 오늘의 할 일, 전체 진행률 |
| Learning Roadmap      | 6주 로드맵, 진행/완료/잠금 상태                      |
| Problem Log & History | 문제 기록 테이블, 검색, 필터링, Empty State          |
| Concepts & Snippets   | 개념 목록, 코드 스니펫, 복사 버튼                    |

### 화면 구현 기준

- 화면 전환 시 활성 내비게이션 상태를 표시합니다.
- Dashboard는 학습 현황을 빠르게 파악할 수 있어야 합니다.
- Roadmap은 1주차부터 6주차까지 학습 흐름이 명확해야 합니다.
- Problem Log는 데스크톱에서 테이블로 표시합니다.
- Problem Log는 모바일에서 카드 리스트로 전환합니다.
- Snippets 화면의 코드 블록은 복사 기능을 제공해야 합니다.

---

### Step 9 — 반응형 구현

반응형 기준은 다음과 같습니다.

```txt
Desktop: 1024px 이상
Tablet: 768px 이상 1023px 이하
Mobile: 768px 미만
```

### Desktop

- 좌측 사이드바를 전체 너비로 표시합니다.
- 상단 앱바와 메인 콘텐츠를 함께 표시합니다.
- 대시보드 카드는 4열 배치를 기본으로 합니다.
- Problem Log는 테이블로 표시합니다.

### Tablet

- 사이드바는 아이콘 중심으로 축소할 수 있습니다.
- 카드 그리드는 2열 배치를 기본으로 합니다.
- 메인 콘텐츠 패딩을 줄입니다.

### Mobile

- 사이드바는 하단 탭바 형태로 전환합니다.
- 카드 그리드는 1열로 전환합니다.
- Problem Log는 카드 리스트로 전환합니다.
- TopAppBar의 검색창은 필요 시 전체 너비로 배치하거나 숨깁니다.
- 불필요한 가로 스크롤이 생기지 않도록 합니다.

---

### Step 10 — 접근성 검증

구현 후 다음 접근성 기준을 확인합니다.

- 모든 버튼과 링크는 키보드로 접근 가능해야 합니다.
- 모든 인터랙티브 요소는 focus 상태가 보여야 합니다.
- 아이콘 버튼에는 `aria-label`이 있어야 합니다.
- 클릭 가능한 요소는 최소 `44x44px` 터치 영역을 확보해야 합니다.
- 상태 정보는 색상만으로 전달하지 않습니다.
- 성공, 경고, 실패, 잠금 상태는 텍스트 또는 아이콘과 함께 표시합니다.
- 이미지가 있다면 적절한 `alt` 텍스트를 제공합니다.
- 입력 필드에는 `label` 또는 `aria-label`이 있어야 합니다.

---

### Step 11 — 로컬 실행 확인

이 프로젝트는 별도의 빌드 도구를 사용하지 않습니다.

#### 방법 1. VS Code Live Server

1. VS Code에서 프로젝트 폴더를 엽니다.
2. Live Server 확장을 설치합니다.
3. `index.html`을 우클릭합니다.
4. `Open with Live Server`를 선택합니다.

#### 방법 2. Python 간이 서버

```bash
python -m http.server 5500
```

브라우저에서 아래 주소로 접속합니다.

```txt
http://localhost:5500
```

---

## 컴포넌트 매핑 기준

에이전트는 `DESIGN.md`의 컴포넌트를 아래 HTML/CSS/JS 구조로 매핑합니다.

| 디자인 컴포넌트 | HTML/CSS 구현                                                          | JavaScript 역할             |
| --------------- | ---------------------------------------------------------------------- | --------------------------- |
| Button          | `.btn`, `.btn--accent`, `.btn--secondary`, `.btn--ghost`, `.btn--icon` | 클릭 이벤트 처리            |
| Card            | `.card`, `.status-card`, `.roadmap-card`, `.problem-card`              | 데이터 기반 렌더링          |
| Badge           | `.badge`, `.badge--success`, `.badge--warning`, `.badge--danger`       | 상태/난이도 표시            |
| Table           | `.problem-table`                                                       | 필터링 결과 렌더링          |
| Mobile Card     | `.problem-card`                                                        | 모바일 문제 로그 렌더링     |
| Code Block      | `.code-block`                                                          | 복사 버튼 처리              |
| Sidebar         | `.sidebar`, `.sidebar__item`                                           | 화면 전환, active 상태 처리 |
| Bottom Tab Bar  | `.bottom-nav`, `.bottom-nav__item`                                     | 모바일 화면 전환            |
| Input / Select  | `.form-control`, `.filter-select`                                      | 검색 및 필터링              |

---

## 구현 규칙

### HTML 규칙

- 시맨틱 태그를 우선 사용합니다.
- `button` 대신 `div`를 클릭 요소로 사용하지 않습니다.
- `table` 데이터는 `table`, `thead`, `tbody`, `tr`, `th`, `td`를 사용합니다.
- 화면 섹션은 `section`으로 구분합니다.
- 주요 섹션 제목은 heading 태그를 사용합니다.
- 접근성 보조 텍스트가 필요한 경우 `aria-label`을 사용합니다.

### CSS 규칙

- `DESIGN.md`의 토큰을 CSS 변수로 선언합니다.
- 새로운 색상과 여백 값을 임의로 추가하지 않습니다.
- 상태별 스타일은 클래스 조합으로 관리합니다.
- 컴포넌트 스타일은 재사용 가능하게 작성합니다.
- 모바일 스타일은 media query로 명확히 분리합니다.
- 잠금 상태나 비활성 상태를 전체 opacity만으로 표현하지 않습니다.

### JavaScript 규칙

- mock data는 `data.js`에서 관리합니다.
- DOM 렌더링과 이벤트 처리는 `script.js`에서 관리합니다.
- 이벤트는 `addEventListener`로 연결합니다.
- 필터링, 화면 전환, 복사 기능은 각각 독립 함수로 분리합니다.
- 데이터와 UI 렌더링 로직을 가능한 한 분리합니다.
- 전역 변수 사용은 최소화합니다.

---

## 기능 구현 기준

### Navigation

- 사이드바 또는 하단 탭바를 클릭하면 해당 화면이 표시됩니다.
- 현재 활성 화면은 active 상태로 표시합니다.
- active 상태는 배경, 텍스트 색상, indicator 중 최소 2가지 방식으로 구분합니다.

### Problem Filtering

Problem Log에서는 다음 필터를 제공할 수 있습니다.

- 검색어
- 플랫폼
- 난이도
- 풀이 상태
- 복습 필요 여부

필터 결과가 없으면 Empty State를 표시합니다.

### Copy Code

코드 스니펫의 복사 버튼은 다음 동작을 수행합니다.

1. 코드 내용을 클립보드에 복사합니다.
2. 버튼 텍스트를 `Copied!`로 변경합니다.
3. 1.5초 후 원래 텍스트로 되돌립니다.

### Progress Display

진행률은 다음 방식으로 표현합니다.

- 전체 학습 진행률
- 주차별 진행률
- 문제 풀이 완료 수
- 복습 필요 문제 수

---

## 완료 기준

다음 조건을 만족하면 구현이 완료된 것으로 판단합니다.

### 문서

- `DESIGN.md`가 repo 루트에 존재한다.
- `SKILL.md`가 repo 루트에 존재한다.
- `AGENT.md`가 repo 루트에 존재한다.
- `README.md`에 프로젝트 설명과 실행 방법이 작성되어 있다.

### 구조

- `index.html`, `css/style.css`, `js/data.js`, `js/script.js`가 분리되어 있다.
- HTML 구조가 시맨틱하게 작성되어 있다.
- mock data가 HTML 내부가 아니라 `data.js`에 있다.

### 화면

- Dashboard 화면이 구현되어 있다.
- Learning Roadmap 화면이 구현되어 있다.
- Problem Log & History 화면이 구현되어 있다.
- Concepts & Snippets 화면이 구현되어 있다.

### 디자인

- `DESIGN.md`의 CSS 변수가 반영되어 있다.
- 버튼, 카드, 배지, 입력 필드, 테이블, 코드 블록이 구현되어 있다.
- Deep Navy와 Amber/Gold 중심의 시각적 정체성이 유지된다.
- 임의의 색상과 여백이 남발되지 않는다.

### 기능

- 사이드바 또는 탭바로 화면 전환이 가능하다.
- Dashboard가 학습 요약 정보를 표시한다.
- Roadmap이 6주 학습 흐름을 표시한다.
- Problem Log 필터링이 동작한다.
- 코드 스니펫 복사 기능이 동작한다.

### 반응형

- 데스크톱 레이아웃이 깨지지 않는다.
- 태블릿에서 카드 배치가 자연스럽다.
- 모바일에서 하단 탭바가 동작한다.
- 모바일에서 Problem Log가 카드로 표시된다.
- 불필요한 가로 스크롤이 생기지 않는다.

### 접근성

- 키보드만으로 주요 기능을 사용할 수 있다.
- focus 상태가 보인다.
- 아이콘 버튼에 `aria-label`이 있다.
- 터치 영역이 최소 `44x44px` 이상이다.
- 상태 정보가 색상만으로 전달되지 않는다.

---

## 금지 사항

에이전트는 다음 작업을 하지 않습니다.

- 초기 구현에서 React, Vite, TypeScript를 도입하지 않습니다.
- 불필요한 외부 라이브러리를 설치하지 않습니다.
- `DESIGN.md`에 없는 색상을 임의로 추가하지 않습니다.
- HTML 안에 mock data를 대량으로 하드코딩하지 않습니다.
- CSS를 화면별로 중복 작성하지 않습니다.
- JavaScript 함수를 하나의 거대한 함수로 작성하지 않습니다.
- 접근성 속성을 생략하지 않습니다.
- 모바일 검증 없이 구현을 완료하지 않습니다.
- 잠금 또는 비활성 상태를 전체 opacity로만 처리하지 않습니다.
- 테이블을 모바일에서 그대로 가로 스크롤만 시키지 않습니다.
- 사용자가 요청하지 않은 서버, 로그인, DB 기능을 추가하지 않습니다.
- `git push --force` 같은 위험한 명령을 임의로 사용하지 않습니다.

---

## 실행 예시

사용자가 다음과 같이 요청한 경우:

```txt
DESIGN.md를 기준으로 JavaPrep Elite 정적 웹앱을 구현해줘.
```

에이전트는 다음 순서로 작업합니다.

```txt
1. DESIGN.md 확인
2. 현재 파일 구조 확인
3. index.html / css/style.css / js/data.js / js/script.js 구조 생성
4. CSS 변수로 디자인 토큰 구현
5. Global Shell, Sidebar, TopAppBar 구현
6. Dashboard / Roadmap / Problem Log / Snippets 화면 구현
7. mock data 작성
8. JavaScript로 화면 전환, 필터링, 복사 기능 구현
9. 데스크톱 / 태블릿 / 모바일 반응형 확인
10. 접근성 체크리스트 확인
11. README에 실행 방법 정리
```

---

## 주의 사항

- 이 스킬은 **정적 웹 구현용**입니다.
- 서버, 로그인, 데이터베이스, API 연동은 초기 범위에 포함하지 않습니다.
- 디자인 판단이 필요한 경우 반드시 `DESIGN.md`를 우선 확인합니다.
- 새로운 UI 요소가 필요할 경우 기존 컴포넌트와 가장 가까운 형태로 매핑합니다.
- 구현 중 문서와 충돌하는 부분이 있으면 사용자에게 먼저 확인합니다.
- 사용자가 배우지 않은 기술을 무리하게 도입하지 않습니다.
- 완성도보다 중요한 것은 HTML, CSS, JavaScript 기본기를 명확하게 보여주는 것입니다.

---

## 향후 개선 방향

현재 버전은 HTML, CSS, Vanilla JavaScript 기반으로 구현합니다.

추후 학습이 진행되면 다음과 같이 확장할 수 있습니다.

- React 기반 컴포넌트 구조로 전환
- Vite를 활용한 개발 환경 구성
- TypeScript를 통한 데이터 타입 안정성 강화
- LocalStorage를 활용한 학습 기록 저장
- 외부 API 또는 백엔드 서버 연동
- Chart.js 등을 활용한 시각화 개선
- 다크 모드 추가
- 사용자별 학습 기록 관리 기능 추가
