function check(){
    const productAmount = parseFloat(document.getElementById('productAmount').value);
    const cashGiven = parseFloat(document.getElementById('cashGiven').value);

const res = cashGiven - productAmount;
if(isNaN(productAmount) || isNaN(cashGiven)){
    alert('Please enter valid numbers');
    return false;
} else if(res < 0){
    document.getElementById("vall").innerHTML = "Amount is insufficient.";
} else{
    document.getElementById("vall").innerHTML = `Balance amount is: ₹ ${(res.toFixed(2))}`;
}
}  
