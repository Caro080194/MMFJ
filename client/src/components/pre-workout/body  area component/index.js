import { useFilter } from "../../../hooks/useFilter";
import Navbar from "../../Navbar";
import Footer from "../../footer";
import YoutubeVideo from "../../YoutubeVideo";
import { PageContainer, FilterMenuContainer, FilterOption, Checkbox, VideosContainer, VideoWrapper } from "../../StyledComponents";

const PreWorkoutBodyArea = () => {
  const { selectedFilters, handleFilterChange } = useFilter(); // Get the function and state from the hooks

  //Data for the videos
  const videoData = [
    { videoId: "eKDnKKltnEI", bodyArea: "Upper Body", id: "upperBody" },
    { videoId: "zEiTWHUKy7w", bodyArea: "General", id: "general" },
    { videoId: "7KdsGAuQBC4", bodyArea: "Wrist", id: "wrist" },
    { videoId: "SfxyICleU4I", bodyArea: "Chest &Shoulders", id: "chestShoulders" },
    { videoId: "Vl8RpKg7sOg", bodyArea: "Anckel", id: "anckel" },
    { videoId: "gFMHDkm89BM", bodyArea: "Lower Body", id: "lowerBody" },
    { videoId: "kj1FAmgPRD8", bodyArea: "Glute", id: "glute" },
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
                apiKeyEndpoint={"https://motion-mind-fitness-journey-7e8f61e2895c.herokuapp.com/pre-workout/bodyArea"}
              />
            </VideoWrapper>
          ))}
        </VideosContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default PreWorkoutBodyArea;
