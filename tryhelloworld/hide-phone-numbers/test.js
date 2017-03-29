describe("hide_numbers(s)", () => {
  it("substring으로 마지막 4개의 숫자를 자르고 나머지 숫자들 길이만큼 for문으로 *을 더한다", () => {
    expect(hide_numbers('01033332222')).toBe('*******2222');
    expect(hide_numbers('023331111')).toBe('*****1111');
  });
});