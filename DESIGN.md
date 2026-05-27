# JavaPrep Elite 디자인 명세서 (Final Design Specification)

본 문서는 JavaPrep Elite 플랫폼의 일관된 UI/UX 구현을 위한 최종 가이드라인입니다. 개발자와 AI 코딩 에이전트는 본 명세서의 토큰, 컴포넌트 규칙 및 레이아웃 구조를 최우선으로 준수해야 하며, 명시되지 않은 임의의 스타일 적용을 지양해야 합니다.

---

## 1. 프로젝트 개요 (Project Overview)

JavaPrep Elite는 초보 및 주니어 개발자가 6주 동안 Java 코딩 테스트를 체계적으로 준비할 수 있도록 돕는 학습 관리 플랫폼입니다. IDE에서 영감을 받은 전문적이고 차분한 학습 환경을 제공하며, 데이터 중심의 인터페이스를 통해 학습 효율을 극대화합니다.

## 2. 타겟 사용자 (Target Users)

- **초보 개발자:** Java 생태계에 입문하여 코딩 테스트를 위한 체계적인 학습 경로가 필요한 사용자.
- **취준생 및 학생:** 인턴십이나 주니어 개발자 채용을 위해 알고리즘과 Java 기초를 다지는 컴퓨터공학 전공생 또는 부트캠프 수료생.
- **전직 희망자:** 타 언어에서 Java 기반 백엔드 개발자로 전환하려는 경력 개발자.

## 3. 디자인 목표 (Design Goals)

- **체계성 (Structure):** 6주 커리큘럼을 통해 사용자가 무엇을 공부해야 할지 고민하지 않도록 명확하게 가이드합니다.
- **명확성 (Clarity):** 학습 진척도, 문제 해결 상태, 복습 필요 항목을 시각적으로 즉시 파악할 수 있게 합니다.
- **집중 (Focus):** IDE에서 영감을 받은 차분한 톤앤매너를 유지하여 학습에만 몰입할 수 있는 환경을 조성합니다.
- **일관성 (Consistency):** 모든 화면에서 동일한 디자인 토큰과 컴포넌트를 재사용하여 학습 곡선을 낮춥니다.
- **동기부여 (Motivation):** 시각적 피드백(진척도 바, 스트릭, 배지)을 통해 사용자가 꾸준히 학습할 수 있도록 돕습니다.

---

## 4. 디자인 토큰 (Design Tokens)

### 4.1 컬러 시스템 (Color System)

| 분류               | 토큰명                    | Hex 코드  | 용도                                    |
| :----------------- | :------------------------ | :-------- | :-------------------------------------- |
| **Brand**          | `--color-primary`         | `#00236f` | 메인 네이비, 주요 CTA 배경, 활성 텍스트 |
| **Brand Hover**    | `--color-primary-hover`   | `#001a52` | 프라이머리 요소 호버 상태               |
| **Accent**         | `--color-secondary`       | `#b45309` | 엠버/골드 강조, 포인트 버튼, 중요 배지  |
| **Accent Hover**   | `--color-secondary-hover` | `#92400e` | 엠버 버튼 호버 상태 (가독성 유지)       |
| **Accent-Light**   | `--color-accent-light`    | `#fef3c7` | 사이드바 활성 배경, 강조 영역 배경      |
| **Background**     | `--color-bg-app`          | `#f7f9fb` | 전체 애플리케이션 배경색                |
| **Surface**        | `--color-surface`         | `#ffffff` | 카드, 컨테이너, 사이드바 배경           |
| **Surface Hover**  | `--color-surface-hover`   | `#f1f5f9` | 리스트 항목 또는 버튼 호버 배경         |
| **Surface-Dim**    | `--color-surface-dim`     | `#f8fafc` | 입력창 배경, 테이블 헤더 배경           |
| **Border**         | `--color-border`          | `#d8dadc` | 기본 경계선, 카드 보더                  |
| **Border-Variant** | `--color-border-variant`  | `#e2e8f0` | 연한 구분선, 테이블 행 구분선           |
| **Text-Main**      | `--color-text-main`       | `#1e293b` | 기본 본문 및 헤드라인 텍스트            |
| **Text-Muted**     | `--color-text-muted`      | `#64748b` | 보조 설명, 메타데이터, 비활성 텍스트    |
| **Success**        | `--color-success`         | `#22c55e` | 완료(Completed), 통과 상태              |
| **Warning**        | `--color-warning`         | `#f59e0b` | 복습 필요(Review Needed), 주의 상태     |
| **Danger**         | `--color-danger`          | `#ef4444` | 오류, 삭제, 실패 상태                   |
| **Code-BG**        | `--color-code-bg`         | `#1e293b` | 코드 블록 배경색 (Dark)                 |
| **Focus-Ring**     | `--color-focus-ring`      | `#3b82f6` | 모든 인터랙티브 요소의 포커스 링        |

