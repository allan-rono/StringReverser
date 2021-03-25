const textString = document.getElementById("textString");
const answer = document.getElementById("answer");
const reverseText = document.getElementById("submit");

function reverseString() {
    var tString = String(textString.value);
    var reversed = "";
    for (var i = tString.length - 1; i >= 0; i--) {
        reversed = reversed + tString[i];
    }
    answer.innerHTML = reversed;
}

reverseText.addEventListener("click", reverseString);