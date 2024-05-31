//Handler to send the youtube API key to the frontend

const youtube = async (req, res) => {
    try {
        const apiKey = process.env.YOUTUBE_API_KEY; //store the youtube API key
        if (!apiKey) {
            throw new Error('YouTube API key is not available.');
        }

        res.json(apiKey);
    } catch (error) {
        console.error('Error fetching YouTube API key:', error);
        res.status(500).send('Failed to fetch YouTube API key');
    }
};

module.exports = youtube;