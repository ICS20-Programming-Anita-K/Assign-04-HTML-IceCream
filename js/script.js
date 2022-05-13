// Created by: Anita Kay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

function order() {
  	// initialize variables
	let cost = 0;
  let dipCost = 0;
	
	// get size, toppings, and chocolate dip customizations
	let size = document.getElementById('size');
  let boxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const PRICE_TOPPINGS = 0.50;
  let toppings = boxes.length;
  let toppingsCost = toppings * PRICE_TOPPINGS;

  // define constant
  const HST = 0.13;

    // If the selected size is small, the cost is $2.50
	if (size == "Small") {
		cost = 2.50;
	}
    // If the selected size is medium, the cost is $3.50
	else if (size == "Medium") {
		cost = 3.50;
	}
  // If the selected size is large, the cost is $5.00
    else if (size == "Large") {
      cost = 5.00;
    }
  // If the "Yes, please" radio button is checked, there is an additional cost of $1.50
  if (document.getElementById('yes').checked) {
    dipCost = 1.50;
  }
  // If the "No, thank you" radio button is checked, there is no additional cost. 
    else if (document.getElementById('no').checked) {
      dipCost = 0;
    }
  // Calculations for subtotal, tax, and total.
    let subtotal = cost + dipCost + toppingsCost
    let tax = subtotal * HST
    let total = subtotal + tax
  // display the cost
  	document.getElementById('calculate-cost').innerHTML = "Subtotal = "+ subtotal +"<br>HST = "+ tax +"<br>Total = "+ total
}