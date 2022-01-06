function send() {
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
    ans = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='ans'>";
    check_btn = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    
    row = question + input_box +  check_btn;
    document.getElementById("output").innerHTML = row;

    document.getElementById("no1").value = "";
    document.getElementById("no2").value = ""
}