function calculate(className) {
    var input = document.querySelector("input[type='number']").value;
    var result = 1;

    for (var i = 1; i <= input; i++) {
        result *= i;
    }
    
    document.querySelector("." + className).innerHTML = "Answer: " + result;
}
