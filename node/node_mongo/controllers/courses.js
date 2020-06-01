const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const CourseModel = mongoose.model("Course");
router.get("/add", (req, res)=>{
    res.render("./layouts/add-course");
});
router.post("/add", (req, res)=>{
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFees = req.body.courseFees;
    course.courseID = Math.ceil(Math.random() *1000000) + "" ;
    course.save((err, doc)=>{
        if(!err)
        {
            res.redirect("/course/list");
        }
        else{
            res.send("Error, Err:"+err);
        }
    });
});
router.get("/list", (req, res)=>{

    //Setting
  /*  var course = new CourseModel();
    course.courseName = "NodeJS with MongoDB";
    course.courseID = "1";
    course.save(); */

    //Getting
    CourseModel.find((err, docs)=>{
       if(!err){
           
        res.render("list", {data : docs});
       }

       else{
        res.send("Error, err:"+err);
       }
    }) 
})


module.exports = router;