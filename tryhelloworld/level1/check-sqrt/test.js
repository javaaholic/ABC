describe('nextSqare(n)', () => {
  it('includes(".")', () => {
    expect(nextSqaure(121)).toEqual(144);
    expect(nextSqaure(11)).toEqual('no');
  });

  it('% 1', () => {
    expect(nextSqaure1(121)).toEqual(144);
    expect(nextSqaure1(11)).toEqual('no');    
  });

  it('n %', () => {
    expect(nextSqaure2(9)).toEqual(16);
    expect(nextSqaure2(3)).toEqual('no');
  });
});
