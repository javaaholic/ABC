/*
 * 짝수와 홀수
 * http://tryhelloworld.co.kr/challenge_codes/122
 */

// 삼항 조건문
function evenOrOdd(num) {
  return (num % 2) ? 'Odd' : 'Even';
}

// if
function evenOrOdd1(num) {
  if (num % 2) {
    return 'Odd';
  } else {
    return 'Even';
  }
}
