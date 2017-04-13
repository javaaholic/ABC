describe('printReversedTriangle(num)', () => {
  it('for', () => {
    expect(printReversedTriangle(4)).toEqual('****\n***\n**\n*');
    expect(printReversedTriangle(2)).toEqual('**\n*');
    expect(printReversedTriangle(1)).toEqual('*');
  });
  
  it('str.repeat', () => {
    expect(printReversedTriangle1(4)).toEqual('****\n***\n**\n*');
    expect(printReversedTriangle1(2)).toEqual('**\n*');
    expect(printReversedTriangle1(1)).toEqual('*');
  });
  
  it('arr.map', () => {
    expect(printReversedTriangle2(4)).toEqual('****\n***\n**\n*');
    expect(printReversedTriangle2(2)).toEqual('**\n*');
    expect(printReversedTriangle2(1)).toEqual('*');
  });
  
  it('recursion', () => {
    expect(printReversedTriangle3(4)).toEqual('****\n***\n**\n*');
    expect(printReversedTriangle3(2)).toEqual('**\n*');
    expect(printReversedTriangle3(1)).toEqual('*');
  });
});