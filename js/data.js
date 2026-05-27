const dashboardSummaryData = {
  overallProgress: 68,
  currentWeek: 3,
  currentWeekTitle: "3주차: 자료구조 기본기 강화",
  currentWeekDescription:
    "스택, 큐, 문자열 처리 패턴을 정리하면서 문제 풀이 흐름을 익히는 단계입니다.",
  stats: [
    { label: "완료한 문제", value: "24", detail: "이번 플랜 누적" },
    { label: "복습 필요", value: "5", detail: "오답/헷갈림" },
    { label: "연속 학습", value: "11일", detail: "습관 유지" },
    { label: "이번 주 목표", value: "6개", detail: "핵심 유형" },
  ],
  todayTask: {
    title: "오늘은 문자열과 스택을 함께 다룹니다.",
    description:
      "입출력 예제를 직접 따라 하면서 조건 분기와 자료구조 선택 이유를 정리하세요.",
    checklist: [
      "문자열 뒤집기와 괄호 검증 문제 2개 풀기",
      "풀이 후 복잡도와 예외 케이스를 메모하기",
      "오답은 내일 아침에 한 번 더 복습하기",
    ],
  },
  goals: [
    "문제에서 요구하는 입력/출력을 먼저 분해한다.",
    "핵심 자료구조 선택 이유를 1줄로 적는다.",
    "시간 복잡도와 공간 복잡도를 함께 기록한다.",
  ],
};

const roadmapData = [
  {
    week: "1주차",
    title: "Java 기초 문법과 입출력",
    status: "completed",
    summary: "변수, 조건문, 반복문, 기본 입출력을 익히는 주차",
    learningGoals: ["문법 감 잡기", "IDE 환경에 익숙해지기", "간단한 구현 문제 적응"],
    recommendedProblems: ["BOJ 2557", "BOJ 2753", "BOJ 10818"],
    keyConcepts: "Scanner, BufferedReader, if/for, 배열",
  },
  {
    week: "2주차",
    title: "배열과 정렬",
    status: "completed",
    summary: "배열 순회와 정렬 패턴을 익히는 주차",
    learningGoals: ["정렬 API 활용", "누적합 기초", "2차원 배열 입문"],
    recommendedProblems: ["BOJ 11399", "BOJ 11650", "BOJ 1940"],
    keyConcepts: "Arrays.sort, 정렬 기준, 누적값",
  },
  {
    week: "3주차",
    title: "문자열과 스택",
    status: "in-progress",
    summary: "괄호, 회문, 문자열 탐색 패턴을 집중 학습",
    learningGoals: ["문자열 처리 안정화", "스택 사용 이유 정리", "예외 케이스 체크"],
    recommendedProblems: ["BOJ 9012", "BOJ 1541", "BOJ 10828"],
    keyConcepts: "StringBuilder, stack, char handling",
  },
  {
    week: "4주차",
    title: "큐, 덱, 해시맵",
    status: "locked",
    summary: "자료구조 활용과 탐색 속도를 높이는 주차",
    learningGoals: ["Map을 이용한 카운팅", "큐/덱 연산", "중복 제거 전략"],
    recommendedProblems: ["BOJ 10845", "BOJ 1021", "BOJ 9375"],
    keyConcepts: "Queue, Deque, HashMap",
  },
  {
    week: "5주차",
    title: "그래프 기초",
    status: "locked",
    summary: "DFS/BFS로 연결 관계를 탐색하는 주차",
    learningGoals: ["재귀 감각 익히기", "BFS 방문 처리", "인접 리스트 이해"],
    recommendedProblems: ["BOJ 1260", "BOJ 2178", "BOJ 2606"],
    keyConcepts: "DFS, BFS, adjacency list",
  },
  {
    week: "6주차",
    title: "실전 모의고사",
    status: "locked",
    summary: "시간 제한과 문제 선택 전략을 연습하는 주차",
    learningGoals: ["실전처럼 풀이", "오답 분석", "시간 관리"],
    recommendedProblems: ["종합 모의 세트 3회", "오답 복습 세트"],
    keyConcepts: "simulation, greedy, review",
  },
];

