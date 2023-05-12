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
    <div>
    <Checkbox
      defaultChecked
      label='Collapse comments'
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
      
    
    <Form onSubmit={handleSubmit}>
        <Form.Group>
      <Form.Field
        control={TextArea}
        name="body"
        
        placeholder="Write your review here"
        onChange={handleInputChange}
        value={review.body || ''}
      />
<Form.Field  control='select' name="rating" onChange={handleInputChange} >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </Form.Field>
      </Form.Group>


      <Form.Field
        control={Button}
        type="submit"
        content="Submit"
        color="blue"
      />
    </Form>
  </div>
  );
}


export default Reviews;