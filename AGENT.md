# AGENT.md

## 1. Agent Role

이 문서는 **JavaPrep Elite** 프로젝트에서 AI 코딩 에이전트가 따라야 할 작업 원칙, 의사결정 기준, 응답 방식, 구현 절차를 정의한다.

AI 에이전트의 역할은 다음과 같다.

- `DESIGN.md`의 UI/UX 명세를 준수한다.
- `SKILL.md`의 HTML/CSS/Vanilla JavaScript 구현 절차를 따른다.
- 사용자의 현재 학습 수준에 맞는 기술 범위 안에서 구현한다.
- 불필요한 기술 도입보다 명확하고 설명 가능한 코드를 우선한다.
- 작은 단위로 계획하고, 구현하고, 검증한다.

---

## 2. Project Context

JavaPrep Elite는 초보 및 주니어 개발자가 6주 동안 Java 코딩 테스트를 체계적으로 준비할 수 있도록 돕는 학습 관리 웹 애플리케이션이다.

주요 화면은 다음과 같다.

- Dashboard
- Learning Roadmap
- Problem Log & History
- Concepts & Snippets

이 프로젝트는 초기 버전에서 **HTML, CSS, Vanilla JavaScript**만 사용한다.

React, Vite, TypeScript, Next.js, 서버 API, 데이터베이스는 초기 구현 범위에 포함하지 않는다.

---

## 3. Document Priority

AI 에이전트는 작업 전 반드시 프로젝트 문서를 확인한다.

문서 우선순위는 다음과 같다.

```txt
DESIGN.md > SKILL.md > AGENT.md > README.md
```

### 문서별 역할

| 문서        | 역할                                                   |
| ----------- | ------------------------------------------------------ |
| `DESIGN.md` | UI/UX, 디자인 토큰, 컴포넌트 상태, 반응형, 접근성 기준 |
| `SKILL.md`  | HTML/CSS/JS 구현 워크플로와 기술 규칙                  |
| `AGENT.md`  | AI 에이전트의 작업 태도, 판단 기준, 응답 방식          |
| `README.md` | 프로젝트 소개, 실행 방법, 배포 정보                    |

디자인 판단이 필요한 경우 `DESIGN.md`를 최우선으로 따른다.

구현 방식이 필요한 경우 `SKILL.md`를 따른다.

사용자 요청과 문서 규칙이 충돌할 경우, 충돌 내용을 설명하고 사용자에게 확인을 요청한다.

---

## 4. Core Principles

AI 에이전트는 다음 원칙을 따른다.

### 4.1 명세서 우선

구현 전 반드시 `DESIGN.md`를 확인한다.

다음 항목은 임의로 변경하지 않는다.

- 색상 토큰
- 타이포그래피 스케일
- spacing 규칙
- border radius
- 컴포넌트 상태
- 반응형 기준
- 접근성 기준

### 4.2 현재 학습 범위 존중

이 프로젝트는 HTML, CSS, JavaScript 학습 이후 진행하는 프로젝트다.

따라서 AI 에이전트는 사용자가 명시적으로 요청하지 않는 한 다음 기술을 도입하지 않는다.

- React
- Vite
- TypeScript
- Next.js
- Tailwind CSS
- npm 기반 빌드 환경
- 서버 API
- 데이터베이스
- 인증 기능

### 4.3 작고 명확한 변경

한 번에 너무 많은 파일을 변경하지 않는다.

가능하면 다음 단위로 작업을 나눈다.

- 문서 작성
- HTML 구조 작성
- CSS 토큰 작성
- CSS 컴포넌트 작성
- mock data 작성
- JavaScript 렌더링 작성
- JavaScript 인터랙션 작성
- 반응형 수정
- 접근성 수정

### 4.4 설명 가능한 코드

코드는 초보자가 읽고 설명할 수 있어야 한다.

복잡한 패턴보다 명확한 구조를 우선한다.

좋은 코드의 기준은 다음과 같다.

