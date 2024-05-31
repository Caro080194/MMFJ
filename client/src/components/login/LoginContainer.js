import styled from "styled-components";

//Component for the login page
const LoginContainer = ({loginInfo, handleChange, requiredFields, handleLogin, loginMessage, }) => {
    return (
        <PageContainer>
            <img src="./assets/login.jpg" alt="workout Girl"/>
            <FormContainer>
                <h2>Welcome back!</h2>
                <Label>Email:</Label>
                <Input type="email" name="email" value={loginInfo.email} onChange={handleChange} required/>
                <Label>Password:</Label>
                <Input type="password" name="password" value={loginInfo.password} onChange={handleChange} required/><br/>
                <Button disabled={requiredFields} onClick={handleLogin}>Login</Button>
                <p>{loginMessage}</p>
            </FormContainer>
        </PageContainer>
    )

}

export default LoginContainer;

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 7% auto;

    img {
        width: 30%;
        border-radius: 5px;
        background-color: transparent;
    }
    h2{
        font-size: 2rem;
    }
`;

const FormContainer = styled.form`
    position: relative;
    text-align: center;
    margin: 10% 15%;
    background-color: #F2EFE5;
    padding: 2rem 6rem;
    border-radius: 5px;
    color: var(--secondary-color);
    
    h2 {
      margin-bottom: 7%;
    }
    p {
      font-size: 1.2rem;
   }
`;

const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
      outline: 2px solid var(--fith-color);
      border: none;
    }
`;

const Label = styled.label`
display: block;
margin-bottom: 0.5rem;
font-size: 1.2rem;
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