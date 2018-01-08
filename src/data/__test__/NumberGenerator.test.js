import NumberGenerator from '../NumberGenerator'

it('ランダムで一意な数が生成できること', () => {
  const sut = new NumberGenerator(1, 10);
  const actual = sut.generateUniqueNumbers();
  expect(actual.size).toBe(10);
  actual.forEach(number => {

    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(10)
  });

});
