/*Create a class called PersonAccount.
It has firstName, lastName, incomes, expenses properties, and totalincome, totalExpense, addIncome, addExpense and accountBalance methods. 
Incomes is an array of objects. incomes object have income and discription properties.
Expenses is also an array of objects which has expense and description properties
*/
class PersonAccount {
  constructor(firstName, lastName, incomes, expenses, discription) {
    this.firstName = firstName;
    this.lastName = lastName;
    let inc = {
      incomes: incomes,
      discription: discription
    }
    this.incomes = [inc.incomes, inc.discription];
    let exp = {
      expenses: expenses,
      discription: discription
    }
    this.expenses = [exp.expenses, exp.discription]
  }
  totalincome (incomes) {
    incomes + incomes;
  }
  totalExpense (expenses){
    expenses + expenses;
  }
  addIncome (incomes) {
    newIncomes + incomes;
  }
  addExpense (expenses) {
    return newExpenses + expenses;
  }
  accountBalance (incomes, expenses){
    return expenses - incomes
  }
}
  const person = new PersonAccount("Mohammad", "Hashir", 10000, 5000, "money");
  /*
  2) Create an automobile class. The class will have name, model, color, type: automatic or manual proper
  ties and create different methods e-g: start() logs car is ready for 
  drive, opendoor() logs door is open
  */
  class AutoMobile {
    constructor(name, model, color, type) {
      this.name = name;
      this.model = model;
      this.color = color;
      this.type = type;
      this.start();
      this.opendoor();
    }
    start(){
      console.log( "car is ready for drive");
    }
    opendoor(){
      console.log("door is open");
    }
  }
  const car = new AutoMobile("kia", 2022, "White", "auto");
  console.log(car);
  
 /*
 Create child classes of Automobile Car, Truck, Bus these classes
  also have extra information like doors property, maxspeed.
 */

  class Truck extends AutoMobile {
    constructor(name, model, color, type, maxSpeed, doors){
        super(name, model, color, type);
    this.maxSpeed = maxSpeed
    this.doors = doors
    }
    
  }

  const truck = new Truck("Khyber", 2020, "red", "Manual", "120Kmph", 5);
  truck.start();
  truck.opendoor();
  console.log(truck);