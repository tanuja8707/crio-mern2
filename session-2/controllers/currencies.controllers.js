const axios = require("axios");
const currencyAPIUrl = 'https://api.coinbase.com/v2/currencies';
const downloadCurrencyFromAPI = async () =>  axios.get(currencyAPIUrl);


const getCurrencies = async (req,res) => {
    const response = (await downloadCurrencyFromAPI()).data;
    const {min_value} = req.query;
    try{
        if(min_value) {
            return res.send(response.data.filter((curr) => curr.min_size === min_value));
        }
        res.send(response.data);
    } catch (error) {
        res.status(500).send({"message": "Something went wrong"});
    }
    res.send("<h1>Currency Database</h1>");
}

const getCurrencyByName = async (req,res) => {
    try{
        const response = (await axios.get('https://api.coinbase.com/v2/currencies')).data;
        const reqCurr = response.data.find((curr) => curr.id.toLowerCase() === req.params.symbol);
        if(reqCurr) return res.send(reqCurr);
        res.status(404).send({"message": "Data not found"});
    } catch (error) {
        res.status(500).send({"message": "Something went wrong"});
    }
    res.send("<h1>Currency Database</h1>")
};