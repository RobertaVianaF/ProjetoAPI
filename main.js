var url = 'https://api.covid19api.com/country/brazil/status/confirmed/live?from=2023-03-01T00:00:00Z&to=2023-03-01T00:00:01Z';

const cards = document.querySelector('.cards')

function getData(url) {
    return new Promise(function (resolve, reject) {
        axios.get(url).then(
            (response) => {
                var result = response.data;
                console.log('Processing Request');
                resolve(result);
            },
                (error) => {
                reject(error);
            }
        );
    });
  }

async function fillHTML() {
    const brazil = await getData(url)

    cards.innerHTML += `<section class="card contact">
    <div class="icon">

    </div>
    <h3>${brazil[0].Country}</h3>
    <span>Casos Confirmados: ${brazil[0].Cases}</span>
    
</section>`
}
  

fillHTML()