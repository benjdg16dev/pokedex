const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const pokemon = require("./resources/kanto/all.json");
const pokemon1 = require("./resources/kanto/1.json");
const pokemon2 = require("./resources/kanto/2.json");
const pokemon3 = require("./resources/kanto/3.json");
const pokemon4 = require("./resources/kanto/4.json");
const pokemon5 = require("./resources/kanto/5.json");
const pokemon6 = require("./resources/kanto/6.json");
const pokemon7 = require("./resources/kanto/7.json");
const pokemon8 = require("./resources/kanto/8.json");
const pokemon9 = require("./resources/kanto/9.json");
// const pokemon_img1 = require("./resources/images/1.png");
// const pokemon_img2 = require("./resources/images/2.png");
// const pokemon_img3 = require("./resources/images/3.png");
// const pokemon_img4 = require("./resources/images/4.png");
// const pokemon_img5 = require("./resources/images/5.png");
// const pokemon_img6 = require("./resources/images/6.png");
// const pokemon_img7 = require("./resources/images/7.png");
// const pokemon_img8 = require("./resources/images/8.png");
// const pokemon_img9 = require("./resources/images/9.png");

// [CORS]
const allowedOrigins = [
    "http://localhost:3000"
];

app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from the specified origin.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get("/pokemon", (req, res) => {
    res.json(pokemon);
});

app.get("/pokemon/:id", (req, res) => {
    switch(req.params.id) {
        case "1":
            res.json(pokemon1);
            break;
        case "2":
            res.json(pokemon2);
            break;
        case "3":
            res.json(pokemon3);
            break;
        case "4":
            res.json(pokemon4);
            break;
        case "5":
            res.json(pokemon5);
            break;
        case "6":
            res.json(pokemon6);
            break;
        case "7":
            res.json(pokemon7);
            break;
        case "8":
            res.json(pokemon8);
            break;
        case "9":
            res.json(pokemon9);
            break;
        default:
            throw new Error("Does not exist.");
    };
});

// app.get("/pokemon/image/:id", (req, res) => {
//     switch(req.params.id) {
//         case "1":
//             res.sendFile(pokemon_img1);
//             break;
//         case "2":
//             res.sendFile(pokemon_img2);
//             break;
//         case "3":
//             res.sendFile(pokemon_img3);
//             break;
//         case "4":
//             res.sendFile(pokemon_img4);
//             break;
//         case "5":
//             res.sendFile(pokemon_img5);
//             break;
//         case "6":
//             res.sendFile(pokemon_img6);
//             break;
//         case "7":
//             res.sendFile(pokemon_img7);
//             break;
//         case "8":
//             res.sendFile(pokemon_img8);
//             break;
//         case "9":
//             res.sendFile(pokemon_img9);
//             break;
//         default:
//             throw new Error("Does not exist.");
//     };
// });

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT} ????`);
});