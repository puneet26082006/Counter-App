const minus = document.getElementById("dec");
const plus = document.getElementById("inc");
const count = document.querySelector(".count");
const changeby = document.querySelector(".changeBy");
const reset = document.querySelector(".reset");

minus.addEventListener("click",function(){
    const countvalue = parseInt(count.innerText);
    const changevalue = parseInt(changeby.value) || 1 ;
    count.innerText = countvalue - changevalue ;

})

plus.addEventListener("click",function(){
    const countvalue = parseInt(count.innerText);
    const changevalue = parseInt(changeby.value) || 1;
    count.innerText = countvalue + changevalue ;
})

reset.addEventListener("click",function(){
    count.innerText = 0 ;
})