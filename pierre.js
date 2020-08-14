function addCanvas(elementRef, index) {
  let idName = "myChart";
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", idName + index);
  elementRef.before(canvas);
  return idName + index;
}

function createChart(
  chartID,
  chartType,
  labelsArray,
  dataSetJSONArray,
  optionsJSON
) {
  let charRef = new Chart(document.getElementById(chartID).getContext("2d"), {
    type: chartType, //bar, horizontalBar, pie, line , doughtnut, radar, polarArea
    data: {
      labels: labelsArray,
      datasets: dataSetJSONArray,
    },
    options: optionsJSON,
  });

  return charRef;
}

var dataArray = [];
var labelsArray = [];
var chart3Ref;

let elementID = addCanvas(document.getElementById("bodyContent"), 3);

// with JQuery, get the 10 first data from the API, with use of a callback function executed ONLY after the execution of function getJSON()

$.getJSON(
  "https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=0&length=10&type=json",
  function (data) {
    $.each(data, function (key, value) {
      labelsArray.push(`label-${value[0]}`); //set the array of labels
      dataArray.push(parseInt(value[1])); //set the array of data
    });

    let dataSetJSONArray = [
      {
        label: "label",
        data: dataArray,
        backgroundColor: "green",
        borderWidth: 1,
        borderColor: "grey",
        hoverBorderWidth: 5,
        hoverBorderColor: "black",
      },
    ];

    let optionsJSON = {
      title: { display: true, text: "statistics", fontSize: 25 },
      legend: {
        display: true,
        position: "right",
        labels: { fontColor: "red" },
      },
      layout: { padding: { left: 30, right: 30, bottom: 50, top: 50 } },
      tooltips: { enabled: true },
    };

    chart3Ref = createChart(
      elementID,
      "bar",
      labelsArray,
      dataSetJSONArray,
      optionsJSON
    );
    updateChart();
  }
);

let counter = -1;
//to update the chart
function updateChart() {
  counter++; //add this counter to the default value[0] to go upper than label-10
  //get ONLY the 1st value from the API
  $.getJSON(
    "https://canvasjs.com/services/data/datapoints.php?xstart=" +
      (dataArray.length + 1) +
      "&ystart=" +
      dataArray[dataArray.length - 1].y +
      "&length=1&type=json",
    function (data) {
      $.each(data, function (key, value) {
        labelsArray.shift(); //remove the 1st one
        labelsArray.push(`label-${value[0] + counter}`); //add the new one at the end of the array
        dataArray.shift();
        dataArray.push(parseInt(value[1]));
      });
      //chart.update();//update display of the chart
      chart3Ref.update();
      setTimeout(function () {
        updateChart();
      }, 1000); //run again, after one seconde , the update fct
    }
  );
}
