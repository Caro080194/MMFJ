//Set up connection to the collection users in mongodb
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI }= process.env;
const dbName = 'motionMind-fitnessJourney';

const postPRs = async (req, res) => {
    const {userId, exercise, weight, date} = req.body; // get the info from the frontend 

    const client = new MongoClient(MONGO_URI);

    //Make sure that the user did provide all the info before sending the data to the DB. If not send a 404
    if (!userId || !exercise || !weight || !date) {
        return res.status(400).json({
            status: 400,
            message: "Missing fields"
        });
    }

    //connecting to db
    try {
        await client.connect();
        console.log("connected");
        const db = client.db(dbName);
        const foundUser = await db.collection('PRs').findOne({userId});

         //send a 404 if the userID given hasn't been found in the db
         if (!foundUser) {
            return res.status(404).json({
                status: 404,
                message: `Unable to find info from this userId: ${userId}`
            });
        }

        //Push the new PR in the PRs array of the user. We don't just update because we want to keep track of all the PRs for future use
        await db.collection('PRs').updateOne(
            {userId},
            {$push: {'prs': {exercise: exercise, weight: weight, date: date}}}
        )
        res.status(201).json({
            status: 201,
            message: `New PR register: ${exercise}, weight: ${weight}, date: ${date}`
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: error.message
        });
    } finally {
        await client.close();
        console.log('Close');
    }

}

module.exports=postPRs;