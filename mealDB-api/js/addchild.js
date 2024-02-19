
fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then (data => showPictures(data))

const showPictures = data => {
   const getContainer =  document.getElementById('container');

   for (const pic of data){
    console.log(pic);
     const createDiv = document.createElement('div');
     createDiv.classList.add('col');
     createDiv.innerHTML = `
     <div class="card">
     <img src="${pic.url}" class="card-img-top" alt="...">
     <div class="card-body">
     <h5 class="card-title"> ${pic.title.slice(0,100)}</h5>
     </div>
     `
    getContainer.appendChild(createDiv);
   }
}