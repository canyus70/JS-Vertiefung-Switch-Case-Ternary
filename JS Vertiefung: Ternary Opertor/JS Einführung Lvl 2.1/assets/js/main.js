function send() {
    event.preventDefault();
    const input = Number(document.getElementById("inputId").value.length);
    const input2 = document.getElementById("inputId");
    const output = document.getElementById("ergebnis");
    console.log(input);

    if (input >0) {
        output.textContent = input2.value;
    } else {
        output.textContent = "Bitte gebe eine Nachricht ein";
    }
}