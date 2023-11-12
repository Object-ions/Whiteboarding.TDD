import { reverseInt } from '../src/js/reverseInt.js';

describe('reverse int', () => {
  it('should be defined', () => {
    expect(reverseInt).toBeDefined();
  });
  
  it('is a function', () => {
    expect(typeof reverseInt).toEqual('function');
  });
  
  it('should return a number', () => {
    expect(typeof reverseInt(12)).toBe('number');
  });
  
  it('handles 0 as an input', () => {
    expect(reverseInt(0)).toEqual(0);
  });
  
  it('flips a positive number', () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });
  
  it('flips a negative number', () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
});