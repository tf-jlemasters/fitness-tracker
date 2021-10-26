//Required dependencies
const express = require('express');
const mongoose = require ('mongoose');
const logger = require("morgan");
const path = require('path');
require('dotenv').config();
//Port
const PORT= process.env.PORT || 3008;

//Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    
})
    .then(() => {
        console.log('Connected to mongodb successfully');
    })
    .catch(error => console.log(error));

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));;
//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routes
app.use(require('./routes/workoutRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`);
});