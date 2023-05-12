import PageHeader from "../../components/Header/Header";
import React from 'react';


export default function RoomPalettePage({loggedUser,handleLogout}){
    return(<>
    <div> 
       
  <PageHeader  loggedUser={loggedUser} handleLogout={handleLogout}/>
  <div>Room Palette</div>
 
  </div>
    
    
   
    
    </>
    )
}