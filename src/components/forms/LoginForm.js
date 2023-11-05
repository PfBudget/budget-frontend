import styled from "styled-components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setJwtToken} from "../../store";
import useNavigation from "../../hooks/use-navigation";
import Button from "../simple/Button";


function LoginForm() {
    const {navigate} = useNavigation();
    const dispatch = useDispatch();
    const {jwtToken, linkToken} = useSelector(state => state.keys);
    const [inputs, setInputs] = useState({});

    // const checkUserStatus = async token => {
    //     console.log("Inside checkUserStatus");
    //     console.log(token);
    //     const results = await fetch("http://localhost:8080/user/status", {
    //         method: "GET",
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //         }
    //     });
    //     const data = await results.json();
    //     console.log(data);
    //     return data;
    // };

    // const createLinkToken = async token => {
    //
    //     const results = await fetch("http://localhost:8080/api/plaid/create-link-token", {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //         },
    //     });
    //     console.log(results);
    //     const data = await results.text();
    //     console.log(data);
    //     await dispatch(setLinkToken(data));
    //     console.log(linkToken);
    // };

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    };

    // const getUserAccounts = async token => {
    //     console.log("Inside getUserAccounts");
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //         }
    //     };
    //     console.log(options);
    //     const results = await fetch("http://localhost:8080/api/accounts", options);
    //     console.log(results);
    //     const data = await results.json();
    //     console.log(data);
    //     return data;
    // };

    const handleSubmit = async e => {
        e.preventDefault();
        const results = await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: inputs.username,
                password: inputs.password,
            }),
        });
        console.log(results);
        if(results.ok) {
            const data = await results.text();
            console.log(data);
            await dispatch(setJwtToken(data));
            navigate("/");
            // const accounts = await getUserAccounts(data);
            // dispatch(setAccounts(accounts));
            // const userStatus = await checkUserStatus(data);
            // console.log(userStatus.tokenExists);
            // if(!userStatus.tokenExists){
            //     console.log("token does not exist. going into createLinkToken");
            //     await createLinkToken(data);
            // } else {
            //     navigate("/budget");
            // }
        }
    };

    // const config = {
    //     onSuccess: async (public_token, metadata) => {
    //         console.log("Success");
    //         console.log(public_token);
    //         console.log(metadata);
    //         const results = await fetch("http://localhost:8080/api/plaid/exchange-public-token", {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Bearer ${jwtToken}`,
    //             },
    //             body: public_token
    //         });
    //         console.log(results);
    //         const data = await results.text();
    //         console.log(data);
    //         navigate("/");
    //     },
    //     onExit: (err, metadata) => {
    //         console.log("Exited")
    //     },
    //     onEvent: (eventName, metadata) => {
    //         console.log("Event")
    //     },
    //     token: linkToken,
    // };

    // const { open, exit, ready } = usePlaidLink(config);
    //
    // useEffect(() => {
    //     if(ready) {
    //         open()
    //     }
    // }, [open, ready]);

    return(
        <LoginFormWrapper onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                type={"text"}
                name={"username"}
                placeholder={"Username"}
                value={inputs.username || ""}
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
        </LoginFormWrapper>
    );
}

export default LoginForm;

const LoginFormWrapper = styled.form`
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