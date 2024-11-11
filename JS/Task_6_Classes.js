class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}`);
        console.log(`Возраст: ${this.age} лет`);
        console.log(`Страна: ${this.country}`);
    }
}

const person1 = new Person("Иван", 30, "Россия");
const person2 = new Person("Анна", 25, "Беларусь");

console.log("Сведения о первом человеке:");
person1.displayInfo();
console.log(""); 
console.log("Сведения о втором человеке:");
person2.displayInfo();
