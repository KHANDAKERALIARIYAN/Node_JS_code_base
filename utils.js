// 1
// function generateRandomNumber(){
//     return Math.floor(Math.random() * 100);
// }

// 2
function generateRandomNumber(){
    return Math.floor(Math.random() * 100);
}

function celciusToFahrenheit(celcius){
    return (celcius * 9/5) + 32;
}

// module.exports =generateRandomNumber;
module.exports={
    generateRandomNumber,
    celciusToFahrenheit
};