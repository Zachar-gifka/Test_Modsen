function checkInteger(n) {
    // Проверяем, является ли n целым числом
    if (!Number.isInteger(n)) {
      // Если не целое число, выбрасываем ошибку
      throw new Error('Ошибка: Введенное значение не является целым числом!');
    }
  
    return n; // Если число целое, возвращаем его
}
console.log(checkInteger(5.1))