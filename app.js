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
