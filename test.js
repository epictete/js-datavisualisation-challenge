// DOM references

const table1 = document.getElementById("table1");
const table1Body = table1.getElementsByTagName("tbody")[0];
const table1Row = table1Body.getElementsByTagName("tr");

const table2 = document.getElementById("table2");
const table2Head = table2.getElementsByTagName("thead")[0];
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

let chartLabels2 = table2Head.innerText.split("\t");
chartLabels2 = chartLabels2.splice(2, chartLabels2.length);

// Create countryData & countryLabel

let countryData1 = [];
let countryLabel1 = [];

for (let i = 1; i < table1Row.length; i++) {
  let tempCountry = table1Row[i].innerText.split("\t");
  let tempData = tempCountry.splice(2, tempCountry.length);
  countryData1.push(tempData.map(x => x.replace(",", ".")));
  countryLabel1.push(tempCountry.splice(1, 2).toString());
}

let countryData2 = [];
let countryLabel2 = [];

for (let i = 0; i < table2Row.length; i++) {
  let tempCountry = table2Row[i].innerText.split("\t");
  let tempData = tempCountry.splice(2, tempCountry.length);
  countryData2.push(tempData);
  countryLabel2.push(tempCountry.splice(1, 2).toString());
}

// Chart

let datasets1 = [];
let datasets2 = [];

let hoverBorderWidth = 1;
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

for (i = 0; i < countryLabel1.length; i++) {
  let newElement = new dataElement(
    countryLabel1[i],
    countryData1[i],
    backgroundColor[i],
    hoverBorderWidth,
    hoverBorderColor
  );
  datasets1.push(newElement);
}

for (i = 0; i < countryLabel2.length; i++) {
  let newElement = new dataElement(
    countryLabel2[i],
    countryData2[i],
    backgroundColor[i],
    hoverBorderWidth,
    hoverBorderColor
  );
  datasets2.push(newElement);
}

// Chart variables

let data1 = {
  labels: chartLabels1,
  datasets: datasets1,
};

let options1 = {
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

let data2 = {
  labels: chartLabels2,
  datasets: datasets2,
};

let options2 = {
  title: {
    display: true,
    text: table2.getElementsByTagName("caption")[0].innerText,
    fontSize: 25,
  },
  legend: {
    display: true,
    position: "right",
  },
};

// Chart declaration

const ctx1 = document.getElementById("myChart1").getContext("2d");
const chart1 = new Chart(ctx1, {
  type: "bar",
  data: data1,
  options: options1,
});

const ctx2 = document.getElementById("myChart2").getContext("2d");
const chart2 = new Chart(ctx2, {
  type: "bar",
  data: data2,
  options: options2,
});
