import { useState } from 'react';
import { Form, Button, Checkbox, Comment, Icon } from 'semantic-ui-react';

function Bookmarks({ addBookmark, removeBookmark, post }) {
  const [state, setState] = useState(true);
  

  

  const handleSubmit = (event) => {
    event.preventDefault();
    addBookmark(post._id);
    
  };

  
  const handleCheckbox = () => {
    setState(!state);
  };

  return (
    <div>
      <Checkbox
        defaultChecked
        label='Collapse bookmarks'
        onChange={handleCheckbox}
      />

      

      <Form onSubmit={handleSubmit}>
        

        <Form.Field
          control={Button}
          type="submit"
          content="Bookmark"
          color="blue"
        />
      </Form>
    </div>
  );
}

export default Bookmarks;
