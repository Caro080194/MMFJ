import styled from "styled-components";

//Component of the sign up form
const SignUpContainer = ({formData, handleChangeForm, handleSignUp, signUpMessage, requiredFields}) => {
    return(
        <>
        <FormContainer>
            <h2>Sign up and have access to a bunch of FREE tools for your fitness journey!!</h2>
            <Label>First Name:</Label>
            <Input type="text" name="fname" value={formData.fname} onChange={handleChangeForm} required/><br/>
            <Label>Last Name:</Label>
            <Input type="text" name="lname" value={formData.lname} onChange={handleChangeForm} required/><br/>
            <Label>Email:</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleChangeForm} required/><br/>
            <Label>City:</Label>
            <Input type="text" name="city" value={formData.city} onChange={handleChangeForm} required/><br/>
            <Label>Country:</Label>
            <Input type="text" name="country" value={formData.country} onChange={handleChangeForm} required/><br/>
            <Label>Password:</Label>
            <Input type="password" name="password" value={formData.password} onChange={handleChangeForm} required/><br/>
            <Label>Confirm Password:</Label>
            <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChangeForm} required/><br/>
            <Button disabled={requiredFields} onClick={handleSignUp}>Create account</Button>
            <p>{signUpMessage}</p>
        </FormContainer>
        </>
    )
}

export default SignUpContainer;

const FormContainer = styled.form`
    position: relative;
    text-align: center;
    margin: 10% 15%;
    background-color: #F2EFE5;
    padding: 2rem;
    border-radius: 5px;
    color: var(--secondary-color);

    h2 {
        margin-bottom: 5%;
    }
    p {
      font-size: 1.2rem;
    }

    //style for mobile/tablets
    @media (min-width: 300px) and (max-width: 1000px) {
      padding: 0.5rem;
      margin: 25% 15%;
      h2 {
        margin-bottom: 5%;
        font-size: 1rem;
       }
    }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  //style for phone
  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Input = styled.input`
  width: 40%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: 2px solid var(--fith-color);
    border: none;
  }

  //style for phone
  @media (min-width: 300px) and (max-width: 500px) {
      width: 50%;
  }
`;

const Button = styled.button`
  background-color: var(--secondary-color);
  color: var(--fith-color);
  padding: 0.75rem 1.5rem;
  margin: 5% auto;
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--third-color);
  }
  &[disabled] {
    background-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }
`;