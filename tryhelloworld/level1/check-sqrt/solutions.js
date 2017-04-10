/*
정수 n을 입력해서 임의의 정수 x의 제곱이면 x+1의 제곱을, 아니면 'no'를 반환한다
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
