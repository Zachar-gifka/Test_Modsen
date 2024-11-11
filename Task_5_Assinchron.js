function asyncOperation1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Операция 1 завершена');
        resolve('Результат операции 1');
      }, 1000);
    });
  }
  
  function asyncOperation2(resultFromPrevious) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Операция 2 завершена, получила:', resultFromPrevious);
        resolve('Результат операции 2');
      }, 1000);
    });
  }
  
  function asyncOperation3(resultFromPrevious) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Операция 3 завершена, получила:', resultFromPrevious);
        resolve('Результат операции 3');
      }, 1000);
    });
  }
  
  function executeOperations() {
    asyncOperation1()
      .then(result1 => {
        return asyncOperation2(result1); // передаем результат из операции 1 в операцию 2
      })
      .then(result2 => {
        return asyncOperation3(result2); 
      })
      .then(result3 => {
        console.log('Все операции завершены, финальный результат:', result3);
      })
      .catch(error => {
        console.error('Ошибка в процессе выполнения операций:', error);
      });
  }
  
executeOperations();
  