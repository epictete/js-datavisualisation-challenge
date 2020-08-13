// DOM references

const table1 = document.getElementById("table1");
const table1Body = table1.getElementsByTagName("tbody")[0];
const table1Row = table1Body.getElementsByTagName("tr");

const table2 = document.getElementById("table2");
const table2Body = table2.getElementsByTagName("tbody")[0];
const table2Row = table2Body.getElementsByTagName("tr");

// Canvas

function addCanvas(elementRef, index) {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "myChart" + index);
  elementRef.before(canvas);
}
addCanvas(table1, 1);
addCanvas(table2, 2);

// Create chartLabels

let chartLabels1 = table1Row[0].innerText.split("\t");
chartLabels1 = chartLabels1.splice(2, chartLabels1.length);

// Create countryData & countryLabel

let countryData1 = [];
let countryLabel1 = [];

for (let i = 1; i < table1Row.length; i++) {
  let tempCountry = table1Row[i].innerText.split("\t");
  let tempData = tempCountry.splice(2, tempCountry.length);
  countryData1.push(tempData.map(x => x.replace(",", ".")));
  countryLabel1.push(tempCountry.splice(1, 2).toString());
}

// Chart

let datasets1 = [];
let hoverBorderWidth = 2;
let hoverBorderColor = "#000";
let backgroundColor = [
  "maroon",
  "crimson",
  "tomato",
  "indianred",
  "darksalmon",
  "darkorange",
  "gold",
  "darkgoldenrod",
  "darkkhaki",
  "olive",
  "yellowgreen",
  "olivedrab",
  "lawngreen",
  "forestgreen",
  "lightgreen",
  "mediumspringgreen",
  "seagreen",
  "mediumaquamarine",
  "darkslategray",
  "teal",
  "aqua",
  "darkturquoise",
  "cadetblue",
  "steelblue",
  "skyblue",
  "navy",
  "royalblue",
  "blueviolet",
  "darkmagenta",
  "mediumorchid",
  "violet",
  "magenta",
  "deeppink",
  "sienna",
  "chocolate",
];

// dataElement class

class dataElement {
  constructor(
    label,
    data,
    backgroundColor,
    hoverBorderWidth,
    hoverBorderColor
  ) {
    this.label = label;
    this.data = data;
    this.backgroundColor = backgroundColor;
    this.hoverBorderWidth = hoverBorderWidth;
    this.hoverBorderColor = hoverBorderColor;
  }
}

// Add each country to the datasets

let newElement;

for (i = 0; i < countryLabel1.length; i++) {
  newElement = new dataElement(
    countryLabel1[i],
    countryData1[i],
    backgroundColor[i],
    hoverBorderWidth,
    hoverBorderColor
  );
  datasets1.push(newElement);
}

// Chart variables

let data = {
  labels: chartLabels1,
  datasets: datasets1,
};

let options = {
  title: {
    display: true,
    text: table1.getElementsByTagName("caption")[0].innerText,
    fontSize: 25,
  },
  legend: {
    display: true,
    position: "right",
  },
};

// Chart declaration

const ctx = document.getElementById("myChart1").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});
