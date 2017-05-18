describe('스트링을 숫자로 바꾸기', () => {
  it('+', () => {
    expect(strToInt1('10010102')).toEqual(10010102);
    expect(strToInt1('232231')).toEqual(232231);
    expect(strToInt1('0')).toEqual(0);
    expect(strToInt1('-1111')).toEqual(-1111);
  });

  it('Number', () => {
    expect(strToInt2('10010102')).toEqual(10010102);
    expect(strToInt2('232231')).toEqual(232231);
    expect(strToInt2('0')).toEqual(0);
    expect(strToInt2('-1111')).toEqual(-1111);
  });

  it('parseInt', () => {
    expect(strToInt3('10010102')).toEqual(10010102);
    expect(strToInt3('232231')).toEqual(232231);
    expect(strToInt3('0')).toEqual(0);
    expect(strToInt3('-1111')).toEqual(-1111);
  });
});
