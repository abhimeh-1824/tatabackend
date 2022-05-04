const express = require("express");

const brandsController = require("./controller/Featured_brands.controller");

const ayurvadaController = require ("./controller/Ayurveda.controller.js");

const energydrinkController = require("./controller/Energy_drink.controller");

const combosController = require("./controller/combos.controller");

const trendingController = require("./controller/trending.controller")

const categoriesController = require("./controller/Categories.controller")


const app = express();

app.use(express.json());


app.use("/brands", brandsController);

app.use("/ayurveda" , ayurvadaController )

app.use("/energydrink" , energydrinkController )

app.use("/combos" , combosController )

app.use("/trending" , trendingController )

app.use("/categories" , categoriesController )


module.exports = app;
