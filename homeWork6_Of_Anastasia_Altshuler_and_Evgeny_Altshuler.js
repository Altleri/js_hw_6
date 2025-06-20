"use strict"

//************************************************************************************************
// HOME WORK №6 OF ANASTASIIA ALTSHULER 
// AND EVGENY ALTSHULER 
/*************************************************************************************************/


/********************************HW#1******************************/

//Chosed variables from html
const reviewText = document.getElementById('review-text');
const reviewBotton = document.getElementById('toggle-review');
//Added variable with need content 
const fullText = `"This company exceeded my expectations in every way. Their team was professional, responsive, and incredibly skilled. I couldn't have asked for a better experience and result!"`;

//Used slice to limit the text length
reviewText.textContent = fullText.slice(0, 30) + '...';


//Added event click
reviewBotton.addEventListener('click', () => {
  //Checked textContent of button
  if (reviewBotton.textContent === 'Read full review') {//Expand full text and change textContent of button
    reviewText.textContent = fullText.slice(0);
    reviewBotton.textContent = 'Hide full review';
  }

  else {//Some
    reviewText.textContent = fullText.slice(0, 30) + '...';
    reviewBotton.textContent = 'Read full review';
  }
})