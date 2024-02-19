
const mealLoad = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then (res => res.json())
    .then (data => showMealItem(data.meals));
}



const showMealItem = meals =>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal);
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
        `
        mealContainer.appendChild(createDiv);
    })


}


const searchFood = () => {
    const searchField = document.getElementById('search-food');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log('My', searchText);
    mealLoad(searchText);
}

