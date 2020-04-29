import React from 'react';
import {  Form, Button } from 'react-bootstrap';
import './style.css';
//import Icon from '@material-ui/core/Icon';
import InfoIcon from '@material-ui/icons/Info';
// import Autocomplete from '@material-ui/lab/Autocomplete';
//import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
//import FormHelperText from '@material-ui/core/FormHelperText';
// import Navbar from '../navbar/index';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      productName: '',
      price: '',
      sku: '',
      state:'',
    }
    
    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return(
      <div>
            {/* <Navbar /> */}
             <section >
                <h2>Add Product</h2>
                 
                        <div>
                      
                            
                        <Form onSubmit={this.handleSubmit} className='grid-method-add-item-form'>
                        <Form.Group controlId="productName" className="add-item-form-col">
                            <Form.Label >Product Name:*</Form.Label>
                            <Form.Control
                            type="text"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.handleChange}
                            placeholder="Product Name" />
                        </Form.Group>

                        
                        <Form.Group controlId="sku" className="add-item-form-col">
                            <Form.Label>SKU:*
                            <InfoIcon className="fa fa-info-circle" color="primary" />
                          
                            </Form.Label>
                            <Form.Control
                            type="text"
                            name="sku"
                            value={this.state.sku}
                            onChange={this.handleChange}
                            placeholder="SKU" />
                        </Form.Group>

                        <Form.Group controlId="price" className="add-item-form-col" >
                            <Form.Label>Barcode:*
                                
                            </Form.Label>
                            
                            <Form.Control
                            
                           
                            value={this.state.Name}
                           
                            placeholder="Barcode Name" />
                      
                                <Select className="barcode-select"
                                
                                  name="Name"
                                  onChange={this.handleChange}
                                 
                                >
                                  <option aria-label="None" value="" />
                                  <option value={10}>Ten</option>
                                  <option value={20}>Twenty</option>
                                  <option value={30}>Thirty</option>
                                </Select>
                                                     
                        </Form.Group>

                        <Form.Group controlId="sku" className="add-item-form-col">

                            <Form.Label>Unit:*</Form.Label>
                           
                            <Form.Control
                            type="text"
                            name="unit"
                            value={this.state.sku}
                            onChange={this.handleChange}
                            placeholder="SKU" />
                        </Form.Group>

                        <Form.Group controlId="sku" className="add-item-form-col">

                            <Form.Label >Brand: </Form.Label>
                            <Form.Control
                            type="text"
                            name="Brand"
                            value={this.state.Brand}
                            onChange={this.handleChange}
                            placeholder="Brand" />

                        </Form.Group>


                            <br></br>

                           

                        {/* submit button */}
                        <Form.Group>
                            <Button variant="success" type="submit">Save</Button>
                        </Form.Group>
                        </Form>
                   
                        </div>
                   
                        
                 
                    
                </section>
       
        </div>
    )
  }
}

export default AddProduct;