import { useState } from 'react'

import { Button, Form, Segment} from 'semantic-ui-react'



function MainPage() {
    const [description, setDescription] = useState('This is the main page')
  
    return (
      <Segment>
        <h1>{description}</h1>
        <Form>
          <h1></h1>
          
        </Form>
      </Segment>
    )
  }
  
  export default MainPage