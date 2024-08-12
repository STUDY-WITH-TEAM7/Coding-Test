function solution(arr) {
  //결과값을 출력하기 위한 빈 배열 선언
  const result = [];
  //이전의 값을 저장함
  let prevNum = null;
  //arr를 돌면서 현재값과 이전값이 일치하지 않으면 push
  arr.forEach((num) => {
    prevNum !== num && result.push(num);
    // 현재 num값을 prevNum에 저장함으로써 이전 값을 기억하게 함.
    prevNum = num;
  });
  return result;
}
