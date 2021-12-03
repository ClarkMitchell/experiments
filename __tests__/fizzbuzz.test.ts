import { FizzBuzz, TerseFizzBuzz } from '../src/fizzbuzz';

const thruThirty = [
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'FizzBuzz',
  16,
  17,
  'Fizz',
  19,
  'Buzz',
  'Fizz',
  22,
  23,
  'Fizz',
  'Buzz',
  26,
  'Fizz',
  28,
  29,
  'FizzBuzz',
] as const;

describe('FizzBuzz', () => {
  it('prints 1', () => {
    const integer = 1;
    expect(FizzBuzz(integer)).toStrictEqual([integer]);
  });

  it('prints 1 2 Fizz 4 Buzz', () => {
    const integer = 5;
    expect(FizzBuzz(integer)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  it('prints thru 30', () => {
    const integer = 30;
    expect(FizzBuzz(integer)).toStrictEqual(thruThirty);
  });
});

describe('TerseFizzBuzz', () => {
  it('prints 1', () => {
    const integer = 1;
    expect(TerseFizzBuzz(integer)).toStrictEqual([integer]);
  });

  it('prints 1 2 Fizz 4 Buzz', () => {
    const integer = 5;
    expect(TerseFizzBuzz(integer)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  it('prints thru 30', () => {
    const integer = 30;
    expect(TerseFizzBuzz(integer)).toStrictEqual(thruThirty);
  });
});
