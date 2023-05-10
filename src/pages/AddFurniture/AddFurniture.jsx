import LoginPage from "../LoginPage/LoginPage";
import React, { useState } from 'react';
import AddFurniture from "../../components/AddFurnitureForm/AddFurnitureForm"
import Header from "../../components/Header/Header";
import * as postsApi from "../../utils/postApi";
import { useNavigate } from "react-router-dom";

import './AddFurniture.css'



export default function AddPage({loggedUser,handleLogout}){
  const navigate = useNavigate();
  const [error, setError] = useState("");
  async function handleAddPost(post) {
    try {
      
      const responseData = await postsApi.create(post);
      console.log(responseData, " response from the server");
      
      
      
      
      navigate("/feed"); //navigate is for redirecting to the feed page when user fills the form
    } catch (err) {
     
      console.log(err, " error in addPost");
      setError("Error creating a post, please try again");
    }
  }

  return(
    <>
      <Header loggedUser={loggedUser} handleLogout={handleLogout}  />
      <AddFurniture handleAddPost={handleAddPost}/>
    </>
  )
}