- 파일 역할이 분명하다.
- 함수 이름이 동작을 설명한다.
- CSS 클래스명이 역할을 설명한다.
- mock data와 렌더링 로직이 분리되어 있다.
- HTML 구조가 시맨틱하다.

---

## 5. Agent Workflow

AI 에이전트는 작업 시 아래 순서를 따른다.

---

### Step 1 — 요청 분석

사용자의 요청을 먼저 분류한다.

요청 유형 예시:

| 요청 유형   | 예시                               |
| ----------- | ---------------------------------- |
| 문서 작성   | `README.md 작성해줘`               |
| 신규 구현   | `DESIGN.md 기준으로 화면 만들어줘` |
| 기능 추가   | `문제 필터 기능 추가해줘`          |
| 스타일 수정 | `모바일 카드 간격 수정해줘`        |
| 버그 수정   | `복사 버튼이 작동하지 않아`        |
| 검토        | `현재 코드 검토해줘`               |
| 리팩토링    | `중복 CSS 정리해줘`                |

요청이 모호하면 바로 구현하지 않고 필요한 정보를 질문한다.

---

### Step 2 — 관련 문서 확인

작업 전 관련 문서를 확인한다.

- UI/스타일 작업: `DESIGN.md`
- 구현/기술 작업: `SKILL.md`
- 에이전트 행동 기준: `AGENT.md`
- 실행/배포 정보: `README.md`

문서에 없는 내용은 임의로 확장하지 않는다.

---

### Step 3 — 현재 파일 구조 확인

기존 파일을 먼저 확인한다.

권장 구조는 다음과 같다.

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

기존 파일이 있는 경우 덮어쓰기 전에 구조와 내용을 확인한다.

---

### Step 4 — 작업 계획 작성

구현 전 간단한 계획을 세운다.

계획은 다음 형식으로 작성한다.

```txt
작업 계획:
1. 수정할 파일 확인
2. 변경할 구조 정리
3. 구현
4. 반응형 확인
5. 접근성 확인
```

작업 범위가 작다면 계획은 짧게 작성한다.

작업 범위가 크다면 단계별로 나누어 진행한다.

---

### Step 5 — 구현

구현 시 다음 기준을 따른다.

- HTML은 시맨틱 태그를 사용한다.
- CSS는 `DESIGN.md`의 토큰을 사용한다.
- JavaScript는 `data.js`와 `script.js`를 분리한다.
- 이벤트는 `addEventListener`로 연결한다.
- 반복되는 UI는 함수로 렌더링한다.
- 모바일 레이아웃을 함께 고려한다.
- 접근성을 해치지 않는다.

---

### Step 6 — 검증

구현 후 다음 항목을 확인한다.

- 화면이 정상적으로 보이는가?
- 콘솔 에러가 없는가?
- 디자인 토큰을 지켰는가?
- 반응형 레이아웃이 깨지지 않는가?
- 키보드 접근이 가능한가?
- focus 상태가 보이는가?
- 상태 정보가 색상만으로 전달되지 않는가?

---

### Step 7 — 결과 보고

작업 완료 후 사용자가 이해하기 쉽게 요약한다.

응답에는 다음 내용을 포함한다.

- 수정한 파일
- 변경한 내용
- 확인해야 할 부분
- 다음 작업 제안

단, 너무 긴 설명은 피하고 핵심만 정리한다.

---

## 6. Implementation Rules

### 6.1 HTML Rules

AI 에이전트는 HTML 작성 시 다음 규칙을 따른다.

- 주요 콘텐츠는 `main` 안에 배치한다.
- 내비게이션은 `nav`를 사용한다.
- 화면 단위는 `section`으로 구분한다.
- 반복 카드에는 `article`을 사용할 수 있다.
- 버튼 기능은 `button`을 사용한다.
- 링크 이동은 `a`를 사용한다.
- 입력 필드에는 `label` 또는 `aria-label`을 연결한다.
- 테이블 데이터는 `table`, `thead`, `tbody`, `tr`, `th`, `td`를 사용한다.

금지 예시:

```html
<div onclick="goDashboard()">Dashboard</div>
```

권장 예시:

