import styled from "styled-components";

//Component of the current PRs
const CurrentPRs = ({ latestPRs }) => {
    return (
        <MainContainer>
            <h2>Check out your latest PR</h2>
            <PRsContainer>
                {Object.keys(latestPRs).map((exercise) => (
                    <PRItem key={exercise}>
                        <ExerciseName>{exercise}:</ExerciseName> {latestPRs[exercise].weight}lb - {latestPRs[exercise].date}
                    </PRItem>
                ))}
            </PRsContainer>
        </MainContainer>
    );
};

export default CurrentPRs;

const MainContainer = styled.div`
  text-align: center;
  background-color: var(--secondary-color);
  padding: 35px;
  border-radius: 5px;
  width: 70%;

  h2{
    margin-bottom: 45px;
    font-size: 2.5rem;
    color: var(--primary-color);
  }
`;

const PRsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  color: var(--fith-color);
  font-size: 1.5rem;
`;

const PRItem = styled.p`
  margin: 0;
`;

const ExerciseName = styled.span`
  font-weight: bold;
  color: var(--primary-color);
`;