const express = require('express');
const app = express();

const Users = [
    
];

app.use(express.json());
app.get('/', home)
app.use(validator);
app.post('/register', registeredUser);
app.get('/user', allUser);

function home(req,res){
    res.status(200).send('Welcome to G&G');
}

function validator (req, res, next){
    const body = req.body;
    if(!body.first_name){
        return res.status(400).send("first_name required");
    }
    if(!body.last_name){
        return res.status(400).send("last_name required");
    }
    if(!body.email.includes('@') || !body.email.includes('com')){
        return res.status(400).send("Should be a valid email");
    }
    if(body.pincode.length !== 6){
        return res.status(400).send("Should be exactly 6 numbers");
    }
    if(!(body.age > 0 && body.age < 100)){
        return res.status(400).send("Should be between 1 and 100.");
    }
    if(!(body.gender === "Male" || body.gender === "Female" || body.gender === "Others")){
        return res.status(400).send("Should be either Male, Female or Others");
    }
    next();
}


function registeredUser (req, res) {
    Users.push(req.body);
    res.status(200).send("Registered Successfully.");
};

function allUser(req,res){
    res.status(200).send(Users);
}


app.listen(3000);


