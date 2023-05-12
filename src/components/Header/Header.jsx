import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import './Header.css'






function PageHeader({ loggedUser, handleLogout }) {
  




  return (
    <Segment clearing className="segment" style={{backgroundColor:"rgb(250,229,233)"}}>
      <Header as="h2" floated="right">
      <Link to="/"></Link>
        
       
        {/* <Link to="" onClick={handleLogout}>
          Logout
        </Link> */}
        </Header>
        <div className="container"  />
        <div ><img src="https://i.imgur.com/Y3Oo1uv.png"  style={{width: '200px',height:'140px',display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'rgb(250,229,233)'}}/></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Header floated="left" style={{paddingRight: '20px'}}><Link to="/addfurniture">Add Furniture</Link>
        <Link to="" onClick={handleLogout}></Link>
       </Header>
       <Header floated="left" style={{paddingLeft: '20px'}}> <Link to="/feed">View Posts</Link>
        <Link to="" onClick={handleLogout}></Link></Header>
        <Header floated="left" style={{paddingLeft: '20px'}}><Link to="/roompalette">Room Palette</Link>
        </Header>
        {loggedUser ? (
  <Header floated="left" style={{paddingLeft: '50px'}}>
   
    <Link to="" onClick={handleLogout}>
      Logout
    </Link>
    <Header as="h2" floated="right" style={{ right: 0 }}>
      <Link to={`/${loggedUser?.username}`}>
        <Image  
          src={
            loggedUser?.photoUrl
              ? loggedUser?.photoUrl
              : "https://react.semantic-ui.com/images/wireframe/image-square.png"
          }
          avatar
          size="tiny"
          bordered
          floated="right"
            ></Image>
      </Link>
    </Header>
  </Header>
) : (
  <Header floated="right" style={{paddingLeft: '50px'}}>
    <Link to="/login">Login</Link>
  </Header>
)}

</div>  
    </Segment>
  );
}

export default PageHeader;