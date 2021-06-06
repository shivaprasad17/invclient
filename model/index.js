const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/soochee",{ useUnifiedTopology: true,useNewUrlParser: true } ,(error)=>{
    if(!error){
     console.log("success")
    }else{
        console.log("error",error)
    }

})

const inventeries = require('./inventeries.model')