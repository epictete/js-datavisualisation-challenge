// Get API data

(async () => {
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
})();

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
