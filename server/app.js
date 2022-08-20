const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require("cors");

const app =express();

//middle-wares 
app.use(express.json());
app.use(cors());

const DB ='mongodb+srv://aarya:aarya@cluster0.4m1ls4q.mongodb.net/?retryWrites=true&w=majority';

//connecting database

mongoose.connect(DB,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>{
    console.log(err);
})

const formdataformat =new mongoose.Schema({

    company_name:{
        type:String,
    },
    ownername:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
    wym:{
        type:String,
    },
    remarks:{
        type:String,
    }
})

const projectModel = mongoose.model('maquredata',formdataformat);

app.post('/',async(req,res,next)=>{
    
    const collect = await projectModel.create({

        company_name:req.body.companyname,
        owner_name:req.body.ownername,
        email:req.body.email,
        phone:req.body.phonenumber,
        wym:req.body.whatyoumanufacture,
        remarks:req.body.remarks

    });
    console.log(collect);
    
    if(collect){
        res.status(200).json({
            success:true,
        })
    }
    else{
        res.status(400).json({
            success:false,
        })
    }
})

app.get('/',(req,res,next)=>{
    res.send("SERVER WORKING");
});

app.listen(5000,()=>{
    console.log("server running at port 5000" );
})