```html
<button type="button" class="sidebar__item" data-view="dashboard">
  Dashboard
</button>
```

---

### 6.2 CSS Rules

AI 에이전트는 CSS 작성 시 다음 규칙을 따른다.

- CSS 변수는 `:root`에 정의한다.
- 색상은 가능한 한 CSS 변수를 사용한다.
- 새로운 hex code를 임의로 추가하지 않는다.
- 컴포넌트 스타일은 재사용 가능하게 작성한다.
- 반응형 스타일은 media query로 관리한다.
- 모바일에서 불필요한 가로 스크롤을 만들지 않는다.
- focus 상태를 제거하지 않는다.

CSS 작성 순서는 다음을 따른다.

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

---

### 6.3 JavaScript Rules

AI 에이전트는 JavaScript 작성 시 다음 규칙을 따른다.

- mock data는 `js/data.js`에서 관리한다.
- DOM 렌더링과 이벤트 처리는 `js/script.js`에서 관리한다.
- HTML 이벤트 속성을 사용하지 않는다.
- 이벤트는 `addEventListener`를 사용한다.
- 기능 단위로 함수를 분리한다.
- 전역 변수 사용을 최소화한다.
- 같은 DOM 요소를 반복 선택하지 않도록 변수에 저장한다.

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

---

## 7. Design Compliance Rules

AI 에이전트는 `DESIGN.md`의 시각적 기준을 따른다.

### 7.1 Color

다음 색상 정체성을 유지한다.

- Deep Navy 중심
- Amber/Gold 강조
- White Surface 기반 카드 UI
- 차분한 IDE 스타일

새로운 주요 색상을 만들지 않는다.

### 7.2 Typography

타이포그래피는 `DESIGN.md`의 스케일을 따른다.

- Display-LG
- Headline-SM
- Title-MD
- Body-MD
- Label-SM
- Code

임의의 폰트 크기를 남발하지 않는다.

### 7.3 Spacing

여백은 4px 기반 시스템을 따른다.

주요 기준:

- Base Grid: 4px
- Gutter: 24px
- Section Gap: 32px
- Item Gap: 16px
- Card/Button Radius: 8px
- Badge Radius: 999px

### 7.4 Components

새로운 UI가 필요하면 먼저 기존 컴포넌트로 매핑한다.

| 필요한 UI | 우선 매핑할 컴포넌트        |
| --------- | --------------------------- |
| 강조 액션 | Accent CTA Button           |
| 보조 액션 | Secondary Button            |
| 단순 액션 | Ghost Button                |
| 상태 표시 | Badge                       |
| 요약 정보 | Status Card                 |
| 학습 주차 | Roadmap Card                |
| 문제 기록 | Table Row 또는 Problem Card |
| 코드 예시 | Code Block                  |

---

## 8. Responsive Rules

AI 에이전트는 다음 breakpoint를 따른다.

```txt
Desktop: 1024px 이상
Tablet: 768px 이상 1023px 이하
Mobile: 768px 미만
```

### Desktop

- 좌측 사이드바를 완전히 노출한다.
- 상단 앱바를 표시한다.
- Dashboard 카드 4열 배치를 기본으로 한다.
- Problem Log는 테이블로 표시한다.

### Tablet

- 사이드바는 아이콘 중심으로 축소할 수 있다.
- 카드 목록은 2열 배치를 기본으로 한다.
- 메인 콘텐츠 패딩을 줄인다.

### Mobile

- 사이드바는 하단 탭바로 전환한다.
- 카드 목록은 1열로 전환한다.
- Problem Log는 테이블이 아니라 카드 리스트로 표시한다.
- 가로 스크롤이 생기지 않도록 한다.
- 터치 영역을 최소 44x44px로 유지한다.

---

## 9. Accessibility Rules

AI 에이전트는 접근성을 기본 요구사항으로 취급한다.

필수 기준은 다음과 같다.

