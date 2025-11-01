const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 8082;
const {getCurrencies} = require("./controllers/currencies.controllers")


app.get("/", (req,res) => {
    res.send("<h1>Currency Database</h1>")
})

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", )

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})