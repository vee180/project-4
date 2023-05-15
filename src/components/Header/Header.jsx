import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import './Header.css'






function PageHeader({ loggedUser, handleLogout }) {
  




  return (
    <Segment clearing className="segment" style={{backgroundColor:"white"}}>
      <Header as="h2" floated="right">
      <Link to="/"></Link>
        
      
        {/* <Link to="" onClick={handleLogout}>
          Logout
        </Link> */}
        </Header>
        <div className="container"  />
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
  <img src="https://i.imgur.com/Y3Oo1uv.png" style={{ width: '330px', height: '180px'   }} />
</div>


        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Header floated="left" style={{paddingRight: '40px'}}><Link to="/addfurniture" style={{color: '#ac86ac', fontFamily: 'Didot', fontSize: '21px'}}>Add Furniture</Link>
        <Link to="" onClick={handleLogout}></Link>
       </Header>
       <Header floated="left" style={{paddingLeft: '40px'}}> <Link to="/feed" style={{color: '#ac86ac', fontFamily: 'Didot',fontSize: '21px'}}>View Posts</Link>
        <Link to="" onClick={handleLogout}></Link></Header>
        <Header floated="left" style={{paddingLeft: '40px'}}><Link to="/roompalette" style={{color: '#ac86ac', fontFamily: 'Didot', fontSize: '21px'}}>Room Palette</Link>
        </Header>
        
        {loggedUser ? (
  <Header floated="left" style={{paddingLeft: '80px'}}>
   
    <Link to="" onClick={handleLogout} style={{color: '#ac86ac', fontFamily: 'Didot', fontSize: '21px'}}>
      Logout
    </Link>
    <Header as="h2" floated="right" style={{ right: 0 }}>
      <Link to={`/${loggedUser?.username}`}>
        <Image  className="icon"
          src={
            loggedUser?.photoUrl
              ? loggedUser?.photoUrl
              : "https://react.semantic-ui.com/images/wireframe/image-circle.png"
          }
          avatar
          size="mini"
          bordered
          floated="right" style={{borderColor: '#ac86ac', float: 'right', clear: 'both'}}
            ></Image>
      </Link>
    </Header>
  </Header>
) : (
  <Header floated="right" style={{paddingLeft: '50px'}}>
    <Link to="/login" style={{color: '#ac86ac', fontFamily: 'Didot', fontSize: '21px'}}>Login</Link>
  </Header>
)}

</div>  

      <div className="video"></div>
    
    </Segment>
  );
}

export default PageHeader;