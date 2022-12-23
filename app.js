const img = document.getElementById('imgdrink')
const drink = document.getElementById('drinkname')
const detail = document.getElementById('det')
const category = document.getElementById('category')
const alcohol = document.getElementById('alcoholic')
const glass = document.getElementById('glass')
const ingredient = document.getElementById('ingredients')
const instruction = document.getElementById('instruction')
const btn = document.getElementById('btn')
const main = document.getElementById('main')
const load = document.getElementById('load')


let ing = []
window.onload = () => {
    fetchdata();
}


btn.onclick = () => {
    ingredient.innerHTML = '';
    ing = []
    fetchdata();
    hidden();
    loader();
    setTimeout(hideloader, 1000)
    setTimeout(displaymain, 1000)
    


    
    


}

function hidden(){
    main.classList.add("hidden")
}

function loader(){
    load.classList.remove('hidden')
}

function displaymain(){
    main.classList.remove("hidden")
}

function hideloader(){
    load.classList.add("hidden")
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