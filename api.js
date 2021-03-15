const searchForm = document.querySelector('form.recipe-search');
const searchResultDiv = document.querySelector('.recepies__list');
let searchQuery = '';
const APP_ID = '7a50d1b6';
const APP_KEY = 'ec5b50bc38034b8006609e7c05ba4e90';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('form.recipe-search input').value;
    fetchAPI();
    document.querySelector('form.recipe-search input').value='';
});

async function fetchAPI () {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    let generatedHTML = '';
    results.map (result => {
        generatedHTML +=
        `
        <div class="box__card">
            <a href="${result.recipe.url}" target="_blank">
                <div class="card__image">
                    <img src="${result.recipe.image}" alt="">
                    <div class="card__title">
                        <h3>${result.recipe.label}</h3>
                    </div>
                </div>
            </a>
            <div class="card__description">
                <div class="desc time">
                    <h3>Timp prep.</h3>
                    <p>${result.recipe.totalTime}</p>
                </div>
                <div class="desc dificulty">
                    <h3>Dificultate</h3>
                    <p>Mediu</p>
                </div>
                <div class="desc kal">
                    <h3>Calorii</h3>
                    <p>${result.recipe.calories.toFixed(2)}</p>
                </div>
                <div class="desc type">
                    <ion-icon name="leaf-outline"></ion-icon>
                    <p>${result.recipe.healthLabels[0]}</p>
                </div>
            </div>
        </div>
        `
    })
    searchResultDiv.innerHTML = generatedHTML;
}