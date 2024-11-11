function repeatOperation(operation, interval) {
    setInterval(operation, interval);
  }
  function myOperation() {
    console.log("Операция выполнена", new Date().toLocaleTimeString());
  }
  repeatOperation(myOperation, 2000);
  