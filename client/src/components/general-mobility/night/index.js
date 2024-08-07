import Navbar from "../../Navbar";
import Footer from "../../footer";
import { PageContainer, VideosContainer, VideoWrapper } from "../../StyledComponents";
import YoutubeVideo from "../../YoutubeVideo";

const GeneralMobilityNight = () => {

  //Data for the videos  
  const videoData = [
    { videoId: "F0CGLGSdKGA", id: "short" },
    { videoId: "wWBNTAsJL44", id: "medium" },
    { videoId: "mjf7Fkmuxhc", id: "long" },
  ];

  return (
    <>
      <Navbar />
      <PageContainer>
        <VideosContainer>
          {videoData.map(video => (
            <VideoWrapper key={video.id}>
              <YoutubeVideo
                videoId={video.videoId}
                movement={video.movement}
                id={video.id}
                apiKeyEndpoint={"https://motion-mind-fitness-journey-7e8f61e2895c.herokuapp.com/general-mobility/night"}
              />
            </VideoWrapper>
          ))}
        </VideosContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default GeneralMobilityNight;