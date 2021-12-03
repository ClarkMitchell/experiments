export function FizzBuzz(n: number): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
}

export function TerseFizzBuzz(n: number): (string | number)[] {
  return Array.from(Array(n)).map(
    (_x, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i,
  );
}
