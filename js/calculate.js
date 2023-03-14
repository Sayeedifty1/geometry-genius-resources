// for triangle
document.getElementById('triangle-calculate').addEventListener('click', function () {
    const resultTriangle = getProductOfInputValues('triangle-input-one', 'triangle-input-two');

    const resultOne = 0.5 * resultTriangle
    const result = resultOne.toFixed(2)+ "cm&sup2";
   
    cardTitle = document.getElementById('title-one').innerText;
    displayData(cardTitle, result);


})

// for rectangle
document.getElementById('btn-rectangle').addEventListener('click',function(){
 const resultRectangle= getProductOfInputValues('rec-input-one', 'rec-input-two');
 const resultTwo= resultRectangle
 const result = resultTwo.toFixed(2)+ "cm&sup2";

 cardTitle = document.getElementById('title-two').innerText;
 displayData(cardTitle, result);

})
// for parallelogram
document.getElementById('btn-parallelogram').addEventListener('click',function(){
 const resultRectangle= getProductOfInputValues('para-input-one', 'para-input-two');
 const resultThree = resultRectangle
 const result = resultThree.toFixed(2)+ "cm&sup2";

 cardTitle = document.getElementById('title-three').innerText;
 displayData(cardTitle, result);

})

// for rhombus
document.getElementById('btn-rhombus').addEventListener('click',function(){
 const resultRhombus= getProductOfInputValues('rhombus-input-one', 'rhombus-input-two');
 const resultFour= 0.5 * resultRhombus;
 const result = resultFour.toFixed(2) +"cm&sup2";
 
 cardTitle = document.getElementById('title-four').innerText;
 displayData(cardTitle, result);

})

// for pentagon
document.getElementById('btn-pentagon').addEventListener('click',function(){
 const resultPentagon= getProductOfInputValues('pentagon-input-one', 'pentagon-input-two');
 const resultFive= 0.5 * resultPentagon
 const result = resultFive.toFixed(2)+ "cm&sup2";
 
 cardTitle = document.getElementById('title-five').innerText;
 displayData(cardTitle, result);

})
// for Ellipse
document.getElementById('btn-ellipse').addEventListener('click',function(){
 const resultEllipse= getProductOfInputValues('ellipse-input-one', 'ellipse-input-two');
 const resultSix= 3.1416 * resultEllipse
 const result = resultSix.toFixed(2) + "cm&sup2";

 cardTitle = document.getElementById('title-six').innerText;
 displayData(cardTitle, result);

})


