const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const cors = require('cors');
const firebaseDb =require( "./firebas");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


// const reg={
//     gmail:"jai singh rathore",
//     password:"977266669"
// };


app.get("/get",async(req,res)=>{
  await firebaseDb.child("logi").on("value",snapshot=>{
      
        if(snapshot.val() !=null){
                // upda({...snapshot.val()})
                // setOpen(true);

                 res.send({...snapshot.val()});                      
        }
})
 })


 
app.post("/post",async(req,res)=>{
    await firebaseDb.child("logi").push(
     {login:req.body.login, password:req.body.password},
      err=>{
          if(err){
              console.log(err);
          }
      }
  )
 })
 

app.listen(2000,()=>{
    console.log("your app is successfully created.");
})