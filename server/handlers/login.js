//Set up connection to the collection users in mongodb
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI }= process.env;
const dbName = 'motionMind-fitnessJourney';

const bcrypt = require('bcrypt'); // will decrypted the password from db

const login = async (req, res) => {
    const {email, password} = req.body // getting the info from the frontend

    const client = new MongoClient(MONGO_URI);

    //Checking if the user entered an email
    if (email === undefined || email === null || email === '') {
        return res.status(404).json({
            status: 404,
            message: "Please provide an email"
        });
    }

    //checking if the user entered a password
    if (password === undefined || password === null || password === '') {
        return res.status(404).json({
            status: 404,
            message: "Please provide a password"
        });
    }

    //connecting to db
    try {
        await client.connect();
        console.log("Connected");
        const db = client.db(dbName);
        const foundUser = await db.collection('users').findOne({email});

        //send a 404 if the email given hasn't been found in the db
        if (!foundUser) {
            return res.status(404).json({
                status: 404,
                message: `Unable to find an account with the email: ${email}`
            });
        }

        //comparing the password from frontend to the password store in the db with the help of bcrypt
        const isPasswordValid = await bcrypt.compare(password, foundUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                status: 401,
                message: "Incorrect password"
            });
        }

        //if email and password are correct then the user data are sent to the frontend except the password
        const {password: hashedPassword, ...userData} = foundUser;

        const userPRs = await db.collection('PRs').findOne({userId: userData._id});

        return res.status(200).json({
            status: 200,
            message: "Login successfull",
            user: userData,
            PRs: userPRs.prs
        });

    } catch (error){
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    } finally {
        await client.close();
        console.log("Closed");
    }
};

module.exports = login;