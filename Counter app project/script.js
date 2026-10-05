const minus = document.getElementById("dec");
const plus = document.getElementById("inc");
const count = document.querySelector(".count");
const changeby = document.querySelector(".changeBy");
const reset = document.querySelector(".reset");

const getChangeValue = () => {
    const value = Number(changeby.value);
    if (!Number.isSafeInteger(value) || value < 1) {
        changeby.value = "1";
        return 1;
    }
    return value;
};

minus.addEventListener("click",function(){
    const countvalue = Number(count.innerText);
    const changevalue = getChangeValue();
    count.innerText = countvalue - changevalue ;

})

plus.addEventListener("click",function(){
    const countvalue = Number(count.innerText);
    const changevalue = getChangeValue();
    count.innerText = countvalue + changevalue ;
})

reset.addEventListener("click",function(){
    count.innerText = 0 ;
})