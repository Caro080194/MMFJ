import { useFilter } from "../../../hooks/useFilter";
import Navbar from "../../Navbar";
import Footer from "../../footer";
import { PageContainer, FilterMenuContainer, FilterOption, Checkbox, VideosContainer, VideoWrapper } from "../../StyledComponents";
import YoutubeVideo from "../../YoutubeVideo";

const PostWorkoutMovement = () => {
  const { selectedFilters, handleFilterChange } = useFilter();// Get the function and state from the hooks

  //Data for the videos
  const videoData = [
    { videoId: "OyvqNTYoNKM", movement: "Snatch& Jerk", id: "snatchJerk" },
    { videoId: "oozfXkK2fug", movement: "Squat", id: "squat" },
    { videoId: "fx71E9EBI80", movement: "Deadlift", id: "deadlift" },
  ];

  // Filter videos based on selected filters
  const filteredVideos = selectedFilters.length === 0 ? videoData : videoData.filter(video => selectedFilters.includes(video.id));

  return (
    <>
      <Navbar />
      <PageContainer>
        <FilterMenuContainer>
          <h2>Filter the movement</h2>
          {videoData.map(movement => (
            <FilterOption key={movement.id}>
              <Checkbox
                type="checkbox"
                id={movement.id}
                checked={selectedFilters.includes(movement.id)}
                onChange={() => handleFilterChange(movement.id)}
              />
              <label typeof="text">{movement.movement}</label>
            </FilterOption>
          ))}
        </FilterMenuContainer>
        <VideosContainer>
          {filteredVideos.map(video => (
            <VideoWrapper key={video.id}>
              <YoutubeVideo
                videoId={video.videoId}
                movement={video.movement}
                id={video.id}
                apiKeyEndpoint={"https://motion-mind-fitness-journey-7e8f61e2895c.herokuapp.com/post-workout/movement"}
              />
            </VideoWrapper>
          ))}
        </VideosContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default PostWorkoutMovement;

