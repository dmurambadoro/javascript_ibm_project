const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - 21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $18.79', 'Pasta - $15.99', 'Burger - $10.79', 'Salmon - $17.99'];
const dessertMenu = ['Cake', 'Ice Cream - $8.99', 'Pudding - $6.50', 'Fruit Salad - $15'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItems = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItems += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItems;

let dessertItems = '';
for (let i =0; i < dessertMenu.length; i++) {
    dessertItems += `<p>Item ${i + 1} : ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItems;
