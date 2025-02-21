const input = document.getElementById("input");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    ageCount();
});

function ageCount() {
    const inputValue = input.value;
    const today = new Date()

    if (inputValue) {
        const newInput = new Date(inputValue);

        let getDay = today.getDay() - newInput.getDay()
        let getmonth = today.getMonth() - newInput.getMonth()
        let getyear = today.getFullYear() - newInput.getFullYear()

        if (getmonth < 0 || (getmonth === 0 && getDay < 0)) {
            getyear--
            getmonth += 12
        }
        if (getDay < 0) {
            const preveiosDay = new Date(today.getFullYear(), today.getMonth(), 0).getDay()
            getDay += preveiosDay;
            getmonth--
        }
        output.innerText = `${getyear} years old ${getmonth} month ${getDay} days`
    }
}