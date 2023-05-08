import PageHeader from "../../components/Header/Header";

import PostDisplay from "../../components/PostDisplay/PostDisplay";
import Loader from "../../components/Loader/Loader";

import { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";

// this will import all the functions from postApi, and attach to an object call postsApi
import * as postsApi from "../../utils/postApi";
import * as likesApi from '../../utils/likesApi';


import tokenService from "../../utils/tokenService";
export default function FeedPage({loggedUser, handleLogout}) {
  const [posts, setPosts] = useState([]); /// array of objects, the posts contain the likes
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // (C)RUD Create
  // we will call this function in our AddPuppyForm handleSubmit,
  // this way when we get a response from the server, we can update our state
  
  // C(R)UD Read
  async function getPosts() {
    try {
      // make an api call
      // Then I want to update state!
      const response = await postsApi.getAll();
      console.log(response, " data");
      // then we update state
      setPosts(response.posts);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error in getPosts");
      setLoading(false);
    }
  }

  // pass this down to Card component because that is where the like button is!
  // we call this function when the heart is clicked
  async function addLike(postId){
	// postId will be passed in when we click on a heart in Card component!
	try {
		const data = await likesApi.create(postId);
		// after we create a like
		// lets fetch all the posts again, to get the updated posts with the like 
		// embedded, and getPosts, will update the posts state so our ui will rerender
		// and we will see the heart change to red
		getPosts()


	} catch(err){
		console.log(err, ' error in addLike')
	}
  }

  // pass this down to Card component because that is where the like button is!
  // we call this function when the heart is clicked
  async function removeLike(likeId){
	try {
		// likeId will be passed in when we click on heart that is red in the 
		// Card component
		const data = await likesApi.removeLike(likeId);
		// then we will call getPosts to refresh the data, and have an updated post without the like
		getPosts()

	} catch(err){
		console.log(err, ' err in remove Like')
	}
  }

  useEffect(() => {
    getPosts();
  }, []);

  
  if (error) {
    return (
      <>
        <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
      </>
    );
  }
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <PostDisplay
            posts={posts}
            numPhotosCol={1}
            isProfile={false}
            loading={loading}
			addLike={addLike}
			removeLike={removeLike}
			loggedUser={loggedUser}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
