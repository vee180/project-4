import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Making the POST request to /api/users/login on our express server
      await userService.login(state);
      // ^ this await ends after we recieve the token from the server, and store in localstorage

      // Route to wherever you want!
      // We call handleSignUpOrLogin, to decode that token from localstorage and store in our App component's state
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // this is from the throw block in the userService.login first then function
      setError(err.message);
    }
  }

  return (
  
<Grid
  textAlign="center"
  style={{ height: "100vh", margin: '0 auto'}}
  verticalAlign="middle"
>

  <Grid.Column style={{ maxWidth: 600 }}>
    
    <Form onSubmit={handleSubmit}>
    <Image src="https://i.imgur.com/h0tjlrG.png" style={{width: '400', justifyContent:'center', margin: '0 auto'}}/>
      <Segment stacked>
        <Form.Input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          required 
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <Button
          color="white"
          fluid
          size="large"
          type="submit"
          className="btn"
        >
          Login
        </Button>
      </Segment>
    </Form>
    <Message>
      New to us? <Link to="/signup">Sign Up</Link>
    </Message>
    {error ? <ErrorMessage error={error} /> : null}
  </Grid.Column>
</Grid>
  );
}

