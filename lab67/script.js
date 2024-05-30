const body = document.body;
body.style.backgroundColor = 'rgba(150, 126, 118, 0.5)';

const barChart = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [{
    label: "Bar Chart",
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


 let currentPage = 1; // Assume the current page is 1 initially
    const totalPages = 10; // Assume there are 10 total pages

    function goToPage(pageNumber) {
        // Update the active page styling
        document.querySelectorAll('.pagination .page-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.pagination .page-item:nth-child(${pageNumber + 2})`).classList.add('active');

        // Fetch new content based on the page number
        // Replace this with your actual logic to fetch and display content
        console.log(`Fetching content for page ${pageNumber}`);

        // Update the current page
        currentPage = pageNumber;
        updatePageNavigation();
    }

    function updatePageNavigation() {
        // Enable or disable first and previous buttons based on the current page
        document.getElementById('firstPage').classList.toggle('disabled', currentPage === 1);
        document.getElementById('previousPage').classList.toggle('disabled', currentPage === 1);

        // Enable or disable last and next buttons based on the current page
        document.getElementById('lastPage').classList.toggle('disabled', currentPage === totalPages);
        document.getElementById('nextPage').classList.toggle('disabled', currentPage === totalPages);
    }

    document.getElementById('previousPage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    });

    document.getElementById('nextPage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    });

    document.getElementById('firstPage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage !== 1) {
            goToPage(1);
        }
    });

    document.getElementById('lastPage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage !== totalPages) {
            goToPage(totalPages);
        }
    });

    document.getElementById('goToPageButton').addEventListener('click', function() {
        const pageNumber = parseInt(document.getElementById('pageNumberInput').value);
        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== currentPage) {
            goToPage(pageNumber);
        }
    });

    updatePageNavigation();
