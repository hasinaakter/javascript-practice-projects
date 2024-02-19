// const getCountry = document.getElementById('lists');
// const lii = document.createElement('li');
// lii.innerHTML = `
// <h1>See Image</h1>`;
// getCountry.appendChild(lii);
const loadApi =() =>{   
const loadUser = 'https://restcountries.com/v3.1/all';
fetch(loadUser)
.then(res => res.json())
.then (data => visitCountry(data))
}

loadApi();


const visitCountry = countries => {
    // for of function
   for (const country of countries){
    const showCountry = document.getElementById('country');

    // use createElement
    // const createDiv = document.createElement('div');
    // const createHeading = document.createElement('h3');
    // createDiv.appendChild(createHeading);
    // createDiv.innerText = country.name.common;
    //  const createPara = document.createElement('p');
    //  createDiv.appendChild(createPara);
    //  createPara.innerText = country.area;

    // use backtick
    console.log(country);
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
    <img class="images" src="${country.flags.svg}"></img>
    <h3>${country.name.common}</h3>
    <p>${country.area}</p>
    <button>Show Details</button>
    `
     showCountry.appendChild(createDiv);
     showCountry.classList.add('countryshow');
     createDiv.classList.add('countryDiv');

   }
}