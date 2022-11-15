// $(document).ready(function(){
// 	$('.header').height($(window).height());
// })

var opts = {
    angle: 0.00, /// The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    pointer: {
      length: 0.9, // Relative to gauge radius
      strokeWidth: 0.035 // The thickness
    },
    // colorStart: '#6FADCF',   // Colors
    // colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',   // to see which ones work best for you
    // percentColors: [[0.24, "#FF0000" ],[0.49, "#ff8000" ],[0.74, "#FFFF00" ],[1.0, "#00FF00"]],
    percentColors: [[0.00, "#FF0000" ],[0.50, "#FFFF00"],[1.00, "#00FF00"]],
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
  };
var target = document.getElementById('demo'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
var gaugeText = document.getElementById('preview-textfield')
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.maxValue = 100; // set max gauge value
gauge.setMinValue(-100);  // set min value
gauge.set(0);

gaugeText.innerHTML = 0 + "%"; // set text actual value

categorieList = [ 
                  '<span class="badge badge-primary">Primary</span>',
                  '<span class="badge badge-secondary">Secondary</span>',
                  '<span class="badge badge-success">Success</span>',
                  '<span class="badge badge-danger">Danger</span>',
                  '<span class="badge badge-warning">Warning</span>',
                  '<span class="badge badge-info">Info</span>',
                  '<span class="badge badge-light">Light</span>',
                  '<span class="badge badge-dark">Dark</span>'
                ]
const sectionCategories = document.querySelector(".categorie");

var analyzeButton = document.getElementById('analyze');
analyzeButton.onclick = function(){
    gaugeValue = Math.floor(Math.random() * 200 - 100)
    gauge.set(gaugeValue);
    gaugeText.innerHTML = gaugeValue +"%";

    sectionCategories.innerHTML = ""
    const categorieElement = document.createElement("span");
    let categorieHTML = ""
    for(let i = 0;i<Math.floor(Math.random()*3 + 1);i++){
      categorieNumber = Math.floor(Math.random()*7);
      categorieHTML += categorieList[categorieNumber];
    }
    categorieElement.innerHTML = categorieHTML;
    sectionCategories.appendChild(categorieElement);
};