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

const statusMessage = document.getElementById("counter-status");

const changeCount = (direction) => {
    const nextCount = Number(count.innerText) + direction * getChangeValue();
    if (!Number.isSafeInteger(nextCount)) {
        statusMessage.innerText = "This change exceeds the exact integer range. Use a smaller step or reset.";
        return;
    }
    count.innerText = nextCount;
    statusMessage.innerText = "";
};

minus.addEventListener("click", () => changeCount(-1));
plus.addEventListener("click", () => changeCount(1));

reset.addEventListener("click", () => {
    count.innerText = 0;
    statusMessage.innerText = "";
});
