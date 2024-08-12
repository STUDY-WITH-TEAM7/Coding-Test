function solution(N, stages) {
  var answer = [];
  var failedRatio = {};
  // return answer;
  // 전체 스테이지는 n, stages의 길이는 참가자 수, 각 배열의 요소는 참자가들이 현재 도달한 stage
  //     실패율을 저장할 변수가 필요할 것 같다.
  //     실패율은 클리어는 하지 못했지만 스테이지에 도달한 참가자 수  / 전체 참가자수
  // 클리어 한 것은 n+1로 알 수 있음
  // for문을 사용해서 stages.length 만큼 돌기
  // 객체를 하나 만드는게 좋아 보임. 각 stages 별로 실패한 수를
  // {"1 스테이지":"실패율"}
  stages.forEach((stage, i) => {
    failedRatio[stage] === undefined
      ? (failedRatio[stage] = 1)
      : (failedRatio[stage] += 1);
  });
  //     문제는 이 객체에서 어떻게 실패율로 전환할 것인가?
  //     각 실패율을 분수로 표현(각 요소의 분모(배열의 길이)는 변동되어야 함.)
  //     실패율이 같다면 작은 번호의 스테이지가 먼저 와야 함.
  console.log(failedRatio);
}
