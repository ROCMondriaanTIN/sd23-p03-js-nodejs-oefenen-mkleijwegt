const chart1 = document.querySelector('.chart-1');
const chart2 = document.querySelector('.chart-2');
const chart3 = document.querySelector('.chart-3');
const chart4 = document.querySelector('.chart-4');



fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
    .then(myData => myData.json())
    .then(myJsonData => createCharts(myJsonData));


function createCharts(weatherData) {
    createChart(chart1, weatherData.hourly.time, weatherData.hourly.temperature_2m);
    createChart(chart2);
    createChart(chart3);
    createChart(chart4);
}


function createChart(canvas, labels, data) {
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
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