const prices = [100, 200, 300];
const discounted = prices.map(price => price * 0.9); 
console.log(discounted);
console.log(prices);

const students = [75, 42, 89, 55, 30];
const passed = students.filter(mark => mark >= 50);
console.log(passed); // [75, 89, 55]

const expenses = [500, 1200, 300, 400];
const total = expenses.reduce((sum, expense) => sum + expense, 0);
console.log(total); // 2400
