/* Challenge 2: Breakfast Menu
- Topic: .map()
Our restaurant menu currently only shows the breakfast menu, 
as it has been hard coded into the HTML file. However, we want 
to offer a dinner menu instead. Let's fix this using .map()

*/

const dinnerFoods = ['🍝','🍔','🌮']
const menuSection = document.getElementById('menu')
const foodArr = (arr) => {
    let dinner = ''
    arr.map((food) => menuSection.innerHTML = dinner +=`<div class="food">${food}</div>`)
    return dinner;
}

foodArr(dinnerFoods)
