/*
함수를 완성해서 매개변수 list의 평균값을 return하도록 만들어 보세요.
어떠한 크기의 list가 와도 평균값을 구할 수 있어야 합니다.
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
