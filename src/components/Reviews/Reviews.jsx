import { useState } from 'react';
import { Form, TextArea, Button, Checkbox, Comment, Icon } from 'semantic-ui-react';

function Reviews({addReview,removeReview, post}) {
  const [review, setReview] = useState({body: '', rating: '1'});
const [state, setState] = useState(true)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(review,post._id)
    console.log(review);
  };
const handleCheckbox = () =>{
setState(!state)
}


  return (
    <div style={{textAlign: 'center', justifyContent: 'center', fontSize: '20px'}}>
    <Checkbox
      defaultChecked
      label='Collapse reviews'
      onChange={handleCheckbox}
    />

    
      <Comment.Group collapsed={state}>
        {post.reviews.map((review)=>{
            return(
              

          <Comment>
            <Comment.Content><Icon name="delete"  onClick={()=>{removeReview(review._id)}}/></Comment.Content>
            <Comment.Content>
              <Comment.Author as='a'>{review.username}</Comment.Author>
              
              <Comment.Text>{review.text}</Comment.Text>
              
            </Comment.Content>
        </Comment>
            )
        })}
        </Comment.Group>
      
    
    <Form onSubmit={handleSubmit} style={{width: '2000px'}}>
        <Form.Group>
        
      <Form.Field
        control={TextArea}
        name="body"
        
        placeholder="Write your review here"
        onChange={handleInputChange}
        value={review.body || ''}
        style={{ minHeight: 100, width: "400px", fontSize: '20px' }}
      />

      </Form.Group>


      <Form.Field
        control={Button}
        type="submit"
        content="Submit"
        color="white"
        style={{width: '400px', height: '50px'}}
      />
    </Form>
  </div>
  );
}


export default Reviews;