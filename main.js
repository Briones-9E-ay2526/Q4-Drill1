function getKWH() {
    let input = document.getElementById("planet1").value;
    let num1 = Number(input);

    if (input === "" || isNaN(num1)) {
        document.getElementById("display1").style.color = "red";
        document.getElementById("display1").innerHTML = "Please enter a valid number";
        return;
    }

    if (num1 < 0) {
        document.getElementById("display1").style.color = "red";
        document.getElementById("display1").innerHTML = "Please input a non-negative number.";
        return;
    }

    let result = "";
    document.getElementById("display1").style.color = "black";

    switch (true) {
        case (num1 <= 100):
            result = "Lifeline Consumer : Discounted electricity rates";
            break;
        case (num1 <= 200):
            result = "Low Consumption : Normal residential rate";
            break;
        case (num1 <= 300):
            result = "Average Consumption : Typical electricity usage";
            break;
        case (num1 <= 500):
            result = "High Consumption : Higher electricity usage";
            break;
        default:
            result = "Very High Consumption : Heavy electricity users";
    }

    document.getElementById("display1").innerHTML = "";
    window.alert(result);
}