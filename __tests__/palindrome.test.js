import {palindrome} from '../src/js/palindrome.js';

describe('palindrome', () => {
  test('palindrome is defined', () => {
    expect(typeof palindrome).toBeDefined();
  });
  
  test('palindrome is a function', () => {
    expect(typeof palindrome).toEqual('function');
  });
  
  test('"aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
  });
  
  test('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
  });
});