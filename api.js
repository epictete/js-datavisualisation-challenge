// Variables

let chartLabels3 = [];
let chartData3 = [];
let data3 = {
  labels: chartLabels3,
  datasets: [
    {
      label: "Live Chart with dataPoints from External JSON",
      data: chartData3,
      backgroundColor: "rgba(84, 153, 199, 0.6)",
      borderColor: "rgba(84, 153, 199, 0.6)",
    },
  ],
};

// Fetch data

const getData = async () => {
  try {
    const response = await fetch(
      "https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json"
    );
    const data = await response.json();
    data.forEach(element => {
      chartLabels3.push(element[0]);
      chartData3.push(element[1]);
    });
    updateChart();
  } catch (e) {
    console.error(e);
  }
};
getData();

// Update chart with external JSON data

const updateChart = async () => {
  try {
    const response = await fetch(
      "https://canvasjs.com/services/data/datapoints.php?xstart=" +
        (chartLabels3.length + 1) +
        "&ystart=" +
        chartData3[chartData3.length - 1].y +
        "&length=1&type=json"
    );
    const data = await response.json();
    data.forEach(element => {
      chartLabels3.push(element[0]);
      chartData3.push(element[1]);
    });
    chart3.update();
    setTimeout(updateChart, 1000);
  } catch (e) {
    console.error(e);
  }
};

// Chart declaration

const ctx3 = document.getElementById("myChart3").getContext("2d");
const chart3 = new Chart(ctx3, {
  type: "line",
  data: data3,
});
