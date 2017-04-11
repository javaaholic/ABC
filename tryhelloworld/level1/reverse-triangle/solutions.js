/*
*로 입력한 숫자 높이의 뒤집힌 삼각형 만들기
*/

// join
function printReversedTriangle(num) {
  let arr = [];

  for (let i = num; i > 0; i--) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '*';
    }
    arr.push(str);
  }

  return arr.join('\n');
}