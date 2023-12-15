function removeCookie(iAcceptButton) {
    let cookie = iAcceptButton.parentElement;
    cookie.remove();
}

function changeTempUnits(tempUnit) {
    let temperatureArray = document.querySelectorAll('.temperatureNum');
    console.log(temperatureArray)
    for (let i = 0; i < temperatureArray.length; i++) {
        let temperatureString = temperatureArray[i].innerText
        if (tempUnit == "C") {
            temperatureString = fahrenheitToCelsius(temperatureString.replace('°','')) + '°';
        }
        else if(tempUnit == "F") {
            temperatureString = celsiusToFahrenheit(temperatureString.replace('°','')) + '°';
        }
        temperatureArray[i].innerText = temperatureString
    }
}

function celsiusToFahrenheit(temperatures) {
    return Math.round((temperatures * 9/5) + 32);
}

function fahrenheitToCelsius(temperatures){
    return Math.round((temperatures - 32) * 5/9);
}