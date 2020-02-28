const express = require("express");
const path = require("path")
const formidible = require('formidable')
const app = express()









app.use(require('express-session')({
    secret:"aAbBcCdD1!2@3#4%",
    maxAge:60000,
    resave:false,
    saveUninitialized:false
}))
app.use(express.static(path.join(__dirname,"client")))
app.get("/api/video",(req,res)=>{
    res.redirect("/")
})
app.post("/api/video",(req,res)=>{
    
    new formidible.IncomingForm({maxFileSize:2000*1024*1024}).parse(req, function (err, fields, files) {
        if(err) {
            console.log("maybe an error occurred?", err)
            res.redirect("/?uploadStatus=500")
        }
        else {
        let file = files['upload-file']
        console.log("someone tried to upload a video, with form fields", fields)
        console.log("files:", file);
        res.redirect("/?uploadStatus=200&"+`uploadPath=${file.path}`)
        }
        
      });
    // res.redirect("/")
})













app.listen(
    3000, "localhost",()=>{console.log("server started")}
)