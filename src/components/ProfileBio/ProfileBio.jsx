import { Image, Grid, Segment } from "semantic-ui-react";

import './ProfileBio.css'

// convention of the class name is component-name + element or class idea you want
// .profile-bio-span
// .profile-bio-flx-ctr

export default function ProfileBio({ user }) {
  return (
    <div style={{textAlign: 'center', justifyContent: 'center', margin: '0 auto'}}>
    <Grid textAlign="center" columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Image
            src={`${
              user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } `}
            avatar
            size="small"
          />
        </Grid.Column>
        <Grid.Column textAlign="left" style={{ maxWidth: 850 }}>
          <Segment vertical>
            <h3>{user.username}</h3>
          </Segment>
          <Segment>
            <span className="profile-bio-span"> About: {user.bio}</span>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  );
}
