/*
 * 수박수박수박수박수박수?
 * http://tryhelloworld.co.kr/challenge_codes/107
 */

// for + tenary condition
function waterMelon(n) {
  let result = '';
  for (let i = 1, len = n + 1; i < len; i++) {
    result += i % 2 ? '수' : '박';
  }
  return result;
}
