# API Documentation

## Endpoints Overview

### User Endpoints
| URL                        | Method | Description                                                                                                |
|----------------------------|--------|------------------------------------------------------------------------------------------------------------|
| `"/signUp"`                | `POST` | Posts a new user to the database using user ID                                                             |
| `"/login"`                 | `POST` | Retrieves user from the database and logs the user in                                                      |
| `"/postPRs"`               | `POST` | Allows the user to post new PRs (Personal Records) to track achievements                                   |
| `"/trackLastPR"`           | `GET`  | Retrieves the last PR the user posted to update in real-time                                               |
| `"/pre-workout/movement"`  | `GET`  | Retrieves YouTube API key for pre-workout movements                                                        |
| `"/pre-workout/bodyArea"`  | `GET`  | Retrieves YouTube API key for pre-workout body areas                                                       |
| `"/post-workout/movement"` | `GET`  | Retrieves YouTube API key for post-workout movements                                                       |
| `"/post-workout/bodyArea"` | `GET`  | Retrieves YouTube API key for post-workout body areas                                                      |

## Endpoint Details

### 1. User Endpoints

#### `"/signUp"`
- **Method:** `POST`
- **Description:** Adds a new user to the database.
- **Keys:** `fname`, `lname`, `email`, `city`, `country`, `password`, `confirmPassword`
- **Response:** 
  - On success:
    ```json
    {
        "status": 201,
        "_id": "a7f17b71-f1d3-4049-9455-04b3ee4197b0"
    }
    ```
  - Unsuccessful status codes: 400, 500.

#### `"/login"`
- **Method:** `POST`
- **Description:** Logs in an existing user.
- **Keys:** `email`, `password`
- **Response:** 
  - On success:
    ```json
    {
        "status": 200,
        "message": "Login successful",
        "user": {
            "_id": "a7f17b71-f1d3-4049-9455-04b3ee4197b0",
            "fname": "Oscar",
            "lname": "Lore",
            "phone": "+1 (234) 523-4237",
            "email": "oscar.lore@blopiblop.com",
            "address": "43 regional street",
            "city": "Montreal",
            "province": "Quebec",
            "postcode": "H4N0T7",
            "country": "Canada"
        }
    }
    ```
  - Unsuccessful status codes: 404, 401, 500.

#### `"/postPRs"`
- **Method:** `POST`
- **Description:** Allows the user to post new PRs (Personal Records) to track achievements.
- **Keys:** `userId`, `exercise`, `weight`, `date`
- **Response:** 
  - On success:
    ```json
    {
        "status": 201,
        "message": "New PR registered: [exercise], weight: [weight], date: [date]"
    }
    ```
  - Unsuccessful status codes: 400, 404, 500.

#### `"/trackLastPR"`
- **Method:** `GET`
- **Description:** Retrieves the last PR the user posted to update in real-time.
- **Keys:** `userId`
- **Response:** 
  - On success:
    ```json
    {
        "status": 200,
        "message": "Got the last PR",
        "PRs": [Array of PR objects]
    }
    ```
  - Unsuccessful status codes: 400, 404, 500.

### 2. YouTube API Endpoints

#### `"/pre-workout/movement"`
- **Method:** `GET`
- **Description:** Retrieves YouTube API key for pre-workout movements.
- **Response:** 
  - On success:
    ```json
    {
        "status": 200,
        "apiKey": "[YouTube API Key]"
    }
    ```
  - Unsuccessful status codes: 500.

#### `"/pre-workout/bodyArea"`
- **Method:** `GET`
- **Description:** Retrieves YouTube API key for pre-workout body areas.
- **Response:** 
  - On success:
    ```json
    {
        "status": 200,
        "apiKey": "[YouTube API Key]"
    }
    ```
  - Unsuccessful status codes: 500.

#### `"/post-workout/movement"`
- **Method:** `GET`
- **Description:** Retrieves YouTube API key for post-workout movements.
- **Response:** 
  - On success:
    ```json
    {
        "status": 200,
        "apiKey": "[YouTube API Key]"
    }
    ```
  - Unsuccessful status codes: 500.

#### `"/post-workout/bodyArea"`
- **Method:** `GET`
- **Description:** Retrieves YouTube API key for post-workout body areas.
- **Response:** 
  - On success:
    ```json
    {
        "status": 200,
        "apiKey": "[YouTube API Key]"
    }
    ```
  - Unsuccessful status codes: 500.

## Handlers

### youtube.js
```javascript
const youtube = async (req, res) => {
    try {
        const apiKey = process.env.YOUTUBE_API_KEY; // store the YouTube API key
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
