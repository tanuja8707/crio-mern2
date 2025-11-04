import express from "express";
import { getCurrencies, getCurrencyByName } from "./controllers/currencies.controllers.js";
import { getUsers, getUsersByID, searchUserByAgeAndGender } from "./controllers/users.controllers.js";
const app = express();
const PORT = 8082;


app.get("/", (req,res) => {
    res.send("<h1>Currency Database</h1>")
})

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrencyByName )

app.get("/users",getUsers);
app.get("/users/search",searchUserByAgeAndGender)
app.get("/users/:uuid",getUsersByID);


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})