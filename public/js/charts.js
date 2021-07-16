$(document).ready(function(){
    //initCovidCasesDonationChart();
});

function initCovidCasesDonationChart(){
    const chart = raw.chart;
    const bubblechart = rawcharts.bubblechart;


    // defining some data.
    const userData = [
    { size: 10, price: 2, cat: "a" },
    { size: 12, price: 1.2, cat: "a" },
    { size: 1.3,price: 2, cat: "b" },
    { size: 1.5,price: 2.2, cat: "c" },
    { size: 10, price: 4.2, cat: "b" },
    { size: 10, price: 6.2, cat: "c" },
    { size: 12, price: 2.2, cat: "b" },
    ]

    // getting the target HTML node
    const root = document.getElementById("covid-cases-donation-chart")


    // define a mapping between dataset and the visual model
    const mapping = {
    x: { value: "size" },
    y: { value: "price" },
    color: { value: "cat" },
    }

    //instantiating the chart
    const viz = chart(bubblechart, {
    data: userData,
    mapping,
    })

    //rendering into the HTML node
    viz.renderToDOM(root)
}