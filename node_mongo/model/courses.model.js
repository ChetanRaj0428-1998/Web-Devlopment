const mongoose = require("mongoose");//mongoose helps to create schema for mongodb

/*Schema in mongodb is a JSON object that allows us to define the 
shape and content of the docuemnts */
var CourseSchema = new mongoose.Schema({

    courseName : {
        type : String,
        required: "Required"
    },
    courseID : {
        type : String
    },
    courseDuration : {
        type: String
    },
    courseFee : {
        type: String
    }
    
});

//Defining schema as a model for mongoose

mongoose.model("Course", CourseSchema);

// 'Course' is the name of the collection, whenever e store a record in MongoDB based on the Schema in this case CourseSchema
 