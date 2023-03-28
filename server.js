var mongoose = require('mongoose');
(express = require('express')),(app = express());


const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/activities', {useNewURLParser: true,})

//create schema
const activitySchema = new mongoose.Schema({
    activity: { type: String, required: true },
    });

// This Activitry creates the collection called activitimodels
const Activitymodel = mongoose.model('Activity', activitySchema)

app.get('/', (req, res) => {
    const task1 = new Activitymodel({
    activity: 'activity 1',
    })

    Activitymodel.insertMany([task1], function (err) {
        if (err) {
        console.log("error");
        } else {
        console.log('successfully created db');
        // mongoose.connection.close(); 
    }
        });

        res.send(`<h1>Document Added</h1>`);
    });

    app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    });