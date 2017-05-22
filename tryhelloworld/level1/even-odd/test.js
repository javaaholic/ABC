describe('evenOrOdd(num) 숫자를 입력 받아 짝수이면 "Even"을 홀수이면 "Odd"를 반환한다', () => {
  it('삼항조건문', () => {
    expect(evenOrOdd(10010102)).toEqual('Even');
    expect(evenOrOdd(232231)).toEqual('Odd');
  });

  it('if', () => {
    expect(evenOrOdd1(22222)).toEqual('Even');
    expect(evenOrOdd1(22221)).toEqual('Odd');
  });
});
