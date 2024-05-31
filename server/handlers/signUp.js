//Set up connection to the collection users in mongodb
const { MongoClient } = require('mongodb');
require('dotenv').config();
// const MONGO_URI = process.env.MONGO_URI;
const {MONGO_URI} = process.env;
const dbName = 'motionMind-fitnessJourney';

const bcrypt = require('bcrypt'); //will secure the password of the user by hashing them before storing in the database
const { v4: uuidv4 } = require('uuid'); //will create unique ID for each user

const signUp = async (req, res) => {
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        console.log("connected");
        const db = client.db(dbName);
        //getting the info from the frontend. Setting up required fields to be sure the user can't create an account without giving all infos needed
        const { fname, lname, email, city, country, password, confirmPassword } = req.body;
        const requiredFields = ['fname', 'lname', 'email', 'city', 'country', 'password', 'confirmPassword'];
        const missingFields = requiredFields.filter(field => req.body[field] === undefined || req.body[field] === '');

        //checking if there is any missing fields and send a 400 if there is one or more
        if (missingFields.length > 0) {
            return res.status(400).json({
                status: 400,
                message: 'Missing fields'
            });
        }

        //checking if password and confirmPassword are the same, if not then send a 400
        if (password !== confirmPassword) {
            return res.status(400).json({
                status: 400,
                message: 'Passwords do not match'
            });
        }

        //checking if there is not an account in the data base with the same email. If that's the case send a 400
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: `There is already an account with this email address: ${email}`
            });
        }

        //Hashing the password to be able to store it in the database in a safe way
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        //creating new user
        const newUser = {
            _id: uuidv4(),
            fname,
            lname,
            email,
            city,
            country,
            password: hashedPassword
        }

        //insert the user in the db
        const insertNewUser = await db.collection('users').insertOne(newUser);
        //check if the insert went well
        if (!insertNewUser || !insertNewUser.insertedId) {
            return res.status(500).json({
                status: 500,
                message: 'Mongo error while creating new user'
            });
        }

        //create default PRs for the new user in the PRs collection
        const userId = insertNewUser.insertedId;

        const defaultPRs = {
            userId,
            prs: [
                { exercise: "Back Squat", weight: 0, date: '' },
                { exercise: "Front Squat", weight: 0, date: '' },
                { exercise: "OHS", weight: 0, date: '' },
                { exercise: "Thruster", weight: 0, date: '' },
                { exercise: "Bench Press", weight: 0, date: '' },
                { exercise: "Push Press", weight: 0, date: '' },
                { exercise: "Press", weight: 0, date: '' },
                { exercise: "Clean", weight: 0, date: '' },
                { exercise: "Clean and Jerk", weight: 0, date: '' },
                { exercise: "Snatch", weight: 0, date: '' },
                { exercise: "Deadlift", weight: 0, date: '' }
            ]
        };

        await db.collection('PRs').insertOne(defaultPRs); // insert the default PRs in the collection

        res.status(201).json({
            status: 201,
            _id: insertNewUser.insertedId
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: error.message
        });
    } finally {
        await client.close();
        console.log("Close");
    }
}

module.exports = signUp;