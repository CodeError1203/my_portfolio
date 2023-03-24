import React,  {Component}  from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'

class Createcontact extends Component {
    constructor(props){
        super (props)

        this.state ={
            name: '',
            email:'',
            message:''
        }
    } 

    onChangecontactname = (e) => {
        this.setState({ name: e.target.value })

    }

    onChangecontactemail = (e) => {
        this.setState({ email: e.target.value })

    }

    onChangecontactmessage = (e) => {
        this.setState({ message: e.target.value })

    }

   

    onSubmit = (e) => {
        e.preventDefault()
    
        const contactObject = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        }
        axios.post('http://localhost:5000/contact/create-contact', contactObject)
        .then(res => {
            console.log(console.error)
        })
        .catch(error => {
            console.log(console.error)
        })
        this.setState({name:'',email:'',message:''})
        
        //alert('your data save')
       // window.location.replace('./student-list')
       this.props.router.navigate('/student-list')
        }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label>name</Form.Label>
                <Form.Control type='text' value={this.state.name} onChange={this.onChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>email</Form.Label>
                <Form.Control type='text' value={this.state.email} onChange={this.onChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>message</Form.Label>
                <Form.Control type='text' value={this.state.message} onChange={this.onChange}/>
            </Form.Group>
           
            <Form.Group className="text-center mt-3">
                <Button variant='primary' type='submit'>
                    Create
                </Button> 
            </Form.Group>      
        </Form>
      </div>
    )
  }
}

export default  withRouter (Createcontact)