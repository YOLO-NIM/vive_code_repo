# JavaPrep Elite

초보 개발자를 위한 Java 코딩 테스트 6주 정복 플래너입니다.

## 사용 기술

- HTML
- CSS
- Vanilla JavaScript

## 파일 구조

- `index.html`: 전체 화면 구조
- `css/style.css`: 디자인 토큰, 레이아웃, 반응형 스타일
- `js/data.js`: 대시보드, 로드맵, 문제 로그, 스니펫 mock data
- `js/script.js`: 화면 전환, 렌더링, 검색/필터, 복사 기능

## 주요 기능

- Dashboard
- Learning Roadmap
- Problem Log & History
- Concepts & Snippets
- 사이드바 및 하단 탭바 화면 전환
- 문제 검색 및 필터
- 코드 스니펫 복사
- Empty State 표시

## 실행 방법

브라우저에서 `index.html`을 열면 됩니다.

로컬 서버를 사용하려면 프로젝트 루트에서 아래 명령을 실행할 수 있습니다.

```bash
python -m http.server 5500
```

그다음 브라우저에서 `http://localhost:5500`을 엽니다.

## 반응형 기준

- Desktop: 1024px 이상
- Tablet: 768px 이상 1023px 이하
- Mobile: 768px 미만

모바일에서는 하단 탭바를 사용하고, Problem Log는 카드 리스트로 전환됩니다.

