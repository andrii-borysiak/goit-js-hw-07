const listItems = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
