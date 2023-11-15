import array from './array.js';
import searchInArray from './func.js';

console.log("Шукаємо 'James' за ім'ям:");
searchInArray(array, 'name', 'Jamesx')
  .then(results => {
    results.forEach(item => {
      item.greeting();
      console.log(item.getinfo('gender'));
    });
  })
  .catch(error => {
    console.log(error);
  });

console.log("\nШукаємо 'Kris' за ім'ям:");
searchInArray(array, 'name', 'Kris')
  .then(results => {
    results.forEach(item => {
      item.greeting();
      console.log(item.getinfo('gender'));
    });
  })
  .catch(error => {
    console.log(error);
  });

console.log("\nШукаємо 'Jane' за ім'ям:");
searchInArray(array, 'name', 'Jane')
  .then(results => {
    results.forEach(item => {
      item.greeting();
      console.log(item.getinfo('gender'));
    });
  })
  .catch(error => {
    console.log(error);
  });
