import Navbar from "../../Navbar";
import Footer from "../../footer";
import { PageContainer, FilterMenuContainer, FilterOption, Checkbox, VideosContainer, VideoWrapper } from "../../StyledComponents";
import { useFilter } from "../../../hooks/useFilter";
import YoutubeVideo from "../../YoutubeVideo";

const PostWorkoutBodyArea = () => {
  const { selectedFilters, handleFilterChange } = useFilter(); // Get the function and state from the hooks

  //Data for the videos
  const videoData = [
    { videoId: "K_HemwlL75E", bodyArea: "Chest &Shoulders", id: "chestShoulders" },
    { videoId: "rZYc2yedQr4", bodyArea: "Back", id: "back" },
    { videoId: "R6t5tyYGaDg", bodyArea: "Quads", id: "quads" },
    { videoId: "Rjojo8ysStQ", bodyArea: "Knees", id: "knees" },
    { videoId: "kSWjw69CEwQ", bodyArea: "Legs", id: "legs" },
    { videoId: "qAIWzf0lJNo", bodyArea: "Full Body", id: "fullBody" },
    { videoId: "F5p96FKT1tg", bodyArea: "Upper Back& Shoulders", id: "upperBackShoulders" },
  ];

  // Filter videos based on selected filters
  const filteredVideos = selectedFilters.length === 0 ? videoData : videoData.filter(video => selectedFilters.includes(video.id));

  return (
    <>
      <Navbar />
      <PageContainer>
        <FilterMenuContainer>
          <h2>Filter by body area</h2>
          {videoData.map(area => (
            <FilterOption key={area.id}>
              <Checkbox
                type="checkbox"
                id={area.id}
                checked={selectedFilters.includes(area.id)}
                onChange={() => handleFilterChange(area.id)}
              />
              <label typeof="text">{area.bodyArea}</label>
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
                apiKeyEndpoint={"https://motion-mind-fitness-journey-7e8f61e2895c.herokuapp.com/pre-workout/movement"}
              />
            </VideoWrapper>
          ))}
        </VideosContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default PostWorkoutBodyArea;
