Introduction : OOP is a programming style that helps developers build large and complex applications in a structured way. In TypeScript, OOP becomes very powerful because it adds type safety on top of these concepts.the four pillars of OOP help organize code in a clean and scalable way.

1. Inheritance (Code Reuse)
Inheritance allows one class to reuse the properties and methods of another class. This avoids duplication and keeps shared logic in one place.
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
}

2. Polymorphism (Flexible Behavior)
Polymorphism allows different classes to use the same method name but behave differently.
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

3. Abstraction :
Abstraction hides internal details and shows only essential features.
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

4. Encapsulation:
Encapsulation keeps data inside a class and prevents direct modification from outside.
class BankAccount {  
    private balance: number = 0;  deposit(amount: number) 
{ 
    this.balance += amount; 
}  
getBalance(): number {  
      return this.balance;  
      }
}

Conclusion : The four pillars of OOP make large TypeScript projects easier to build and maintain:
Inheritance reduces duplication
Polymorphism adds flexibility
Abstraction simplifies complexity
Encapsulation protects data