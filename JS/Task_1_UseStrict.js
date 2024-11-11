"use strict";

function factorial(n) {
  // Проверка на корректность входного значения
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Входное значение должно быть неотрицательным целым числом');
  }

  let result = 1;

  // Итеративное вычисление факториала
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(5));