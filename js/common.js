//  a common function to take values from the input fields and multiply them and also validate them
function getProductOfInputValues(elementIdOne , elementIdTwo){
    const inputOne = document.getElementById(elementIdOne);
    const inputOneString = inputOne.value;
    const inputOneNumber = parseFloat(inputOneString);
 
    const inputTwo = document.getElementById(elementIdTwo);
    const inputTwoString = inputTwo.value;
    const inputTwoNumber = parseFloat(inputTwoString)
      const value =  inputOneNumber * inputTwoNumber ;
      if(isNaN(value) || value =='' || value<0){
        alert('Enter a valid Number');
        result;
      }
      else{
        return value;
      }
    }
   
   
    


// this function is to create random color when hover

const myCards= document.getElementsByClassName('card');
for(card of myCards){
  card.addEventListener('mouseenter', (event) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = '#' + randomColor;
});
 card.addEventListener('mouseleave', (event) =>{
  event.target.style.backgroundColor = '';
 })
}


//* function to display output by injecting in html 
let serial = 0; 
function displayData(cardTitle, result){ /* received param*/ 
serial += 1; 
 const tr = document.createElement('tr') 
 tr.innerHTML = ` 
 <td>${serial}</td> 
 <td>${cardTitle}</td> 
 <td>${result}</td> 
 <button class=" bg-sky-600 hover:bg-sky-700 w-full  py-1 text-sm text-white rounded-md mt-1">Convert to m&sup2</button> 
 ` 
 const container = document.getElementById('table-container') 
 container.appendChild(tr) 
}