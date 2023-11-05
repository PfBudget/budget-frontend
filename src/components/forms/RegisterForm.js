import styled from "styled-components";
import Button from "../simple/Button";
import useNavigation from "../../hooks/use-navigation";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setJwtToken} from "../../store";


function RegisterForm() {
    const {navigate} = useNavigation();
    const dispatch = useDispatch();
    const {jwtToken, linkToken} = useSelector(state => state.keys);
    const [inputs, setInputs] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();
        const results = await fetch("http://localhost:8080/user/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: inputs.username,
                email: inputs.email,
                password: inputs.password,
            }),
        });
        if(results.ok) {
            const data = await results.text();
            await dispatch(setJwtToken(data));
            navigate("/budget");
        } else {
            navigate("/login");
        }

    };

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    };

    return(
        <RegisterFormWrapper onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                type={"text"}
                name={"username"}
                placeholder={"Username"}
                value={inputs.username || ""}
                onChange={handleChange}
            />
            <input
                type={"text"}
                name={"email"}
                placeholder={"Email"}
                value={inputs.email || ""}
                onChange={handleChange}
            />
            <input
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                value={inputs.password || ""}
                onChange={handleChange}
            />
            <Button primary type={"submit"}>Submit</Button>
        </RegisterFormWrapper>
    );
}

export default RegisterForm;

const RegisterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  h1 {
    font-size: xxx-large;
    //font-weight: bold;
  }
  button, input {
    width: 100%;
    margin-top: 1rem;
  }
`;