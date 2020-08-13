# Javascript Challenge : "Data Visualisation"

- Repository : `js-datavisualisation-challenge`
- Mode: `duo`
- Type: `consolidation challenge`
- Duration: `3 days`
- Deadline : 17/08/2020, 10h00
- Form : https://docs.google.com/spreadsheets/d/15L9ltD_QdwpBJslozFXJYxKxjXsy0DjJW6zTThMIg0g/edit?usp=sharing

<img src="../../../../../Assets/data.png" width="400">

## Objectives

This consolidation challenge will help you assess your ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- **DOM** manipulation
- **AJAX**/**FETCH** request
- Using **Third-party libraries**
- **problem-solving** : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of **"separation of concerns"**

![Droid](../../../../../Assets/droid2.gif)

## Your mission

You work in the Multimedia department of one of the European Union institutions. This morning, Johnny Hasnoclew, your Project Manager, sends you on a mission: one of the in-house journalists has published a new article on the institution's website. The article in question is already integrated with an **html** / **css** / **Javascript file**.

He asks you to make it more *rich*, more *interactive*, more... *sexy* (The use of that specific adjective indicates that Johnny certainly worked in advertising before, the poor guy).

That's exactly what you're going to do, by adding two **interactive data visualisation graphics** using javascript.  These graphs will be interactive in the sense that the user can manipulate the graph, such as filtering data, or reveal detailed data when the mouse hovers over it. You are free to design the interaction in your project.

### 1. Inline data (data in the document)

In this html file, you will find two data tables. Use JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

### 2. Remote data, in real-time, via ajax

There are data sitting at this URL :  [https://canvasjs.com/services/data/datapoints.php](https://canvasjs.com/services/data/datapoints.php)

Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (`h1`) of the article.

Don't hesitate to adapt the code provided in this tutorial: [Live Updating Charts from JSON API & AJAX](https://canvasjs.com/docs/charts/how-to/live-updating-javascript-charts-json-api-ajax/), but adapt it to this third-party library: [chart.js](https://www.chartjs.org/) or [ToastUi-Chart](https://ui.toast.com/tui-chart/) or [Dimpl](http://dimplejs.org/), because this tutorial uses another (not-free) library (canvasJS).

**Again**: if javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.

## How will we do this?

1. Use a javascript library that makes it easier to do this instead of using just "Vanilla Javascript" (= using javascript without libraries).
If you had never coded in javascript before BeCode, use [chart.js](https://www.chartjs.org/) or [ToastUi-Chart](https://ui.toast.com/tui-chart/) or [Dimpl](http://dimplejs.org/).
If you already had a good knowledge of Javascript before you switched to BeCode, you can directly use the [D3.js - Data-Driven Documents](https://d3js.org/) library, which is more complex but offers many possibilities.
2. Get trained in their use.
3. Attack the problem by looking for a good logical path. Break it down into **small problems**, into **progressive** steps. Commit as you move forward. First the DOM, access the right place, then retrieve the data, then generate the graph. Something like that 😉
4. A method of thinking: *Reverse-engineering* of your objective: start at the end and go up the thread of dependencies to the starting point. It gives something like this:

> - To have a graph, you need data. So I have to get them back.
> - Where is this data ?
> - To have a graph I have to find the right place in the DOM, how can I do that?
> - To get a graph I will use *this* library of *data visualization*. How does it work?
> ...

---

## Constraints

- You can't edit the html file.
- You have the choice of the type of graphics. Considers the most relevant based on the data and what story they can "tell".
- The choice of the javascript library is limited to the 2 libraries offered (there are many others, but these are references and are very popular)

## Bonus

### Maintenance

- It's an old project and several elements need to be updated according to current standards, the whole project needs to be refactorised in order to comply with current standards and good practices (conventions, syntax, standard ECMA ... [Check](https://github.com/becodeorg/CRL-Woods-3.21/tree/master/Tips/0.9.JS))

### Structre

- As you can see, the project lacks structure, modify the architecture of the files in order to see more clearly, use a structure pattern or whatever you want in order to choose the most adequate solution...

## Help each other (to a certain extend)

You can help each other under these two conditions:

- You first **searched alone** and **read this** ([How to ask the help of a senior developer 🥇](https://stackoverflow.com/help/how-to-ask))
- The person helping **does not provide a ready-made code** and **does not code for the other**. The objective remains to learn, not to solve. The result is less important than the path. Helps by asking questions, trying to get the other person to find the answer on their own.

## Good luck !

![good luck](../../../../../Assets/goodLuck2.gif)
