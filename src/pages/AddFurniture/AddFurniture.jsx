import LoginPage from "../LoginPage/LoginPage";
import React from 'react';
import AddFurniture from "../../components/AddFurnitureForm/AddFurnitureForm"
import Header from "../../components/Header/Header";


export default function AddPage({loggedUser,handleLogout}){
  async function handleAddPost(post) {
    
    try {
      setLoading(true);
      const responseData = await postsApi.create(post); // this is calling our create function in the postsApi utils folder
      console.log(responseData, " response from the server");
      setPosts([responseData.data, ...posts]); // spread operator to keep all the posts that are already in state!
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err, " error in addPost");
      setError("Error creating a post, please try again");
    }
  }




  return(
    <>
    <Header loggedUser={user} handleLogout={handleLogout} />
    <AddFurniture handleAddPost={handleAddPost}/>
    
    </>
  )
}



 