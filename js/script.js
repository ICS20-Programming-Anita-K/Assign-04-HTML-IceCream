// Created by: Anita Kay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"
// This function displays the subtotal, tax, and total depending on the users customized order. 
function order() {
  	// initialize variables
	let sizeCost = 0;
  let dipCost = 0;
  let sizeMessage = "";
  
	// get size, toppings, and chocolate dip customizations
	let select = document.getElementById('size');
  let size = select.options[select.selectedIndex].value;
  let boxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const PRICE_TOPPINGS = 0.50;
  let toppings = boxes.length;
  let toppingsCost = toppings * PRICE_TOPPINGS;

  // define constants
  const HST = 0.13;
  const SMALL_COST = 2.50;
  const MEDIUM_COST = 3.50;
  const LARGE_COST = 5.00;
  const DIP_COST = 1.50;
	
    // If the selected size is small, the cost is $2.50
	if (size == "Small") {
		sizeCost = SMALL_COST;
	}
    // Else, if the selected size is medium, the cost is $3.50
	else if (size == "Medium") {
		sizeCost = MEDIUM_COST;
	}
  // Else, if the selected size is large, the cost is $5.00
    else if (size == "Large") {
      sizeCost = LARGE_COST;
    }
  // Else, the cost is $0.00.
  else {
    sizeMessage = "(Please make a size selection above)";
  }
  // If the "Yes, please" radio button is checked, there is an additional cost of $1.50
  if (document.getElementById('yes').checked) {
    dipCost = DIP_COST;
  }
  // If the "No, thank you" radio button is checked, there is no additional cost. 
    else {
      dipCost = 0;
    }
  // Calculations for subtotal, tax, and total.
    let subtotal = sizeCost + dipCost + toppingsCost
    let tax = subtotal * HST
    let total = subtotal + tax
  // display the cost
  	document.getElementById('calculate-cost').innerHTML = "Subtotal = $" + (Math.round(100*subtotal)/100).toFixed(2) + sizeMessage + "<br>HST = $" + (Math.round(100*tax)/100).toFixed(2) + "<br>Total = $" + (Math.round(100*total)/100).toFixed(2) + "";
}