const problemLogData = [
  {
    id: "p1",
    title: "괄호 문자열",
    topic: "Stack",
    difficulty: "easy",
    status: "completed",
    solvedDate: "2026-05-21",
    reviewNeeded: false,
    memo: "스택으로 여는 괄호만 관리하면 깔끔하게 해결",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
  },
  {
    id: "p2",
    title: "수 정렬하기 3",
    topic: "Counting Sort",
    difficulty: "easy",
    status: "completed",
    solvedDate: "2026-05-22",
    reviewNeeded: false,
    memo: "입력 범위가 작을 때 카운팅 배열이 유리",
    timeComplexity: "O(N + K)",
    spaceComplexity: "O(K)",
  },
  {
    id: "p3",
    title: "잃어버린 괄호",
    topic: "Greedy",
    difficulty: "medium",
    status: "review",
    solvedDate: "2026-05-23",
    reviewNeeded: true,
    memo: "최솟값을 만들기 위해 '-' 이후를 묶어서 계산",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
  },
  {
    id: "p4",
    title: "스택 수열",
    topic: "Stack",
    difficulty: "medium",
    status: "failed",
    solvedDate: "2026-05-24",
    reviewNeeded: true,
    memo: "푸시/팝 순서 기록이 핵심",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
  },
  {
    id: "p5",
    title: "DFS와 BFS",
    topic: "Graph",
    difficulty: "hard",
    status: "completed",
    solvedDate: "2026-05-25",
    reviewNeeded: false,
    memo: "방문 순서를 출력할 때 인접 리스트 정렬 필요",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
  },
  {
    id: "p6",
    title: "연속합",
    topic: "DP",
    difficulty: "medium",
    status: "review",
    solvedDate: "2026-05-26",
    reviewNeeded: true,
    memo: "현재까지의 최대 부분합을 누적해 갱신",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
  },
];

const snippetData = [
  {
    id: "snippet-1",
    title: "Two Sum 스타일 탐색",
    description: "Map을 이용해 한 번의 순회로 보완 수를 찾는 기본 패턴입니다.",
    language: "Java",
    concept: "HashMap, 탐색",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> indexByValue = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (indexByValue.containsKey(need)) {
                return new int[] { indexByValue.get(need), i };
            }
            indexByValue.put(nums[i], i);
        }

        return new int[] { -1, -1 };
    }
}`,
  },
  {
    id: "snippet-2",
    title: "스택 괄호 검증",
    description: "여는 괄호만 스택에 저장하고 닫는 괄호가 나올 때 짝을 맞춥니다.",
    language: "Java",
    concept: "Stack, 문자열",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char ch : s.toCharArray()) {
            if (ch == '(') {
                stack.push(ch);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.isEmpty();
    }
}`,
  },
  {
    id: "snippet-3",
    title: "누적합 배열",
    description: "구간 합 질문이 반복될 때 미리 누적합을 만들어 둡니다.",
    language: "Java",
    concept: "Prefix Sum",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `public class Solution {
    public int[] buildPrefixSum(int[] nums) {
        int[] prefix = new int[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        return prefix;
    }
}`,
  },
  {
    id: "snippet-4",
    title: "BFS 기본 틀",
    description: "큐를 사용해 가까운 정점부터 차례로 탐색합니다.",
    language: "Java",
    concept: "Queue, Graph",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    code: `import java.util.ArrayDeque;
import java.util.Queue;

public class Solution {
    public void bfs(int start) {
        Queue<Integer> queue = new ArrayDeque<>();
        boolean[] visited = new boolean[1001];

        queue.offer(start);
        visited[start] = true;

        while (!queue.isEmpty()) {
            int current = queue.poll();
            for (int next : graph[current]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.offer(next);
                }
            }
        }
    }
}`,
  },
];

