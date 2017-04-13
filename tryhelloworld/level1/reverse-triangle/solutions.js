/*
*로 입력한 숫자 높이의 뒤집힌 삼각형 만들기
*/

// for
function printReversedTriangle(num) {
  let str = '';

  for (let i = num; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      str += '*';
    }
    str += i > 1 ? '\n' : '';
  }

  return str;
}

// str.repeat
function printReversedTriangle1(num) {
  let str = '';
  while (num > 0) {
    str += '*'.repeat(num--) + (num ? '\n' : '');
  }
  return str;
}

// arr.map
function printReversedTriangle2(num) {
  return Array(num).fill(null).map(() => '*'.repeat(num--)).join('\n');
}

// recursion
function printReversedTriangle3(num) {
  return '*'.repeat(num) + (num > 1 ? '\n' + printReversedTriangle3(num - 1) : '');
}
