import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
  } from "semantic-ui-react";
  
  import { useState } from "react";
  import userService from "../../utils/userService";
  import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
  import './SignupPage.css'
  
  // this is a hook that allows us to programatically navigate to a different route
  import { useNavigate } from "react-router-dom";
  
  export default function Signup({handleSignUpOrLogin}) {
  
    // navigate is a function that accepts a route to change too!
    const navigate = useNavigate()
  
    const [state, setState] = useState({
      username: "",
      email: "",
      password: "",
      passwordConf: "",
      bio: "",
    });
  
    // profile image
    const [selectedFile, setSelectedFile] = useState('')
  
    const [error, setError] = useState("");
  
    function handleChange(e) {
      setState({
          ...state,
          // es6 computed property syntax
          [e.target.name]: e.target.value
      })
    }
  
    function handleFileInput(e) {
      // this takes the first file the user uploads
      // and sets it in state
      console.log(e.target.files)
      setSelectedFile(e.target.files[0]);
    }
  
    async function handleSubmit(e){
      e.preventDefault();
      // ===================================================================
      // IN THIS CASE
      // WE are sending over a photo/file
      // We have to turn our data into formdata, otherwise it would be JSON
      // YOu only have to do this if you're sending over a photo/file
      const formData = new FormData(); // <- this is from the browser, allows us to create key value pairs
      // photo is the key, the value is the stuff from our state
      formData.append('photo', selectedFile);
      // we could add the rest 1 by 1 or we can use a for in loop
      // formData.append('username', state.username);
      // formData.append('email', state.email);
  
      for (let fieldName in state){
          formData.append(fieldName, state[fieldName])
      }
      // if you want to view the formData in the console you have to loop over it, otherwise it will look empty!
      console.log(formData.forEach((item) => console.log(item)));
      // ===================================================================
  
  
      try {
  
          await userService.signup(formData); //this makes the http request to the our express server /api/users/signup
          // when it finishes it stores the jwt toke in localstorage,
          // we can switch the view (go to the feed page or something!)
      handleSignUpOrLogin(); // this updates the state in the app with the correct token from localstorage!
      navigate('/'); // this programmatically navigates the client to the home page (refere to app.js for the '/')
  
      } catch(err){
          console.log(err.message, ' this is the error singnup up')
          setError('Check your terminal, there was an error signing up!')
      }
  
  
    }
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid textAlign="center" style={{ height: "100vh" , textAlign: 'center'}} verticalAlign="middle" className="grid">
        <Grid.Column style={{ }}>
            
            <Image src="https://i.imgur.com/UdPXQWu.png" style={{width: '600px', margin: '0 auto', justifyContent:'center'}} /> 
          
          <Form autoComplete="off" onSubmit={handleSubmit} style={{textAlign:'center',justifyContent: 'center',margin: 'auto'}} className='form'>
            <Segment stacked style={{textAlign:'center',justifyContent: 'center',margin: 'auto'}} className="segment">
              <Form.Input
                name="username"
                placeholder="username"
                value={state.username}
                onChange={handleChange}
                required
              />
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={state.passwordConf}
                onChange={handleChange}
                required
              />
              <Form.TextArea
                label="bio"
                name="bio"
                value={state.bio}
                placeholder="Tell us more about your furniture..."
                onChange={handleChange}
              />
              <Form.Field>
                <Form.Input
                  type="file"
                  name="photo"
                  placeholder="upload image"
                  onChange={handleFileInput}
                />
              </Form.Field>
              <Button type="submit" className="btn" style={{width: '400px'}}>
                Signup
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
      
      </div>
      
    );
  }
  
