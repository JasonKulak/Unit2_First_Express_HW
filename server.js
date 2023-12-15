const e = require("express")
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

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    res.send(`<h1>${tipPercentage}</h1>`)
})

app.get("/magic/:question", (req, res) => {

    const question = req.params.question
    const eightBallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomResponse = eightBallResponses[Math.floor(Math.random()*eightBallResponses.length)]

    res.send(`<h1>${question}: ${randomResponse}</h1>`)
})




app.listen(3000, () => {
    console.log("listen for requests from the port")
})