const http = require("http");
const axios = require("axios");
// const currenciesjson = require("./currencies.json");

const PORT = 8082;


// const server = http.createServer((req, res) => {
//     console.log("request incoming");
//     const serverInfo = {
//         serverName: "Crio Server",
//         version: "1.0.0",
//         currentDate: new Date().toDateString(),
//         currentTime: new Date().toTimeString(),
//     };
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(serverInfo));
//     res.end();
// });

const server = http.createServer(async (req, res) => {
    console.log("request incoming");
    // const serverInfo = {
    //     serverName: "Crio Server",
    //     version: "1.0.0",
    //     currentDate: new Date().toDateString(),
    //     currentTime: new Date().toTimeString(),
    // };
    switch(req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
            res.write(`<h1>Currency database</h1>`);
            res.end();
            break;
        case "/currencies" :
            try {
                const response = await axios.get("https://api.coinbase.com/v2/currencies");

                res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
                res.end(JSON.stringify(response.data));
                break;
            }
            catch(error) {
                res.writeHead(500).end("Something Went Wrong");
                
            }
        default:
            res.writeHead(404);
            res.end();
    }



        // if (req.url === "/status") {
        //     res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
        //     res.write(JSON.stringify(serverInfo));
        //     res.end();
        // } else {
        //     res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
        //     res.write(`<h1>Hello from server</h1>`);
        //     res.end();
        // }
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})