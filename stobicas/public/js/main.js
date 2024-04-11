console.log('loaded');

const chart1 = document.querySelector('.chart-1');
const chart2 = document.querySelector('.chart-2');
const chart3 = document.querySelector('.chart-3');
const chart4 = document.querySelector('.chart-4');

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
    .then(weatherData => weatherData.json())
    .then(weatherJsonData => createCharts(weatherJsonData));

function createCharts(weatherJsonData) {
    console.log(weatherJsonData);
    createChart(chart1, 'line', 'Temperatuur', weatherJsonData.hourly.time, weatherJsonData.hourly.temperature_2m);
    createChart(chart2, 'bar', 'Luchtvochtigheid', weatherJsonData.hourly.time, weatherJsonData.hourly.relative_humidity_2m);
}


/*createChart(chart1, 'bar', );
createChart(chart2, 'line');
createChart(chart3, 'bar');
createChart(chart4, 'pie');*/

function createChart(canvas, type, label, labels, data) {
    new Chart(canvas, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: label,
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