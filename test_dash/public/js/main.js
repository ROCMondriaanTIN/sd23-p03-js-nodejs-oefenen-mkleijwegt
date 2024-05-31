console.log('main loaded');

const chart1 = document.querySelector('.chart1');
const chart2 = document.querySelector('.chart2');

new Chart(chart1, {
    type: 'pie',
    data: {
      //de labels komen op de x as
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        // de data komt op de y as
        data: [12, 19, 3, 5, 2, 3],
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

new Chart(chart2, {
    type: 'doughnut',
    data: {
      //de labels komen op de x as
      labels: ['Rick Astley - Never gonna give you up', 'Darude - Sandstorm', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        // de data komt op de y as
        data: [50, 33, 3, 5, 2, 3],
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

const emailInput = document.querySelector('.email-input');
const loginForm = document.querySelector('.login-form');

emailInput.addEventListener('keyup', function(){
    if(!loginForm.checkValidity()){
        console.log('Is not valid');
        emailInput.classList.remove('border-success');
        emailInput.classList.add('border-danger', 'border-3');
    } else{
        console.log('Is valid');
        emailInput.classList.remove('border-danger');
        emailInput.classList.add('border-success', 'border-3');
    }
});