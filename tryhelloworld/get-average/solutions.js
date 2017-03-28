function average(array){
  //함수를 완성하세요
  let len = array.length;
  if (len >= 1) {
    let sum = array.reduce(function (prev, curr) {
	    return prev + curr;
    });
    return sum/len;
  }

  return 0;
}