function showtxt(){
    const input = document.querySelector("#mylist");
    const output = document.querySelector("#masse");

    switch(input.value){
        case "0":
            output.textContent = "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm</br><br>B: 7 - 12,5 cm</br><br>H: bis 1 cm</br>";
            break;
        case "1":
            output.textContent = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm</br>";
            break;
        case "2":
        output.textContent = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm</br>";
            break;
        case "3":
            output.textContent = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm</br>";
        default:
            output.textContent = "<b>Extra große Größe</b>";


    }





}