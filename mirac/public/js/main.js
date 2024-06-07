console.log('Main loaded');

const chart1 = document.querySelector('.chart-1');
const chart2 = document.querySelector('.chart-2');

fetch('/electricity')
    .then(data => data.json())
    .then(jsonData => showCharts(jsonData));

function showCharts(jsonData) {
    console.log(jsonData.energyConsumption.monthlyData);

    const labels = [];
    const data = [];
    for(key in jsonData.energyConsumption.monthlyData){
        console.log(key);
        labels.push(key);
        data.push(jsonData.energyConsumption.monthlyData[key].currentYear);
    }
    console.log(labels);
    console.log(data);

    createChart(chart1, 'pie', labels, data);
    createChart(chart2, 'doughnut', labels, data);
}

function createChart(canvas, type, labels, data){
    new Chart(canvas, {
        type: type,
        data: {
        //de labels komen op de x as
        labels: labels,
        datasets: [{
            label: 'Electricity',
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