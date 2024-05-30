const body = document.body;
body.style.backgroundColor = 'rgba(150, 126, 118, 0.5)';

const barChart = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [{
    label: "Bar Chart",
    data: [65, 59, 80, 81, 56, 55],
    backgroundColor: [
      'rgba(256, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
  }],
};

const pieChart = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [{
    label: "Pie Chart",
    data: [65, 59, 80, 81, 56, 55],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const pieCtx = document.getElementById("pieChart").getContext("2d");

function renderPieChart() {
  const myPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: pieChart
  });
}



function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

const lineChart = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [{
    label: "Line Chart",
    data: [65, 59, 80, 81, 56, 55],
    fill: false,
    borderColor: "rgba(153, 102, 255, 0.9)",
    borderWidth: 1
  }]
};

const ctx = document.getElementById('myChart').getContext('2d');
let currentChart;

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }

  let chartData;
  switch (type) {
    case 'bar':
      chartData = barChart;
      break;
    case 'pie':
      chartData = pieChart;
      break;
    case 'line':
      chartData = lineChart;
      break;
    default:
      chartData = undefined;
  }

  if (chartData) {
    currentChart = new Chart(ctx, {
      type: type,
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

function changeChartType(type) {
  renderChart(type);
}

renderChart('bar');
