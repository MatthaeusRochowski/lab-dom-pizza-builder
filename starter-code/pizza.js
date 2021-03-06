// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function($mushrooms) {
    if (state.mushrooms) {
      $mushrooms.style.visibility = "visible";
    } else {
      $mushrooms.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    } else {
      $greenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.classList.add("sauce-white");
    } else {
      $sauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function($crust) {
    if (state.glutenFreeCrust) {
      $crust.classList.add("crust-gluten-free");
    } else {
      $crust.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn-pepperonni").forEach(function($pepperoni) {
    if (state.pepperonni) {
      $pepperoni.classList.add("active");
    } else {
      $pepperoni.classList.remove("active");
    }
  });
  document.querySelectorAll(".btn-mushrooms").forEach(function($mushrooms) {
    if (state.mushrooms) {
      $mushrooms.classList.add("active");
    } else {
      $mushrooms.classList.remove("active");
    }
  });
  document
    .querySelectorAll(".btn-green-peppers")
    .forEach(function($greenPeppers) {
      if (state.greenPeppers) {
        $greenPeppers.classList.add("active");
      } else {
        $greenPeppers.classList.remove("active");
      }
    });
  document.querySelectorAll(".btn-sauce").forEach(function($whiteSauce) {
    if (state.whiteSauce) {
      $whiteSauce.classList.add("active");
    } else {
      $whiteSauce.classList.remove("active");
    }
  });
  document.querySelectorAll(".btn-crust").forEach(function($glutenFreeCrust) {
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.classList.add("active");
    } else {
      $glutenFreeCrust.classList.remove("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceList = document.querySelector(".panel.price ul");
  const totalPrice = document.querySelector(".panel.price strong");
  let list = "";
  let totalValue = basePrice;

  if (state.pepperonni) {
    list += `<li>$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}</li>`;
    totalValue += ingredients.pepperonni.price;
  }
  priceList.innerHTML = list;
  if (state.mushrooms) {
    list += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    totalValue += ingredients.mushrooms.price;
  }
  priceList.innerHTML = list;
  if (state.greenPeppers) {
    list += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    totalValue += ingredients.greenPeppers.price;
  }
  priceList.innerHTML = list;
  if (state.whiteSauce) {
    list += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    totalValue += ingredients.whiteSauce.price;
  }
  priceList.innerHTML = list;
  if (state.glutenFreeCrust) {
    list += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    totalValue += ingredients.glutenFreeCrust.price;
  }
  priceList.innerHTML = list;
  totalPrice.innerText = `$${totalValue}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  //console.log(" state.greenPeppers: ",  state.greenPeppers)
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  console.log(" state.whiteSauce: ", state.whiteSauce);
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  //console.log(" state.glutenFreeCrust: ",  state.glutenFreeCrust)
  renderEverything();
};
