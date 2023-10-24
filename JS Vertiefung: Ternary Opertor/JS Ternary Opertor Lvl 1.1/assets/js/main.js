function alterscheck () {
    event.preventDefault();
    const input = Number(document.body.querySelector("#alterId").value);
    const output = document.getElementById("result");

    const age = (input >= 18) ? "Volljährig" : "Minderjährig";
    output.textContent = "Sie sind " + age;
}