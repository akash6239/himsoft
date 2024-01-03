
    document.getElementById('optionsButton').addEventListener('click', function() {
      var optionsList = document.querySelector('.options-list');
      optionsList.style.display = (optionsList.style.display === 'none' || optionsList.style.display === '') ? 'block' : 'none';
    });


    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
          label: 'Monthly Sales',
          data: [50, 60, 45, 70, 80],
          fill: false,
          // borderColor: '#69DFDF',
          tension: 0.4,
      }]
    };
    // Get the canvas element
const cty = document.getElementById('myLineChart').getContext('2d');

// Create a line chart
const myLineChart = new Chart(cty, {
  type: 'line',
  data: data,
  options: {
      responsive: true,
      maintainAspectRatio: false,
  },
});


const dataa = {
  labels: ['Profit', 'Loss', 'Others'],
  datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
  }]
};

document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('donutChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [30, 70],
        backgroundColor: [
          '#3498db', // 30% blue background
          '#f97316',
           // 70% transparent for the "empty" part of the donut
        ],
        borderWidth: 1,
      }],
    },
    options: {
      cutout: '80%', 
      maintainAspectRatio: false,
      // Adjust the cutout to control the size of the center hole
    },
  });
});