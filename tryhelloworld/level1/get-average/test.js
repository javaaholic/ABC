describe("average(array) 숫자 배열을 입력 받아 평균값을 반환한다", () => {
  it("reduce", () => {
    expect(average([5,3,4])).toBe(4);
    expect(average([51,21,30,10])).toBe(28);
    expect(average([1,3])).toBe(2);
  });

  it('for', () => {
    expect(average1([1,3,4])).toBe(8/3);
    expect(average1([5,2,30])).toBe(37/3);
    expect(average1([1,1,2])).toBe(4/3);
  });

  it('for-of', () => {
    expect(average2([1])).toBe(1);
    expect(average2([0,1])).toBe(0.5);
    expect(average2([1,3,2,1,2,3])).toBe(2);
  });
});