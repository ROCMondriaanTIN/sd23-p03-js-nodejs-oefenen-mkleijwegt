import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { validate, ValidationError, Joi } from 'express-validation';

const userArray = [];

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const registerValidation = {
    body: Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required(),
    }),
};

app.post('/register', validate(registerValidation, {}, {abortEarly: false}), (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    userArray.push({
        email: email,
        password: password
    });
    res.send( {success: true} );
});

app.post('/authenticate', validate(registerValidation, {}, {abortEarly: false}), (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //check if user exists and check password
    let loggedIn = false;
    for (let i = 0; i < userArray.length; i++) {
        const user = userArray[i];
        if (user.email === email && user.password === password) {
            res.send( {success: true} );
            loggedIn = true;
            break;
        } 
    }
    if(!loggedIn){
        res.send( {success: false} );
    }
});

app.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});