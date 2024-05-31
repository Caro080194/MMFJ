import styled from "styled-components";
import { useState } from "react";

const PostPRsContainer = ({ exercises, formData, handleChangeForm, handleUpdatePRs, message }) => {
    const [selectedExercise, setSelectedExercise] = useState(exercises[0]); // state to store the selected exercise

    // Function to handle change in exercise selection
    const handleSelectChange = (event) => {
        setSelectedExercise(event.target.value);
    };

    return (
        <MainContainer>
            <h2>Update your PR</h2>
            <FormContainer onSubmit={(event) => handleUpdatePRs(event, selectedExercise)}>
                <Label>Exercise:</Label>
                <Select value={selectedExercise} onChange={handleSelectChange}>
                    {exercises.map((exercise) => {
                        const key = exercise;
                        return (
                            // option for each exercise
                            <option key={key} value={key}>
                                {exercise}
                            </option>
                        );
                    })}
                </Select>
                <Label>Weight(lb):</Label>
                <Input
                    type="text"
                    name="weight"
                    value={formData[selectedExercise].weight}
                    onChange={(event) => handleChangeForm(event, selectedExercise)}
                />
                <Label>Date:</Label>
                <Input
                    type="date"
                    name="date"
                    value={formData[selectedExercise].date}
                    onChange={(event) => handleChangeForm(event, selectedExercise)}
                    required
                />
                <Button type="submit">Update PR</Button>
                <Message>{message}</Message>
            </FormContainer>
        </MainContainer>
    );
};

export default PostPRsContainer;


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--secondary-color);
    padding: 35px;
    width: 70%;
    border-radius: 5px;
    align-items: center;
    margin: 10% 10%;
    h2{
        margin-bottom: 45px;
        font-size: 2.5rem;
        color: var(--primary-color);
      }
`;

const FormContainer = styled.form`
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    //style for mobile/tablet/small laptop
    @media (max-width: 1260px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.2rem;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
`;

const Select = styled.select`
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
`;

const Button = styled.button`
    padding: 10px 40px;
    background-color: var(--third-color);
    color: var(--fith-color);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 4px;
    font-size: 1rem;
`;

const Message = styled.p`
    color: var(--fith-color);
    font-weight: bold;
    margin-top: 10px;
`;