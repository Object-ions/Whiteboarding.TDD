import { reverseString } from '../src/js/reverseString-1.js';

describe('reverse string', () => {
  it('should be existed', () => {
    expect(reverseString).toBeDefined();
  });
  
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });

  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  it('should return the reversed string', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('bye')).toEqual('eyb');
    expect(reverseString('hello world')).toEqual('dlrow olleh');
    expect(reverseString('   hello world')).toEqual('dlrow olleh   ');
  });
});