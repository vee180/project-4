import PageHeader from "../../components/Header/Header";
import React from 'react';
import "./MainPage.css";

export default function MainPage({loggedUser,handleLogout}){
    return(<>
    <div> 
       
  <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
 
  </div>
    
    
   
    
    </>
    )
}