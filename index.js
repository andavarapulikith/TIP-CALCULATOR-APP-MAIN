var ele = document.querySelector(".billamount");

var bill = 0;
ele.addEventListener('focusout', () => {
    bill = parseFloat(ele.value);
   
});
var persons = 0;
var buttonvalue = -1;
var store2 = 0;
const button = document.querySelectorAll('.common');
let k = -1;
for (let i = 0; i < 5; i++)
{
    button[i].addEventListener("click", () =>
    {
        console.log(button[i].innerText);
        
        button[i].style.backgroundColor = "hsl(172, 67%, 45%)";
        button[i].style.color = "hsl(183, 100%, 15%)";
        if (k != -1)
        {
            button[k].style.backgroundColor = "hsl(183, 100%, 15%)";
            button[k].style.color = "white";
        }
        k = i;
        buttonvalue = parseInt(button[i].innerHTML);
        
        // console.log(buttonvalue);
        
        
    });
}


var ele4 = document.querySelector(".custom")

var percentage = -1;
ele4.addEventListener('focusout', () => {
    buttonvalue = parseFloat(ele4.value);
    button[k].style.backgroundColor = "hsl(183, 100%, 15%)";
     button[k].style.color = "white";
    
});
var ele2 = document.querySelector(".numberofpersons")
var ele5 = document.querySelector("#tipper");
var ele7 = document.querySelector("#amounter");
var ele8 = document.querySelector(".zero");
ele2.addEventListener('focusout', () => {
    persons = parseInt(ele2.value);
    if (persons == NaN)
        persons = 0;
    if (persons == 0)
    {
        ele2.style.visibility = "visible";
        ele2.style.border = "2px solid orangered";
        ele8.innerHTML = "Can't be zero"
        ele8.style.color = "orangered";
        
    }
    else {
        let tip = bill * buttonvalue / 100 / persons;
        ele5.innerText = parseFloat(tip.toFixed(2));
        ele7.innerText = parseFloat((bill / persons + tip).toFixed(2));
    }
    
});

 

var ele6 = document.querySelector(".submitted")
ele6.addEventListener("click", () => {

    document.location.reload(); 
});




