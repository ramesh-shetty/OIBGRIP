const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function() {
  const tempInput = document.getElementById("tempInput").value;
  const tempType = document.getElementById("tempType").value;
  
  if (isNaN(tempInput)) {
    result.innerHTML = "Please enter a valid number";
    return;
  }
  
  let convertedTemp;
  let convertedUnit;
  
  if (tempType === "celsius") {
    convertedTemp = (tempInput * 9/5) + 32;
    convertedUnit = "°F";
  } else if (tempType === "fahrenheit") {
    convertedTemp = (tempInput - 32) * 5/9;
    convertedUnit = "°C";
  } else if (tempType === "kelvin") {
    convertedTemp = parseFloat(tempInput) - 273.15;
    convertedUnit = "°C";
  }
  
  result.innerHTML = convertedTemp.toFixed(2) + convertedUnit;
});
