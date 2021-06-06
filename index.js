const connection = require("./model");
const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const inventoryControllers = require("./controllers/inventories");
const cors = require('cors')

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(cors())

app.use("/inventeries",inventoryControllers)

app.listen("3000",()=>{
    console.log("hello")
})
