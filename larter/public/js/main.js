console.log('Main loaded');

const chart1 = document.querySelector('.chart-1');
const chart2 = document.querySelector('.chart-2');

fetch('/currencies/')
    .then(data => data.json())
    .then(jsonData => createCharts(jsonData));

function createCharts(currencies){
    console.log(currencies);
    const labels = [];
    const data = [];
    for (let i = 0; i < currencies.length; i++) {
        const currency = currencies[i];
        labels.push(currency.date);
        data.push(currency.eur['doge']);
    }
    console.log(labels);
    console.log(data);


    createChart(chart1, labels, data);
}

function createChart(canvas, labels, data){
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