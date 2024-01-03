// Sample data
const categories = ['A', 'B', 'C','d','e','f','g'];
const values = [10, 20, 15,5,18,25,30];

// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create a bar chart
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: categories,
        datasets: [{
            label: 'Values',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color of the bars
            borderColor: 'rgba(75, 192, 192, 1)',     // Border color of the bars
            borderWidth: 1                             // Border width of the bars
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
// Sample data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
      label: 'Monthly Sales',
      data: [50, 60, 45, 70, 80],
      fill: false,
      borderColor: '#69DFDF',
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

// Get the canvas element
const ctz = document.getElementById('myDoughnutChart').getContext('2d');

// Create a doughnut chart
const myDoughnutChart = new Chart(ctz, {
  type: 'doughnut',
  data: data,
  options: {
      responsive: true,
      maintainAspectRatio: false,
  },
});

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
        cutout: '80%', // Adjust the cutout to control the size of the center hole
      },
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('donutChartt').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        datasets: [{
          data: [11,14,7,3,15],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
             // 70% transparent for the "empty" part of the donut
          ],
          borderWidth: 1,
        }],
      },
      options: {
        cutout: '80%', // Adjust the cutout to control the size of the center hole
      },
    });
  });





        
    