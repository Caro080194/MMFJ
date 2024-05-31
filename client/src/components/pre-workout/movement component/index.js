import { useFilter } from "../../../hooks/useFilter";
import Navbar from "../../Navbar";
import Footer from "../../footer";
import { PageContainer, FilterMenuContainer, FilterOption, Checkbox, VideosContainer, VideoWrapper } from "../../StyledComponents";
import YoutubeVideo from "../../YoutubeVideo";


const PreWorkoutMovement = () => {
  const { selectedFilters, handleFilterChange } = useFilter(); // Get the function and state from the hooks

  //Data for the videos
  const videoData = [
    { videoId: "EaV_dvSH4mQ", movement: "Snatch", id: "snatch" },
    { videoId: "ebGJQSo7j98", movement: "Clean&Jerk", id: "clean&jerk" },
    { videoId: "Kg6z0QwiMdI", movement: "Back Squat", id: "backSquat" },
    { videoId: "a8UzpY9li0U", movement: "Front Squat", id: "frontSquat" },
    { videoId: "vABb_4ZBwRo", movement: "Pull Up", id: "pullUp" },
    { videoId: "zCe7AFGbxII", movement: "Over Head Squat", id: "overHeadSquat" },
    { videoId: "6le0Z5zGmFI", movement: "Deadlift", id: "deadlift" },
    { videoId: "3PCRIxuACmU", movement: "Hands Stand Push-up", id: "hspu" },
    { videoId: "1rn-YACVoeo", movement: "Wall Balls", id: "wallBalls" },
    { videoId: "UFOmNF-UEzg", movement: "Thrusters", id: "thrusters" },
    { videoId: "v-1gkMDpvyI", movement: "Muscle Up", id: "muscleUp" },
    { videoId: "HUS1Uco4n-U", movement: "Toes To Bar", id: "toesToBar" }
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
              <YoutubeVideo videoId={video.videoId} movement={video.movement} id={video.id} />
            </VideoWrapper>
          ))}
        </VideosContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default PreWorkoutMovement;


