console.log('main loaded');

const chart1 = document.querySelector('.chart-1');

(async () => {
    //we voeren de fetch uit naar de url /user-add, gebruiken de POST methode en gaan json versturen in de body
    const rawResponse = await fetch('https://api.spotify.com/v1/artists?ids=2RSApl0SXcVT8Yiy4UaPSt,4eOjprZV7J3pEjQOsdtLjC', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer BQBxB19DPEU-ffk6v6r6qY5Das4ph2WK7F9lu-GHHjKAI11WQQ5YZIsxYlMIUCHtObZJ3bGLbmm99rTdA4bNFITdfVEps0_lsrxQr5_Ecv5p7Fb880E'
        }
    });
    //het antwoord wat we van de server terugkrijgen zetten we om naar een JavaScript object met json();
    const content = await rawResponse.json();

    console.log(content);

    createCharts(content.artists);

})();

function createCharts(artists) {
    console.log(artists);

    const labels = [];
    const data = [];
    for (let i = 0; i < artists.length; i++) {
        const artist = artists[i];
        labels.push(artist.name);
        data.push(artist.followers.total);
    }
    console.log(labels);
    console.log(data);
    createChart(chart1, labels, data);
}

function createChart(canvas, labels, data) {
    new Chart(canvas, {
        type: 'bar',
        data: {
            //de labels komen op de x as
            labels: labels,
            datasets: [{
                label: '# of Votes',
                // de data komt op de y as
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


/*(async () => {
    //we voeren de fetch uit naar de url /user-add, gebruiken de POST methode en gaan json versturen in de body
    const rawResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=&client_secret='
    });
    //het antwoord wat we van de server terugkrijgen zetten we om naar een JavaScript object met json();
    const content = await rawResponse.json();

    console.log(content);

})();*/



