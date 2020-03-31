function onOff() {
    //ouvir o evento de click
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
        //toggle vai colocar ou tirar
        //a classe hide vai ser responsável por mostrar ou esconder um elemento

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")
}