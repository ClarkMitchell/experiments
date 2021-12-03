import HelloWorld from '../src/template';

describe('Hello world', () => {
  it('does a thing', () => {
    expect(HelloWorld()).toEqual('Hello World!');
  });
});
