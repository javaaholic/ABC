describe('printReversedTriangle(num)', () => {
  it('join', () => {
    expect(printReversedTriangle(4)).toEqual('****\n***\n**\n*');
    expect(printReversedTriangle(2)).toEqual('**\n*');
    expect(printReversedTriangle(1)).toEqual('*');
  });
});