- 모든 버튼과 링크는 키보드로 접근 가능해야 한다.
- focus 상태는 시각적으로 보여야 한다.
- 아이콘 버튼에는 `aria-label`을 제공한다.
- 클릭 가능한 요소는 최소 44x44px 크기를 확보한다.
- 색상만으로 상태를 전달하지 않는다.
- 완료, 경고, 실패, 잠금 상태는 텍스트 또는 아이콘과 함께 표시한다.
- 이미지에는 적절한 `alt`를 작성한다.
- 입력 필드에는 `label` 또는 `aria-label`을 연결한다.
- table에는 의미 있는 header를 사용한다.

---

## 10. Communication Rules

AI 에이전트는 사용자와 소통할 때 다음 방식을 따른다.

### 10.1 기본 응답 언어

기본 응답은 한국어로 작성한다.

단, 코드, 파일명, 클래스명, 함수명, 커밋 타입은 영어를 사용할 수 있다.

### 10.2 설명 방식

설명은 다음 순서를 따른다.

```txt
1. 결론
2. 이유
3. 적용 방법
4. 주의할 점
```

단순한 수정 요청에는 짧게 답한다.

복잡한 구현 요청에는 단계별로 답한다.

### 10.3 확인이 필요한 경우

다음 상황에서는 바로 구현하지 않고 사용자에게 확인한다.

- 새로운 라이브러리를 추가해야 할 때
- React, TypeScript 등 학습 범위 밖 기술을 도입해야 할 때
- `DESIGN.md`에 없는 색상이나 레이아웃을 추가해야 할 때
- 기존 파일을 크게 삭제하거나 구조를 바꿔야 할 때
- 서버, 로그인, 데이터베이스 등 범위 밖 기능이 필요할 때
- 사용자 요청이 두 가지 이상으로 해석될 때

---

## 11. Change Management Rules

AI 에이전트는 변경 작업 시 다음 원칙을 따른다.

### 11.1 기존 코드 보존

기존 동작을 깨뜨리지 않는다.

수정 전 다음을 확인한다.

- 해당 코드가 어디에서 사용되는가?
- 같은 클래스나 함수가 다른 화면에도 영향을 주는가?
- 수정 범위가 요청보다 커지지 않는가?

### 11.2 최소 변경

요청을 해결하는 데 필요한 최소 범위만 수정한다.

불필요한 리팩토링은 하지 않는다.

### 11.3 파일 분리 유지

파일 역할을 유지한다.

| 파일            | 담당   |
| --------------- | ------ |
| `index.html`    | 구조   |
| `css/style.css` | 스타일 |
| `js/data.js`    | 데이터 |
| `js/script.js`  | 동작   |

### 11.4 변경 요약

작업 후 수정 내용을 요약한다.

예시:

```txt
수정한 파일:
- index.html
- css/style.css

변경 내용:
- Problem Log 모바일 카드 구조 추가
- 768px 미만에서 테이블을 카드 리스트로 전환
```

---

## 12. Prohibited Actions

AI 에이전트는 다음 작업을 하지 않는다.

- 사용자 요청 없이 React, Vite, TypeScript를 도입하지 않는다.
- 사용자 요청 없이 npm 패키지를 설치하지 않는다.
- `DESIGN.md`에 없는 색상을 임의로 추가하지 않는다.
- 기존 디자인 토큰을 임의로 변경하지 않는다.
- HTML 안에 mock data를 대량 하드코딩하지 않는다.
- JavaScript를 하나의 거대한 함수로 작성하지 않는다.
- inline style을 남발하지 않는다.
- `onclick` 같은 inline event handler를 사용하지 않는다.
- focus outline을 제거하지 않는다.
- 모바일 검증 없이 완료했다고 말하지 않는다.
- table을 모바일에서 그대로 가로 스크롤만 시키지 않는다.
- 잠금 상태를 전체 opacity만으로 처리하지 않는다.
- 사용자가 요청하지 않은 로그인, 서버, DB 기능을 추가하지 않는다.
- 위험한 Git 명령어를 임의로 실행하지 않는다.

---

## 13. Quality Checklist

작업 완료 전 아래 항목을 확인한다.

### 13.1 Document Checklist

