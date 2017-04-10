describe("hide_numbers(s) 전화번호 문자열을 입력받아 나머지 4자리를 제외한 숫자를 *로 가린값을 반환한다", () => {
  it("substring으로 마지막 4개의 숫자를 자르고 나머지 숫자들 길이만큼 for문으로 *을 더한다", () => {
    expect(hide_numbers('01033332222')).toEqual('*******2222');
    expect(hide_numbers('023331111')).toEqual('*****1111');
  });

  it('replace', () => {
    expect(hide_numbers1('01033332222')).toEqual('*******2222');
    expect(hide_numbers1('023331111')).toEqual('*****1111');
  });

  it('regex', () => {
    expect(hide_numbers2('01033332222')).toEqual('*******2222');
    expect(hide_numbers2('023331111')).toEqual('*****1111');    
  });
});