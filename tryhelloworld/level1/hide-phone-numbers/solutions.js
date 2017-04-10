/*
전화번호 가리기
예: 01012345678 => 0101234****, 021234567 => 02123****
*/


// for
function hide_numbers(s) {
  const restLength = s.length - 4,
    visibleNum = s.substring(restLength);
  let result = '';
  
  for (let i = 0; i < restLength; i++) {
    result += '*';
  }
  result += visibleNum;
  
  return result;
}


// replace
function hide_numbers1(s) {
  const restLength = s.length - 4;

  return s.substring(0, restLength).replace(/\d/g, '*') + s.substring(restLength);
}
