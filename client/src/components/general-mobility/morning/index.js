import Navbar from "../../Navbar";
import Footer from "../../footer";
import { PageContainer, VideosContainer, VideoWrapper } from "../../StyledComponents";
import YoutubeVideo from "../../YoutubeVideo";

const GeneralMobilityMorning = () => {

    //Data for the videos
    const videoData = [
        { videoId: "5H4MWQEe1Z0", id: "short" },
        { videoId: "aRVFt79LqCM", id: "medium" },
        { videoId: "0oYnT5OBzKg", id: "long" },
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
                                apiKeyEndpoint={"https://motion-mind-fitness-journey-7e8f61e2895c.herokuapp.com/general-mobility/morning"}
                            />
                        </VideoWrapper>
                    ))}
                </VideosContainer>
            </PageContainer>
            <Footer />
        </>
    );
};

export default GeneralMobilityMorning;