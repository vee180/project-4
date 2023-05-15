import PageHeader from "../../components/Header/Header";
import React from 'react';
import './RoomPalette.css';

export default function RoomPalettePage({loggedUser,handleLogout}){
    return(<>
    <div> 
       
  <PageHeader  loggedUser={loggedUser} handleLogout={handleLogout}/>
  
  <div style={{display: 'flex', flexWrap: 'wrap', margin: 'auto', justifyContent: 'center',alignContent:'center'}}>
  <div style={{flex: '33.33%', padding: '5px', textAlign: 'center'}}>
    <div>
      <h1>BLUE + BEIGE</h1>
      <img src="https://i.imgur.com/UDGCPEg.png"  style={{width: '100px'}}/>
      <p style={{backgroundColor: ''}}>Blue and beige can make for a beautiful color combination in a room. Blue is a calming color that can help promote relaxation and tranquility, while beige is a warm and inviting neutral color that can add a touch of sophistication and elegance to a space. Here's a possible description for a room that features blue and beige colors:

This serene and inviting room combines the soothing hues of blue with the warmth of beige to create a welcoming and relaxing ambiance. The walls are painted in a soft shade of beige, providing a neutral backdrop for the room's decor. The bedding is a mix of white and blue, featuring a pattern of swirling waves that evoke the tranquility of the ocean. A beige area rug anchors the space and adds texture, while a pair of blue accent pillows on the bed provide a pop of color. The curtains are a light blue color, adding a subtle touch of elegance to the room. Natural light streams in through the windows, casting a warm glow over the space. Overall, this room is a perfect oasis of calm and comfort, ideal for rest and relaxation.</p>
    </div>
  </div>
  <div style={{flex: '33.33%', padding: '5px', textAlign: 'center'}}>
    <div>
      <h1>GREEN + RED</h1>
      <img src="https://i.imgur.com/18zCgq5.png" style={{width: '90px'}}/>
      <p>Green and red can create a bold and vibrant color palette in a room. Green is a refreshing and soothing color that can add a sense of calm and harmony, while red is a passionate and energizing color that can add excitement and drama. Here's a possible description for a room that features green and red colors:

This dynamic and energetic room combines the invigorating hues of green with the boldness of red to create a lively and stimulating ambiance. The walls are painted in a soft shade of green, providing a calming backdrop for the room's decor. The bedding is a mix of white and red, featuring a pattern of bold stripes that add a sense of drama to the space. A green area rug anchors the room and adds texture, while a pair of red accent pillows on the bed provide a pop of color. The curtains are a bright red color, adding a vibrant touch of energy to the room. Natural light streams in through the windows, casting a warm glow over the space. Overall, this room is a perfect blend of calm and excitement, ideal for those who want to feel energized and refreshed.</p>
    </div>
  </div>
  <div style={{flex: '33.33%', padding: '5px', textAlign: 'center'}}>
    <div>
      <h1>PINK + GREEN</h1>
      <img src="https://i.imgur.com/aPiViZW.png" style={{width: '95px'}}/>
      <p>Pink and green can create a sweet and feminine color scheme in a room. Pink is a romantic and delicate color that can add a touch of playfulness and charm, while green is a fresh and calming color that can add balance and harmony. Here's a possible description for a room that features pink and green colors:

This charming and whimsical room combines the delightful hues of pink with the freshness of green to create a sweet and playful ambiance. The walls are painted in a soft shade of pink, providing a romantic backdrop for the room's decor. The bedding is a mix of white and green, featuring a pattern of delicate floral prints that add a touch of femininity to the space. A green area rug anchors the room and adds texture, while a pair of pink accent pillows on the bed provide a pop of color. The curtains are a light green color, adding a refreshing touch of nature to the room. Natural light streams in through the windows, casting a warm glow over the space. Overall, this room is a perfect sanctuary of whimsy and charm, ideal for those who want to feel playful and lighthearted.</p>
    </div>
  </div>
  <div style={{flex:'33.33%', padding:'5px', textAlign: 'center'}}>
    <div>
      <h1>BLACK + WHITE</h1>
      <img src="https://i.imgur.com/3exyDWX.png" style={{width: '100px'}}/>
      <p>Black and white can create a classic and timeless color scheme in a room. Black is a powerful and dramatic color that can add a sense of sophistication and elegance, while white is a clean and refreshing color that can add a sense of purity and simplicity. Here's a possible description for a room that features black and white colors:

This elegant and refined room combines the dramatic hues of black with the purity of white to create a classic and timeless ambiance. The walls are painted in a crisp shade of white, providing a clean backdrop for the room's decor. The bedding is a mix of white and black, featuring a pattern of bold geometric shapes that add a sense of drama to the space. A black area rug anchors the room and adds texture, while a pair of white accent pillows on the bed provide a subtle pop of contrast. The curtains are a sleek black color, adding a sense of sophistication and elegance to the room. Natural light streams in through the windows, casting a warm glow over the space. Overall, this room is a perfect sanctuary of simplicity and refinement, ideal for those who want to feel stylish and sophisticated.</p>
    </div>
  </div>
  <div style={{flex:'33.33%', padding:'5px', textAlign: 'center'}}>
    <div>
      <h1>YELLOW + GRAY</h1>
      <img src="https://i.imgur.com/c5nq4dk.png" style={{width: '100px'}}/>
      <p>Yellow and gray can create a cheerful and contemporary color scheme in a room. Yellow is a bright and sunny color that can add a sense of happiness and positivity, while gray is a cool and calming color that can add a sense of balance and harmony. Here's a possible description for a room that features yellow and gray colors:

This cheerful and modern room combines the sunny hues of yellow with the calming tones of gray to create a contemporary and welcoming ambiance. The walls are painted in a soft shade of gray, providing a cool backdrop for the room's decor. The bedding is a mix of white, yellow, and gray, featuring a pattern of playful polka dots that add a sense of fun to the space. A yellow area rug anchors the room and adds texture, while a pair of gray accent pillows on the bed provide a subtle pop of contrast. The curtains are a light yellow color, adding a sense of warmth and positivity to the room. Natural light streams in through the windows, casting a bright and cheerful glow over the space. Overall, this room is a perfect sanctuary of happiness and relaxation, ideal for those who want to feel energized and at ease.</p>
    </div>
  </div>
  <div style={{flex:'33.33%', padding:'5px', textAlign: 'center'}}>
    <div>
      <h1>EMERALD + TAN</h1>
      <img src="https://i.imgur.com/x4jsj0c.png" style={{width: '110px'}} />
      <p>Emerald and tan can create a luxurious and earthy color scheme in a room. Emerald is a rich and regal color that can add a sense of luxury and opulence, while tan is a warm and cozy color that can add a sense of comfort and relaxation. Here's a possible description for a room that features emerald and tan colors:

This luxurious and earthy room combines the regal hues of emerald with the cozy tones of tan to create a warm and inviting ambiance. The walls are painted in a rich shade of emerald, providing a bold backdrop for the room's decor. The bedding is a mix of tan and emerald, featuring a pattern of elegant stripes that add a sense of sophistication to the space. A tan area rug anchors the room and adds texture, while a pair of emerald accent pillows on the bed provide a subtle pop of contrast. The curtains are a warm tan color, adding a sense of comfort and relaxation to the room. Natural light streams in through the windows, casting a soft and inviting glow over the space. Overall, this room is a perfect sanctuary of luxury and comfort, ideal for those who want to feel pampered and relaxed.</p>
    </div>
  </div>
</div>

   </div>
    
    </>
    )
}