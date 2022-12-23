const img = document.getElementById('imgdrink')
const drink = document.getElementById('drinkname')
const detail = document.getElementById('det')
const category = document.getElementById('category')
const alcohol = document.getElementById('alcoholic')
const glass = document.getElementById('glass')
const ingredient = document.getElementById('ingredients')
const instruction = document.getElementById('instruction')
const btn = document.getElementById('btn')
let ing = []
window.onload = () => {
    fetchdata();
}


btn.onclick = () => {
    ingredient.innerHTML = '';
    ing = []
    fetchdata();
}



function fetchdata(){
    fetch('	https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(Response => Response.json())
    .then(data => displaydata(data.drinks[0]))
}



function displaydata(data){
    
    ing.push(data.strIngredient1, data.strIngredient2, data.strIngredient3, data.strIngredient4, data.strIngredient5, data.strIngredient6, data.strIngredient7, data.strIngredient8)
    console.log(data)     
    drink.innerText = data.strDrink;
    img.src = data.strDrinkThumb;
    category.innerText = data.strCategory;
    alcohol.innerText = data.strAlcoholic;
    glass.innerText = data.strGlass;

    console.table(ing)
    removeNull(ing)

    instruction.innerText = data.strInstructions;
    
}


function removeNull(d){
    d.forEach((item) => {
        if (item != null){

            let li = document.createElement("li");
            li.innerText = item;
            ingredient.appendChild(li);
        }

      });
}