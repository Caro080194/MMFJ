import { useEffect, useState } from 'react';
import styled from 'styled-components';

//Component used for the youtube video that will be used in different pages
const YoutubeVideo = ({videoId, movement, id}) => {
    const [videoInfo, setVideoInfo] = useState(null); // store the info of the video
    const [youtubeApiKey, setYoutubeApiKey] = useState(''); // store the API key
  
    //Fetch the youtube API key everytime the component is mounted
    useEffect(() => {
      const fetchYoutubeApiKey = async () => {
        try {
          const response = await fetch('/pre-workout/movement');
          if (!response.ok) {
            throw new Error('Failed to fetch key');
          }
          const apiKey = await response.json();
          setYoutubeApiKey(apiKey);
        } catch (error) {
          console.error('Error fetching YouTube API key:', error);
        }
      };
  
      fetchYoutubeApiKey();
    }, []);
  
    //Will fetch the video info everytime the youtube API and videoID change
    useEffect(() => {
      const fetchVideoInfo = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${youtubeApiKey}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch video');
          }
          const data = await response.json();
          const videoData = data.items[0].snippet;
          setVideoInfo(videoData); //store video info inside the state
        } catch (error) {
          console.error('Error fetching video:', error);
        }
      };
  
      if (youtubeApiKey && videoId) {
        fetchVideoInfo();
      }
    }, [youtubeApiKey, videoId]);

    return(
        <>
        {videoInfo && (
          <VideoContainer>
            <h1>{movement}</h1>
            <iframe
              title="YouTube Video"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2>{videoInfo.title}</h2> {/* Display the video title thanks to the youtube api */}
          </VideoContainer>
        )}
      </>
    );
};

export default YoutubeVideo;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--third-color);
  h1{
    margin: 2% auto;
    font-size: 2rem;
  }
  h2{
    font-size: 1rem;
    width: 70%;
  }
  iframe{
    width: 600px;
    height: 300px;
  }

  //style for big laptop
  @media (min-width: 880px) and (max-width: 1450px) {
    h1{
      margin: 2% auto;
      font-size: 1.5rem;
    }
    h2{
      font-size: 0.8rem;
      width: 70%;
    }
    iframe{
      width: 350px;
      height: 250px;
    }
  }

  //style for small laptop/big tablet
  @media (min-width: 880px) and (max-width: 1450px) {
    iframe{
      width: 500px;
      height: 350px;
    }
  }
  //style for small tablet
  @media (min-width: 500px) and (max-width: 879px) {
    iframe{
      width: 300px;
      height: 250px;
    }
    h1{
      margin: 2% auto;
      font-size: 1.5rem;
    }
    h2{
      font-size: 0.8rem;
      width: 60%;
    }
  }
  //style for mobile
  @media (max-width: 499px) {
    iframe{
      width: 200px;
      height: 100px;
    }
    h1{
      margin: 2% auto;
      font-size: 1rem;
    }
    h2{
      font-size: 0.8rem;
      width: 80%;
    }
  }

`;