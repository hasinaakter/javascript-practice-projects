const search = ()  => {
    
fetch('/product.json')
.then(res => res.json())
.then(data => loadPic(data))

}


const loadPic = loaddata => {

  // console.log(loaddata.slice(0,10));

    const getDiv = document.getElementById('add-child');

    for (const loadinfo of loaddata) {


        const createDiv = document.createElement('div');
        createDiv.classList.add('col');

        createDiv.innerHTML = `
        <div class="card h-75" >
         <img class="card-img-top w-100 h-25" src="${loadinfo.image}" alt="Card image cap">
         <div class="card-body">
         <h3>${loadinfo.name}</h3>
            <p class="card-text"> ${loadinfo.description.slice(0, 100) } </p>
            <button class="py-1 px-3 bg-danger text-light border-0 ">Buy Now</button>
          </div>
        </div>
        
        `

        getDiv.appendChild(createDiv);

        // console.log(loadinfo);
    }



}