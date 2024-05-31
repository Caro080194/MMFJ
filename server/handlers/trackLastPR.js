//Set up connection to the collection users in mongodb
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI }= process.env;
const dbName = 'motionMind-fitnessJourney';

const trackLastPR = async (req, res) => {
    const {userId} = req.query; // get the info from frontend

    const client = new MongoClient(MONGO_URI);

    //Make sure there is a userId
    if (!userId) {
        return res.status(400).json({
            status: 400,
            message: "Missing fields",
        });
    }

    //connecting to db
    try {
        await client.connect();
        console.log("connected");
        const db = client.db(dbName);
        const userPRs = await db.collection('PRs').findOne({userId});

        //send a 404 if we couldn't find a user with this userId
        if (!userPRs) {
            return res.status(404).json({
                status: 404,
                message: `Could not founda user with this userId: ${userId}`,
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Got the last PR",
            PRs: userPRs.prs
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    } finally {
        await client.close();
        console.log("Closed");
    }
};

module.exports= trackLastPR;