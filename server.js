const express = require("express")
const app = express()

//const greetings = [{"Hello, stranger"}, {"What's up, "}]

app.get("/greeting", (req, res) => {
    res.send("<h1>Hello, stranger</h1>")
})

app.get("/greeting/:name", (req, res) => {
    
    const name = req.params.name
    res.send(`<h1>What's up, ${name}</h1>`)
})




app.listen(3000, () => {
    console.log("listen for requests from the port")
})