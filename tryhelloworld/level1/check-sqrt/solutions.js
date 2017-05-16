/*
 * 정수 제곱근 판별하기
 * http://tryhelloworld.co.kr/challenge_codes/120
 */

// includes() 문자열 .으로 정수를 판별
function nextSqaure(n){
  const sqrt = Math.sqrt(n);

  return sqrt.toString().includes('.') ? 'no' : Math.pow(sqrt + 1, 2);
}

// 1로 나눠서 나머지로 정수를 판별
function nextSqaure1(n){
  const sqrt = Math.sqrt(n);

  return sqrt % 1 ? 'no' : Math.pow(sqrt + 1, 2);
}

// n을 나눠서 나머지로 정수를 판별
function nextSqaure2(n) {
  const sqrt = Math.sqrt(n);

  return n % sqrt ? 'no' : Math.pow(sqrt + 1, 2);
}
