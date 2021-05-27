
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 999;

const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost:${port}`);
}



//get all data

app.get('/allData',(request, response) => {
    response.send(projectData);
});

//post data

app.post('/addData',(request, response) => {
    console.log(request.body);
     nEntry = {
         date:request.body.date,
         temp:request.body.temp,
         content:request.body.content
     }
     projectData = nEntry
     response.send(projectData);
})
