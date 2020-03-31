const express = require("express")
//express para criar e configurar o servidor
const server = express()

//coleção ideas
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam veniam repellat ullam dolores eius voluptatem saepe",
        url:""
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicios",
        category: "Saúde",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam veniam repellat ullam dolores eius voluptatem saepe",
        url:""
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam veniam repellat ullam dolores eius voluptatem saepe",
        url:""
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaoke",
        category: "Diversão em Família",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam veniam repellat ullam dolores eius voluptatem saepe",
        url:""
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam veniam repellat ullam dolores eius voluptatem saepe",
        url:""
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam veniam repellat ullam dolores eius voluptatem saepe",
        url:""
    }
]

//configurar arquivos estáticos -> css, img js
server.use(express.static("public"))

//configuração nunjucks
const nunjucks = require("nunjucks")
//são passados dois parâmetros. O 1o vai falar que pasta que guarda o html
//o segundo parâmetro é o objeto de configuração
nunjucks.configure("views", {
    //fazer o link com o express através da variável server
    express: server,
    noCache: true,
})

//rota /
//capturar o pedido do cliente para responder
server.get("/", function(req, res) {

    //todo conteudo de ideas vai para reverseIdeas
    const reversedIdeas = [...ideas].reverse()

    //coleção lastIdeas
    let lastIdeas = []
    for (let idea of reversedIdeas) {
    //função reverse vai pegar lastIdeas e reverter
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas})
})

//ligar o servidor na porta 3000
server.listen(3000)