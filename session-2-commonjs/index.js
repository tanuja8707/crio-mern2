const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 8082;
const {getCurrencies, getCurrencyByName} = require("./controllers/currencies.controllers")
const {getUsers, getUserById, searchUserByGenderOrAge} = require("./controllers/users.controllers");

app.get("/", (req,res) => {
    res.send("<h1>Currency Database</h1>")
})

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol",getCurrencyByName);

app.get("/users", getUsers);

app.get("/users/search",searchUserByGenderOrAge);

app.get("/users/:uuid",getUserById);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})