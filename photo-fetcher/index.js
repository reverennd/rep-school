import axios from "axios";
import express from "express";

const app = express()
const  port = 3000

app.use(express.static("public"));

let numberImages = 4;
let randomNumbers = []
let grayScale = false

async function generateNumbers() {
    for (let i = 0; i < numberImages; i++) {
        const randomNumber = Math.floor(Math.random * 200)
        randomNumbers.push(randomNumber)
    }
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        numberImages: numberImages,
        randomNumbers: randomNumbers,
        grayScale: grayScale,
    })
})

app.get("/new", (req, res) => {
    const newRandomNumbers = [];
    for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 200);
        newRandomNumbers.push(randomNumber);
    }

    res.json({ newRandomNumbers });
})

app.get("/gray", (req, res) => {
    grayScale = !grayScale
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})