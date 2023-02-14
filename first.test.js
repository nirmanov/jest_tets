const get = require('./getPercents');

//успешное, неуспешное выполнение функции(тест-кейсы)
test('Get percents true', () => {
  expect(get.getPercents(30, 200)).toBe(60);
});

test('Get percents false', () => {
  expect(get.getPercents(10, 200)).toBe(60);
});

//корнер-кейсы

//unit-тесты(минимум 3)