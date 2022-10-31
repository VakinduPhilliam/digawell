
// Import helper functions
const {writeData, readData} = require('../helpers/save')
const {isEmail, isPhone, isNumber} = require('../helpers/helper')

module.exports = {

    // Object function to load front page.
    indexPage: (req, res) => {
        let t = req.query.t; // Get url query
        res.render('home.ejs', {
            title: " "
            ,message: '',
            t:t
        });
    },

    // Object function to load front page.
    dig: (req, res) => {
        res.render('dig.ejs', {
            title: " "
            ,message: ''
        });
    },

    // Object function to post new user data into database.
    newDig: (req, res) => {

        const {email, phone, location, latitude, longitude, country, population} = req.body; // Capture post request data from new user

        // Check if passwords match
        if(!isEmail(email) || !isPhone(phone) || !location || !latitude || !longitude || !country || !isNumber(population)){
        
            // If not, redirect back to signup
            res.render('home.ejs', {
                message: 'Please check that the data you provided is correct.',
                title: "Dig A Well | Submit Request"
            });   

        } else {

        let newLocation = {
            location: location,
            email: email,
            phone: phone,
            latitude:latitude,
            longitude:longitude,
            markerImage: "/public/well_2_icon.png",
            information: "Dig a Well",
            beneficiaries: population,
            country: country,
            date: new Date(), // Date of signup
            status: 3 // Status: 3 - Not dug, 1 - Work in progress, 3 - Dig completed.
        };

        // Read data from file        
        let dataRead = readData('/data/', 'well_locations.json');

        // Parse data to JSON                    
        let str = JSON.parse(dataRead);
    
        // Check if file has reached its storage size limit        
        if(str.well_locations.length<1000){
    
            // Store new data            
            str.well_locations.push(newLocation);
    
            writeData('/data/', 'well_locations.json', str);

        } else {
    
            // File storage is full            
            console.log('File has reached storage limit ..!');
    
        }

        // If not, redirect back to signup
        res.redirect('/done');

       }   
    }, 

    // Object function to load submission done page.
    done: (req, res) => {
        res.render('done.ejs', {
            title: " "
            ,message: ''
        });
    },      
    
    // Object function to load about page
    about: (req, res) => {
        res.render('about.ejs', {
            title: " "
            ,message: ''
        });
    },     
};

