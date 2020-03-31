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

function checkFields(event) {
    //console.log(event)
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    //console.log(typeof event.target["title"].value.trim())
    //console.log(typeof event.target["title"].value === "string")

    const isEmpty = valuesToCheck.find(function(value) {
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    //console.log(isEmpty)
    if(isEmpty) {
        event.preventDefault()
        //não deixe que faça o comportamento padrão
        alert("Por favor, preencha todos os campos")
    }


    //for( let value of valuesToCheck) {
    //    console.log(event.target[value].value)
    //}
}