### 4.2 타이포그래피 스케일 (Typography Scale)

- **Font Family:** `Inter`, `Pretendard`, `system-ui`, `sans-serif`
- **Display-LG:** `32px / 2rem`, Bold (메인 페이지 제목)
- **Headline-SM:** `24px / 1.5rem`, Bold (섹션 제목)
- **Title-MD:** `18px / 1.125rem`, SemiBold (카드 제목, 문제 이름)
- **Body-MD:** `14px / 0.875rem`, Regular (기본 본문, 테이블 데이터)
- **Label-SM:** `12px / 0.75rem`, Medium (배지, 메타데이터, 캡션)
- **Code:** `13px / 0.8125rem`, Monospace (코드 스니펫, 복잡도 지표)

### 4.3 레이아웃 및 수치 (Spacing & Sizing)

- **Base Grid:** 4px
- **Border Radius:** `8px (0.5rem)` (카드/버튼), `4px (0.25rem)` (배지/입력창), `999px` (필 배지)
- **Gutter:** `24px (1.5rem)` (메인 콘텐츠 패딩)
- **Section Gap (Stack-LG):** `32px (2rem)`
- **Item Gap (Stack-MD):** `16px (1rem)`

---

## 5. 화면별 레이아웃 상세 (Screen Layout Details)

### 5.1 Global Shell

- **구조:** 좌측 고정 사이드바(256px) + 상단 앱바(64px) + 우측 메인 콘텐츠.
- **TopAppBar:** 좌측 검색창, 우측 알림 및 프로필.
- **Main Container:** `max-width: 1440px`, 중앙 정렬.

### 5.2 Dashboard

- **Hierarchy:** 상단 Stats Overview(4개 카드) -> 중앙 Active Week Progress 배너 -> 하단 Two-Column(Tasks / Goal).
- **Empty State:** "오늘의 학습 계획이 비어 있습니다. 로드맵에서 새 과제를 추가하세요." 메시지와 함께 차분한 일러스트 또는 아이콘 배치.

### 5.3 Learning Roadmap

- **Timeline:** 1주차부터 6주차까지 수직 배치.
- **Sidebar (Right):** 추천 리소스 및 미니 위젯.

### 5.4 Problem Log & History

- **구조:** 상단 필터바(검색 및 드롭다운) -> 중앙 데이터 테이블.

### 5.5 Concepts & Snippets

- **구조:** 좌측 카테고리 트리 + 우측 상세 뷰(마크다운 본문 및 코드 블록).

---

## 6. 컴포넌트 상세 및 상태 (Component Specifications)

### 6.1 버튼 규칙 (Button Rules)

| 버튼 타입       | 스타일 정의                                            | hover                                              | active/selected              | disabled                                             |
| :-------------- | :----------------------------------------------------- | :------------------------------------------------- | :--------------------------- | :--------------------------------------------------- |
| **Primary CTA** | BG: `--color-secondary`, Text: White                   | BG: `--color-secondary-hover`                      | Scale(0.96)                  | BG: `#d1d5db`, Text: White                           |
| **Secondary**   | Border: 1px `--color-primary`, Text: `--color-primary` | BG: `--color-primary`, Text: White                 | Opacity(0.9)                 | Border: `--color-border`, Text: `--color-text-muted` |
| **Ghost**       | No Border/BG, Text: `--color-text-muted`               | BG: `--color-surface-dim`, Text: `--color-primary` | BG: `--color-border-variant` | Text: `#cbd5e1`                                      |
| **Icon Button** | **Min 44x44px**, Text: `--color-text-muted`            | Text: `--color-primary`, BG: `--color-surface-dim` | Scale(0.9)                   | -                                                    |

- **Focus State:** 모든 버튼 포커스 시 `outline: 2px solid --color-focus-ring`, `outline-offset: 2px`.
- **Icon Button:** 반드시 `aria-label`을 포함해야 함.

### 6.2 카드 (Cards)

