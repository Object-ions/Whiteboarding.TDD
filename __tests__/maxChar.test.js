const maxChar = require('./../src/js/maxChar.js');

describe ('maxChar', () => {
  test('should be a fx', () => {
    expect(typeof maxChar).toEqual('function');
  });
  
  test('maxChar is defined', () => {
    expect(typeof maxChar).toBeDefined();
  });

  test('find most used char', () => {
    expect(maxChar('a')).toEqual('a');
    expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
  });

  test('should work with numbers in the string', () => {
    expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
  });
});