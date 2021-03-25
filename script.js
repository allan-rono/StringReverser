const textString = document.getElementById("textString");
const answer = document.getElementById("answer");
const reverseText = document.getElementById("submit");

function reverseString() {
    let tString = String(textString.value);
    let reversed = "";
    for (var i = tString.length - 1; i >= 0; i--) {
        reversed = reversed + tString[i];
    }
    answer.innerHTML = reversed;
};

reverseText.addEventListener("click", reverseString);