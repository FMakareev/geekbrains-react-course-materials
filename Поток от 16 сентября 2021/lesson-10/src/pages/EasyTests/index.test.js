

function sum(a, b) {
  return a + b;
}

/**
 *
 * @return {string}
 * */
const concatName = (separate = ' ') => (...args) => {
  return args.join(separate)
}

describe('EasyTests', () => {

  test.skip('adds 1 + 2 to equal 3', () => {
    const result = sum(1,2);
    expect(result).toEqual(3);
  });

  it('is empty args', () => {
    const result = concatName(' ')();

    expect(result).toEqual('');
  })

  it('args to string', () => {
    const result = concatName(' ')('first', 'last');

    expect(result).toEqual('first last');
  })

  it('args to string by separate', () => {
    const result = concatName('+')('first', 'last');

    expect(result).toEqual('first+last');
  })


})
