import PageHeader from "../../components/Header/Header";
import React from 'react';
import './MainPage.css';


export default function MainPage({loggedUser,handleLogout}){
    return(<>
    <div> 
       
  <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
  
  </div>
  <div class="container">
  <div class="h">
    <h2>Modern Furniture & Home Decorating</h2>
    <h3>Inspiration for your eco-friendly home with RoomMuse</h3>
  </div>
  <div class="image-main">
  <img src="https://i.imgur.com/cZ1zMgQ.jpg" />
  <img src="https://i.imgur.com/Ov1fJTi.jpg" />
    <img src="https://i.imgur.com/XgLKvjf.jpg"/>
    <img src="https://i.imgur.com/sP49503.jpg" />
    <img src="https://i.imgur.com/a88p8YG.jpg" />
    <img src="https://i.imgur.com/0noFAgG.jpg" />
    <img src="https://i.imgur.com/KgkZpDt.png" />
    <img src="https://i.imgur.com/4o2E42c.jpg" />
    <img src="https://i.imgur.com/9EF10mE.jpg" />
    <img src="https://i.imgur.com/PimXTBu.jpg" />
    <img src="https://i.imgur.com/0aifc7I.png" />
    <img src="https://i.imgur.com/OKPh2r9.jpg" />
    <img src="https://i.imgur.com/vOhtIIV.jpg" />
    
  </div>
</div>
<div  className="text">
<h3 className="eco-friendly">Eco-Friendly Furniture: Stylish and Sustainable</h3>
<p>Are you curious about eco-friendly furniture and its benefits for our planet? You're in the right place! Eco-friendly furniture is made using sustainable materials and manufacturing practices, which reduces our carbon footprint and promotes a healthier living environment. By choosing eco-friendly furniture, you're not only helping the environment but also making your home stylish and eco-friendly. It's a win-win!</p>
</div>


  <div className="video"> <iframe src="https://player.vimeo.com/video/826763397?h=3cec89be39&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"   allowfullscreen title="AdobeStock_289445453" style={{autoplay:'1&amp',loop:'1&amp',title:'0&amp',byline:'0&amp',portrait:"0", width:"1920", height:"1080", frameborder:"0" ,allow:"autoplay",badge:'0&amp',autopause:"0&amp",player_id:"0&amp",app_id:"58479&amp"}} className="iframe"></iframe></div>
  <div className="quote-container">
  <div className="quote">"The most important thing about furniture is that it makes you feel at home." - Zaha Hadid</div>
 </div>
 <div className="card-container">
  <div class="card-flipper">
  <div className="card-flip">
    <div className="front">
      <img src="https://i.imgur.com/5OHphww.png" style={{width: '600px', height:' 400px'}}/>
      
    </div>
    <div class="back">
      <img src="https://i.imgur.com/tDjDTBO.png" style={{width: '600px', height:' 400px'}} />
    </div>
  </div>
</div>
<div class="card-flipper">
  <div className="card-flip">
    <div className="front">
      <img src="https://i.imgur.com/v7OFL9N.png" style={{width: '600px', height:' 400px'}}/>
      
    </div>
    <div class="back">
      <img src="https://i.imgur.com/c3adGaS.png" style={{width: '600px', height:' 400px'}} />
    </div>
  </div>
</div>
<div class="card-flipper">
  <div className="card-flip">
    <div className="front">
      <img src="https://i.imgur.com/oz3Lh5l.jpg" style={{width: '600px', height:' 400px'}}/>
      
    </div>
    <div class="back">
      <img src="https://i.imgur.com/HJ46j8w.png" style={{width: '600px', height:' 400px'}} />
    </div>
  </div>
</div>

<div className="card-flipper">
  <div className="card-flip">
    <div class="front">
      <img  src="https://i.imgur.com/aXxTo7x.jpg" style={{width: '600px', height:' 400px'}}/>
      
    </div>
    <div class="back">
      <img src="https://i.imgur.com/eoYQ57z.jpg" style={{width: '600px', height:' 400px'}}/>
    </div>
  </div>
</div>
</div>
    
    
  
    
<div><footer>
  <div>
    <img src="https://i.imgur.com/Y3Oo1uv.png" style={{width: '200px', height: '120px'}}/> </div>
<div class="contact">
      <h3>Contact Us</h3>
      <p>123456789</p>
      <p>room-muse@gmail.com</p>
    </div>
  

<div>&copy; 2023 RoomMuse. All rights reserved.</div>
  </footer></div>
   
    
    </>
    )
}