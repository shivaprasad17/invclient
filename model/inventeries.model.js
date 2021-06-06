const mongoose = require("mongoose")

var InventeriesSchema = new mongoose.Schema({
    iName:{
        type: String,
        require :"Required"
    },
    iSl1:{
        type: String,
        require :"Required"
    },
    iSl2:{
        type: String,
    },
    iState:{
        type: String,
        require :"Required"
    },
    iCity:{
        type: String,
        require :"Required"
    },
    iCountry:{
        type: String,
        require :"Required"
    },
    iZipcode:{
        type: String,
        require :"Required"
    },
    iPhone:{
        type: String,
    },
    iEmail:{
        type: String,
    },
    userName:{
        type: String,
        require :"Required"
    }

});

mongoose.model("Inventeries",InventeriesSchema)