- **Default:** BG: `--color-surface`, Border: 1px `--color-border`, Radius: 8px.
- **Hover:** Border Color: `--color-primary` 또는 미세한 그림자(`box-shadow`) 적용.
- **Active:** Border: 2px solid `--color-primary`.
- **Locked (Roadmap):**
  - 전체 불투명도(Opacity) 조절 금지.
  - 텍스트는 `--color-text-muted` 사용, 카드 우측 상단에 자물쇠 아이콘 배치.
  - 내부 버튼은 `disabled` 상태로 유지.

### 6.3 배지 (Badges)

- **형태:** 필(Pill) 모양 (`Radius: 999px`), `Padding: 4px 8px`.
- **의미 전달:** 색상에만 의존하지 않고 텍스트 라벨 또는 아이콘(체크, 느낌표 등)을 병행 표기.
- **Success:** BG: `--color-success` (투명도 10%), Text: `--color-success`.

### 6.4 테이블 행 (Table Rows)

- **Default:** BG: `--color-surface`, Bottom Border: 1px `--color-border-variant`.
- **Hover:** BG: `--color-surface-dim`.
- **Selected:** BG: `--color-accent-light`.
- **Empty State:** "문제를 찾을 수 없습니다." 문구와 함께 필터 초기화 버튼(CTA) 제공.

### 6.5 사이드바 내비게이션 (SideNavBar Items)

- **Default:** Text/Icon: `--color-text-muted`, 배경 투명.
- **Hover:** BG: `--color-surface-hover`, Text/Icon: `--color-primary`.
- **Active:** BG: `--color-accent-light`, Text/Icon: `--color-primary`, Font-weight: SemiBold.
- **Active Indicator:** 우측 끝에 `4px` 세로 바를 표시하며 색상은 `--color-secondary`를 사용한다.
- **Focus:** `outline: 2px solid --color-focus-ring`, `outline-offset: 2px`.

---

## 7. 코드 스니펫 블록 (Code Snippet Block)

- **Top Bar:** 파일명(Solution.java) + 복사 버튼(Icon + 'Copy' Text).
- **Copy Feedback:** 클릭 시 1.5초간 'Copied!' 텍스트와 체크 아이콘으로 변경.
- **Metadata Footer:** `Time: O(N log N) | Space: O(N)` (Monospace font).
- **Scrolling:** 가로 스크롤 허용, 커스텀 스크롤바 적용.

---

## 8. 반응형 및 모바일 변화 (Responsive Strategy)

### 8.1 Breakpoints

- **Desktop:** `1024px` 이상 (사이드바 완전 노출).
- **Tablet:** `768px` ~ `1023px` (사이드바 아이콘 모드).
- **Mobile:** `768px` 미만 (사이드바 -> 하단 탭바 전환).

### 8.2 Problem Log 모바일 변환 (Table-to-Card)

- 모바일에서 테이블 구조를 해제하고 개별 카드로 변환.
- 카드 구성: [제목 + 난이도] / [플랫폼 + 카테고리 + 상태] / [풀이일자 + 상세보기 아이콘].

---

## 9. 접근성 및 구현 원칙 (Accessibility & Rules)

### 9.1 접근성 (A11y)

- **Contrast:** 텍스트와 배경의 명도 대비 4.5:1 이상 유지.
- **Touch Target:** 모든 인터랙티브 요소는 최소 `44x44px` 확보.
- **Non-color Indicators:** 성공/경고 등의 상태는 색상과 아이콘을 반드시 함께 사용.
- **Semantic HTML:** `nav`, `main`, `section`, `header`, `footer`, `table` 등 적절한 시맨틱 태그 사용.

### 9.2 AI 코딩 에이전트 지침

1. **명세서 우선:** 구현 전 본 `DESIGN.md`를 반드시 정독하고 따를 것.
2. **임의 생성 금지:** 정의된 컬러, 여백, 타이포 스케일 외의 값을 임의로 도입하지 말 것.
3. **재사용성:** 새로운 요소를 만들기 전 가장 유사한 기존 컴포넌트를 먼저 매핑하여 재사용할 것.
4. **가독성 보호:** Opacity를 활용해 요소를 숨기거나 비활성화할 때 텍스트 가독성이 훼손되지 않도록 주의할 것.
5. **반응형 준수:** 데스크톱뿐만 아니라 태블릿, 모바일의 변화 규칙을 엄격히 적용할 것.

---

**문서 상태:** 최종 디자인 명세서 (Final design specification)
