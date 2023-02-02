document.getElementById('btn').addEventListener(`click`, () => {
    document.getElementById('unicard').innerHTML = ``
    fetch(`http://universities.hipolabs.com/search?country=${document.getElementById('contry').value}`)
    .then((resp) => resp.json())
    .then((data) =>{
        // console.log(data);
        for (let uni of data){
            console.log(uni);
            document.getElementById(`unicard`).innerHTML += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${uni.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${uni.country}</h6>
              <a href="${uni.web_pages}" target="_blank" class="card-link">Web Site</a>
            </div>
          </div>`
        }
    })
})





