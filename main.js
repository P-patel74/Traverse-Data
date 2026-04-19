// Load Data From Files
let surveyData = await loadTextFile("data/survey-results.txt");
let ageData = await loadTextFile("data/age-data.txt");
let numberData = await loadTextFile("data/number-data.txt");

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  let yes_count = 0;
  let no_count = 0;
  let maybe_count = 0;

  for (let response of surveyData) {
    // Count the number of "Yes" responses,
    if (response == "Yes") {
      yes_count++;
    }
    // Count the number of "No" responses,
    else if (response == "No") {
      no_count++;
    }
    // Count the number of "Maybe" responses,
    else {
      maybe_count++;
    }
  }
  // and output the results in the outputEl.
  outputEl.innerHTML = `Yes (${yes_count}), No (${no_count}), Maybe (${maybe_count})`;
}

function traverseAgeData() {
  // Traverse the ageData array to:
  let under_18 = 0;
  let between_18_35 = 0;
  let between_36_65 = 0;
  let over_65 = 0;

  for (let age of ageData) {
    // Count the number of ages under 18,
    if (age < 18) {
      under_18++;
      // Count the number of ages between 18 and 35, inclusive
    } else if (age >= 18 && age <= 35) {
      between_18_35++;
      // Count the number of ages between 36 and 65, inclusive
    } else if (age >= 36 && age <= 65) {
      between_36_65++;
      // Count the number of ages above 65,
    } else {
      over_65++;
    }
  }
  // and output the results in the outputEl
  outputEl.innerHTML = `Under 18 (${under_18}), 18 to 35 (${between_18_35}), 
36 to 65 (${between_36_65}), Above 65 (${over_65})`;
}

function traverseNumberData() {
  // Traverse the numberData array to:
  let even = 0;
  let odd = 0;

  for (let num of numberData) {
    // Count the number of even numbers,
    if (num % 2 == 0) {
      even++;
    }
    // Count the number of odd numbers,
    else {
      odd++;
    }
  }
  // and output the results in the outputEl.
  outputEl.innerHTML = `Even (${even}), Odd (${odd})`;
}
