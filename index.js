var initialprice = document.querySelector('#initial-price');
var stocksQuantity  = document.querySelector('#stocks-quantity');
var currentprice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputE1 = document.querySelector('#output-box');


submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var ip = Number(initialprice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentprice.value);
    
    calculateProfitAndLoss(ip,qty,curr);
}



function calculateProfitAndLoss(initial,quantity,current){
 
    if(initial > current) {
   
         var loss = (initial-current)*quantity;

         var lossPercentage = (loss/initial)*100;   
         
         var losspr = lossPercentage.toFixed(2);
         showOutput('Hey Your Current Loss is ' + loss + ' and the Percentage is' + losspr +'%.');

 } 

 else if(current > initial) {
     var profit = (current-initial)*quantity;
     var profitPercentage  = (profit/current)*100;
     var profitPer = profitPercentage.toFixed(2); 
     showOutput('Hey Your Current Profit is'<hr> + profit + 'And' <hr> 'Profit Percentage is '+profitPer +'%.');
 } else {
       showOutput("On Pain No Gain, No Gain No Pain");
 }
}

function showOutput(message){
    outputE1.innerHTML = message;
}