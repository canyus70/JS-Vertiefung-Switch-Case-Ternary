function pw(){
    event.preventDefault();
    const inputPw = Number(document.body.querySelector("#passwortId").value.length);
    console.log(inputPw);
    const output = document.body.querySelector("#ergebnis")

    const pwLenght = (inputPw >= 8) ? "Welcome to your Acces" : "The password is to short";
    output.textContent = pwLenght;

    if (inputPw >= 8) {
        output.classList.remove("error");
        output.classList.add("success");
    } else {
        output.classList.remove("success");
        output.classList.add("error");
    }
}