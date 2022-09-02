const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchForm.addEventListener('submit', retrieve)

function retrieve(e){

    e.preventDefault()

    const apiKey = 'XrNCA4bC_gdOUgg1hnN6d5ddc_N1MKTrOIFGm_kRlI0';
    let topic = input.value;

    let url =  `https://api.newscatcherapi.com/v2/search?q=${topic}&apiKey=${apiKey}`;

    fetch(url).then((response) =>{
        return response.json()
    }).then((data)=>{
        console.log(data);
    })
