/*
 * 평균 구하기
 * http://tryhelloworld.co.kr/challenge_codes/126
 */


// reduce
function average(array){
  return array.reduce((prev, curr) => prev + curr) / array.length;
}


// for
function average1(arr) {
  let sum = 0,
    len = arr.length;

  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }

  return sum / len;
}


// for-of
function average2(arr) {
  let sum = 0;

  for (let item of arr) {
    sum += item;
  }

  return sum / arr.length;
}
