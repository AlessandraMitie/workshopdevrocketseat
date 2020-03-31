const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')
//new -> está criando um novo objeto
//Database é uma função é responsável por dizer onde está o arquivo relacionado ao banco de dados

db.serialize(function(){
//método serialize vai aceitar uma função que vai permitir rodar vários comandos sql

    // Criar tabela
    //criar tabela se nao existir a tabela ideas
    //colocar as colunas entre ()
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    
    //Inserir dados na tabela
    //const query = `
    //INSERT INTO ideas(
    //    image,
    //    title,
    //    category,
    //    description,
    //    link
    //) VALUES (?,?,?,?,?);
    //`
    
    //const values = [
    //    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //    "Cursos de Programação",
    //    "Estudo",
    //    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam veniam repellat ullam dolores eius voluptatem saepe",
    //    ""
    //]

    //db.run(query, values, function(err) {
    //    if (err) return console.log(err)

    //    console.log(this)
    //})

    //Deletar um dado da tabela
    //db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    //    if (err) return console.log(err)

    //    console.log("Deletei", this)
    //})

    //Consultar dados da tabela
    //db.all(`SELECT * FROM ideas`, function(err, rows) {
    //    if(err) return console.log(err)

    //    console.log(rows)
    //})
})

 //exportar meu banco
module.exports = db