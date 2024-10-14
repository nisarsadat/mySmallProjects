// Function to convert meters to feet
function metersToFeet(meters) {
    return meters * 3.28084;
}

// Function to convert feet to meters
function feetToMeters(feet) {
    return feet / 3.28084;
}



// Function to convert liters to gallons
function litersToGallons(liters) {
    return liters * 0.264172;
}

// Function to convert gallons to liters
function gallonsToLiters(gallons) {
    return gallons / 0.264172;
}

// Function to convert kilograms to pounds
function kilogramsToPounds(kilograms) {
    return kilograms * 2.20462;
}

// Function to convert pounds to kilograms
function poundsToKilograms(pounds) {
    return pounds / 2.20462;
}



// Function to handle the conversion based on the input
function convertUnits() {
    // Get the input value
    var inputNumber = parseFloat(document.getElementById('inputNumber').value);

    // Check if the input is a number
    if (isNaN(inputNumber)) {
        alert("Please enter a valid number");
        return;
    }

    // Perform the conversion
    var metersToFeetResult = metersToFeet(inputNumber);
    var feetToMetersResult = feetToMeters(inputNumber);

    var litersToGallonsResult = litersToGallons(inputNumber);
    var gallonsToLitersResult = gallonsToLiters(inputNumber);
    

    // Perform the conversion
    var kilogramsToPoundsResult = kilogramsToPounds(inputNumber);
    var poundsToKilogramsResult = poundsToKilograms(inputNumber);






    // Display the results
    document.getElementById('result').innerHTML =
        inputNumber + " meters = " + metersToFeetResult.toFixed(2) + " feet | " +
        inputNumber + " feet = " + feetToMetersResult.toFixed(2) + " meters";


            // Display the results
    document.getElementById('result2').innerHTML =
        inputNumber + " liters = " + litersToGallonsResult.toFixed(2) + " gallons | " +
        inputNumber + " gallons = " + gallonsToLitersResult.toFixed(2) + " liters";

    // Display the results
    document.getElementById('result3').innerHTML =
        inputNumber + " kilograms = " + kilogramsToPoundsResult.toFixed(2) + " pounds | " +
        inputNumber + " pounds = " + poundsToKilogramsResult.toFixed(2) + " kilograms";

}

// Add event listener to the convert button
document.getElementById('button').addEventListener('click', convertUnits);
// Add event listener to the convert button
document.getElementById('button').addEventListener('click', convertUnits);

// Add event listener to the convert button
document.getElementById('button').addEventListener('click', convertUnits);
  

// part of litters





