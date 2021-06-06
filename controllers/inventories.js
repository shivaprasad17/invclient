const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const InventoryModel = mongoose.model("Inventeries")


router.post("/add",(req,res)=>{
   const inventeries = new InventoryModel({
       iName:req.body.iName,
       iSl1:req.body.iSl1,
       iSl2:req.body.iSl2,
       iState:req.body.iState,
       iCity:req.body.iCity,
       iCountry:req.body.iCountry,
       iZipcode:req.body.iZipcode,
       iPhone:req.body.iPhone,
       iEmail:req.body.iEmail,
       userName:req.body.userName
   })
   try{
    inventeries.save((err,doc)=>{
     if(!err){
       res.json(doc)
     }else{
        res.send(err)
     }
    })
   }catch(err){

   }
})

router.get("/list",(req,res)=>{
    InventoryModel.find((err,docs)=>{
        if(!err){
         res.send(docs)
        }else{

        }
    })
})

module.exports=router;