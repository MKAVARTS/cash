

var dollarAmount;
var cashToCoinsDiv = document.getElementById('cashToCoins');


function cashToCoins (dollars) {
    q = dollars * 4.;
    d = dollars * 10.;
    n = dollars * 20.;
    p = dollars * 100.;
    cashToCoinsDiv.innerHTML = ("quarters: " + q.toFixed('2')) + '<br>' + ("dimes: " + d.toFixed('2')) 
    + '<br>' + ("nickels: " + n.toFixed('2')) + '<br>' + ("pennies: " + p.toFixed('2')) + '<br>';
}


document.getElementById('submitAmount').addEventListener('click', function(){
    dollarAmount = document.getElementById('dollarAmount').value;
    dollarAmount = parseFloat(dollarAmount);
    cashToCoins(dollarAmount);
});

document.addEventListener('keypress', (event) => {
    const keyName = event.keyCode;
    if(keyName === 13) {
        dollarAmount = document.getElementById('dollarAmount').value;
        dollarAmount = parseFloat(dollarAmount);
        cashToCoins(dollarAmount);
    }
  });