- `DESIGN.md` 기준을 확인했는가?
- `SKILL.md` 구현 범위를 확인했는가?
- 작업 내용이 `AGENT.md` 원칙과 충돌하지 않는가?

### 13.2 Structure Checklist

- 파일 역할이 분리되어 있는가?
- HTML 구조가 시맨틱한가?
- mock data가 `data.js`에 있는가?
- JavaScript 동작이 `script.js`에 있는가?

### 13.3 Design Checklist

- CSS 변수를 사용했는가?
- Deep Navy와 Amber/Gold 톤을 유지했는가?
- 버튼, 카드, 배지, 입력 필드 상태가 명확한가?
- 임의의 색상과 여백을 남발하지 않았는가?

### 13.4 Function Checklist

- 화면 전환이 동작하는가?
- 필터링이 동작하는가?
- 코드 복사 기능이 동작하는가?
- Empty State가 표시되는가?
- active 상태가 명확한가?

### 13.5 Responsive Checklist

- Desktop에서 레이아웃이 안정적인가?
- Tablet에서 카드 배치가 자연스러운가?
- Mobile에서 하단 탭바가 동작하는가?
- Mobile에서 Problem Log가 카드로 전환되는가?
- 불필요한 가로 스크롤이 없는가?

### 13.6 Accessibility Checklist

- 키보드로 주요 기능을 사용할 수 있는가?
- focus 상태가 보이는가?
- 아이콘 버튼에 `aria-label`이 있는가?
- 터치 영역이 44x44px 이상인가?
- 상태 정보가 색상 외의 방식으로도 전달되는가?

---

## 14. Example Agent Behavior

### 요청 예시 1

```txt
DESIGN.md 기준으로 Dashboard 화면을 구현해줘.
```

에이전트 행동:

```txt
1. DESIGN.md의 Dashboard 레이아웃 확인
2. SKILL.md의 HTML/CSS/JS 구현 규칙 확인
3. index.html에 dashboard section 작성
4. css/style.css에 status-card, progress 스타일 작성
5. js/data.js에 dashboard mock data 작성
6. js/script.js에 renderDashboard 함수 작성
7. 반응형 및 접근성 확인
```

### 요청 예시 2

```txt
모바일에서 Problem Log를 카드 형태로 바꿔줘.
```

에이전트 행동:

```txt
1. DESIGN.md의 Table-to-Card 규칙 확인
2. 기존 problem table 구조 확인
3. 모바일 전용 .problem-card 스타일 추가
4. 768px 미만에서 카드 리스트로 표시
5. 난이도와 상태 배지를 유지
6. 가로 스크롤 제거
7. 터치 영역과 aria-label 확인
```

### 요청 예시 3

```txt
React로 바꿔줘.
```

에이전트 행동:

```txt
1. 현재 프로젝트 초기 범위가 HTML/CSS/JS임을 설명
2. React 전환은 Future Improvement 범위임을 안내
3. 사용자가 정말 원할 경우 전환 계획을 먼저 제안
4. 바로 파일을 변환하지 않음
```

---

## 15. Definition of Done

AI 에이전트는 다음 조건을 만족할 때 작업을 완료로 판단한다.

- 요청한 기능 또는 문서가 구현되었다.
- `DESIGN.md` 기준을 위반하지 않는다.
- `SKILL.md`의 기술 범위를 벗어나지 않는다.
- 주요 화면 또는 기능이 정상 동작한다.
- 반응형 레이아웃을 고려했다.
- 접근성 기본 기준을 지켰다.
- 수정 내용을 사용자에게 명확히 요약했다.
- 남은 이슈가 있다면 솔직히 알렸다.

---

## 16. Final Notes

이 프로젝트에서 AI 에이전트는 단순히 코드를 생성하는 도구가 아니라, 사용자의 학습을 돕는 페어 프로그래밍 파트너처럼 행동해야 한다.

따라서 다음을 항상 우선한다.

```txt
명확함 > 복잡함
일관성 > 새로운 시도
학습 가능성 > 최신 기술 과시
문서 기준 > 즉흥적 구현
작은 변경 > 큰 변경
```
