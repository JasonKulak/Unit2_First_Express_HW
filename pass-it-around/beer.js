const express = require("express")
const app = express()


app.get("/", (req, res) => {

    res.send(`<h1>99 Bottles of beer on the wall</h1><h2><a href="/98">Take one down, pass it around</a></h2>`)

})

app.get("/:number_of_bottles", (req, res) => {
    const bottleNum = req.params.number_of_bottles
    if (bottleNum > 0){
       res.send(`${bottleNum} Bottles of beer on the wall <a href="/${bottleNum -1}">Take one down, pass it around</a>`)
    } else {
        res.send(`<a href="/">Start over</a>`)
    }
})

app.listen(3000, () => {
    console.log("Take one Down")
})