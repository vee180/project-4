import { useState } from 'react'

import { Form, Segment} from 'semantic-ui-react'



function MainPage() {
    const [description, setDescription] = useState('This is the main page')
    
  
    return (
      <Segment>
        
      
        

      
        <h1>{description}</h1>
        <Form>
          
          
        </Form>
        
      </Segment>
      
    );
  }
   
  
  
  export default MainPage