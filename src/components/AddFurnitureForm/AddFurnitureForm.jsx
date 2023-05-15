import { useState } from 'react'

import { Button, Form, Segment} from 'semantic-ui-react'


export default function AddFurnitureForm({handleAddPost}){

	const [caption, setCaption] = useState('')

	const [selectedFile, setSelectedFile] = useState('')

  

	function handleChange(e){
		setCaption(e.target.value)
	}

	function handleFileInput(e){
		setSelectedFile(e.target.files[0])
	}

	function handleSubmit(e){
		e.preventDefault();


    
		// make our state into formData
		// WE have to do this because need to send a 
		// multipart/formdata request to our express because
		// we are sending a photo over!
		const formData = new FormData();
		formData.append('caption', caption);
		formData.append('photo', selectedFile);

		handleAddPost(formData); // handleAddPost comes from the Feed component, because we are storing state there, so we'll define the api call in that component
		// then we can our api call! to our express server!

	}

	return (
		
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgb(215,229,206)', backgroundImage: 'url("https://i.imgur.com/ojWFnhP.png")' , backgroundPosition:'center', backgroundSize:'auto', width: '1600px', backgroundRepeat: 'no-repeat',margin: 'auto', alignContent:'center'}}>
  <Segment style={{width: '50%', backgroundColor: '#fff9ff', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',height: '400px'}}>
    <Form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px'}}>
      
      
      
      <Form.Input
        placeholder="Furniture Details"
        name="eco-friendly"
        onChange={handleChange}
        style={{backgroundColor: 'rgb(214,202,200)', marginBottom: '20px', width: '600px',marginTop: '40px'}}
      />
      
   
      <Form.Input 
        type='file'
        placeholder="upload image"
        onChange={handleFileInput}
        style={{backgroundColor: 'rgb(214,202,200)', marginBottom: '20px', width: '600px'}}
		/>
		
      
      <Button type="submit" style={{backgroundColor: '#bdcdb1', color: '#FFF', width: '80%', marginTop: '20px', borderRadius: '5px'}}>Add Furniture</Button>
    </Form>
  </Segment>
</div>

	)
}