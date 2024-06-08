let input = document.querySelector(".calc-input");
let buttons = document.querySelectorAll('button');

let val = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.value === '=') {
            result = eval(val);
            input.value = result;
        } else if (e.target.value === 'all-clear') {
            val = "";
            input.value = val;
        } else if (e.target.value === 'delete') {
            val = val.substring(0, val.length - 1);
            input.value = val;
        } else {
            val += e.target.value;
            input.value = val
        }
    })
})