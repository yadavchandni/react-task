// import React, { Component } from 'react'
//
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// 

// export default class index extends Component {
//     render() {
 
//         return (
//             <div>
//                 {/* inventory feilds  */}
                
//                

//                  <div className="card-body">
//                         <form>
//                         {/* product name section  */}
//                         <div className="row">
//                             <div className="col-md-4">
//                             <div className="form-group bmd-form-group is-filled">
//                                 <label className="bmd-label-floating">Product Name :*</label>
//                                 <input type="text" className="form-control" />
//                             </div>
//                             </div>
//                             {/* sku section */}
//                             <div className="col-md-4">
//                             <div className="form-group bmd-form-group">
//                                 <label className="bmd-label-floating">SKU</label>
//                                  <InfoIcon className="fa fa-info-circle" color="primary" />
//                                 <input type="text" className="form-control" />
//                             </div>
//                             </div>
//                             {/* barcode section */}
//                             <div className="col-md-4">
//                                 <div className="form-group bmd-form-group">
//                                 <label className="bmd-label-floating">Barcode</label>
                                    
//                                 </div>                          
//                            </div>
//                         </div>
//                         {/* unit section */}
//                         <div className="row">
//                             <div className="col-md-4">
//                             <label className="bmd-label-floating">Unit*:</label>
//                             <div className="input-group md-form form-sm form-1 ">                                                           
//                                     <Select
//                                         native
//                                         value={10}
//                                         label="Age"
//                                         className={' col-md-10 col-sm-8  col-xs-6'}
//                                         >
//                                         <option aria-label="None" value="" />
//                                         <option value={10}>Ten</option>
//                                         <option value={20}>Twenty</option>
//                                         <option value={30}>Thirty</option>
//                                      </Select>
//                                     <div className="input-group-prepend  col-md-2 col-sm-4  col-xs-6">
//                                         <span className="input-group-text purple lighten-3" id="basic-text1">
//                                             <i className="fas fa-plus text-white" aria-hidden="true" />
//                                         </span>
//                                     </div>
//                                </div>                                                             
//                             </div>
//                             {/* brands section */}
//                             <div className="col-md-4">
//                             <div className="form-group bmd-form-group">  
//                             <label className="bmd-label-floating">Brands:</label>                      
//                                     <div className="input-group md-form form-sm form-1 ">                                                           
//                                     <Select
//                                         native
//                                         value={10}
//                                         label="Age"
//                                         className={' col-md-10 col-sm-8  col-xs-6'}
//                                         >
//                                         <option aria-label="None" value="" />
//                                         <option value={10}>Ten</option>
//                                         <option value={20}>Twenty</option>
//                                         <option value={30}>Thirty</option>
//                                      </Select>
//                                     <div className="input-group-prepend  col-md-2 col-sm-4 col-xs-6">
//                                         <span className="input-group-text purple lighten-3" id="basic-text1">
//                                             <i className="fas fa-plus text-white" aria-hidden="true"  />
//                                         </span>
//                                     </div>
//                                     </div>                             
//                             </div>
//                             </div>                            
//                         </div>
//                         <br></br>

//                         <div className="row">
//                             {/* category section */}
//                             <div className="col-md-4">
//                                 <FormControl >
//                                     <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
//                                     <Select native defaultValue="" id="grouped-native-select" style={{width:"35rem"}}>
//                                     <option aria-label="None" value="" />
//                                     <optgroup label="Category 1">
//                                         <option value={1}>Option 1</option>
//                                         <option value={2}>Option 2</option>
//                                     </optgroup>
//                                     <optgroup label="Category 2">
//                                         <option value={3}>Option 3</option>
//                                         <option value={4}>Option 4</option>
//                                     </optgroup>
//                                     </Select>
//                                 </FormControl>
//                             </div>
//                             {/* Sub catogory section */}
//                             <div className="col-md-4">
//                                 <FormControl >
//                                     <InputLabel htmlFor="grouped-native-select">Sub Category</InputLabel>
//                                     <select className="mdb-select md-form" searchable="Search here..">
//                                         <option value disabled selected>Choose your country</option>
//                                         <option value={1}>USA</option>
//                                         <option value={2}>Germany</option>
//                                         <option value={3}>France</option>
//                                         <option value={3}>Poland</option>
//                                         <option value={3}>Japan</option>
//                                     </select>
//                                 </FormControl>
//                              </div>
//                             <div className="col-md-4">
//                                 <h1> ok</h1>
//                                 <select class="mdb-select md-form" searchable="Inzmam here..">
//                                     <option value="" disabled selected>Choose your country</option>
//                                     <option value="1">USA</option>
//                                     <option value="2">Germany</option>
//                                     <option value="3">France</option>
//                                     <option value="3">Poland</option>
//                                     <option value="3">Japan</option>
//                                 </select>
//                             </div>
//                         </div>
                        
                        
//                         <div className="row">
//                             <div className="col-md-4">
//                             <div className="form-group">
//                                 <label>About Me</label>
//                                 <div className="form-group bmd-form-group">
//                                 <label className="bmd-label-floating"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>
//                                 <textarea className="form-control" rows={5} defaultValue={""} />
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                         <div className="text-center">
//                             <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign up</button>
//                         </div>
//                         <div className="clearfix" />
//                     </form>
//                  </div>
//             </div>
//         )
//     }
// }

// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfoIcon from '@material-ui/icons/Info';
import './style.css';
// import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




//select Unit section :
const options = ['Option 1', 'Option 2'];

// barcode autocomplete function 
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}



export default function Asynchronous() {

  //barcode section
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  // select secition
  
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  //checkbox
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (

    <div className="card-body">
      <h2>Add Product</h2>
         <div className=" inventory-info mt-5">
            <div className="row">
                {/* sku section */}
                <div className="col-md-4">
                    <div className="form-group bmd-form-group">
                        <label className="bmd-label-floating">Product Name</label>
                            {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}
                            <input type="text" className="form-control"  placeholder="Enter Product Name" />
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">SKU</label>
                            <InfoIcon className="fa fa-info-circle" className="icon-superscript" />
                            <input type="text" className="form-control" id="outlined-basic" placeholder="Enter SkU Name" /> 
                            
                      </div>
                  </div>
                  {/* barcode */}
                <div className="col-md-4">
                    <label className="bmd-label-floating">Barcode *:</label>
                        <Autocomplete
                          id="asynchronous-demo"               
                          open={open}
                          onOpen={() => {
                              setOpen(true);
                          }}
                          onClose={() => {
                              setOpen(false);
                          }}
                          getOptionSelected={(option, value) => option.name === value.name}
                          getOptionLabel={(option) => option.name}
                          options={options}
                          loading={loading}
                          renderInput={(params) => (
                              <TextField
                              {...params}
                              label="Enter Barcode Name"
                              variant="outlined"
                              InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (
                                  <React.Fragment>
                                      {loading ? <CircularProgress   /> : null}
                                      {params.InputProps.endAdornment}
                                  </React.Fragment>
                                  ),
                              }}
                              />
                             )}
                          />
                 </div>
            </div>
            <br></br>
            <div className="row">   
             {/* unit section */}
              <div className="col-md-4 ">
                <label className="bmd-label-floating">Units *:</label>             
                <div className="input-group-prepend">
                  <Autocomplete 
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      className="controllable-states-select"
                      options={options}                 
                        renderInput={(params) => <TextField {...params} label="Unit code" variant="outlined"  />}
                        
                    ></Autocomplete>
                    <span className="input-group-text" id="basic-addon">
                    <i className="fa fa-plus prefix" style={{Color:"blue"}}></i>
                  </span>
                  </div>
              </div>

              {/* Brands section*/}
                <div className="col-md-4 ml-1">
                <div className="form-group bmd-form-group">
                  <label className="bmd-label-floating">Brands *:</label>             
                  <div className="input-group-prepend">
                    <Autocomplete 
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        className="controllable-states-select"
                        options={options}                 
                          renderInput={(params) => <TextField {...params} label="Unit code" variant="outlined"  />}                          
                      ></Autocomplete>
                      <span className="input-group-text" id="basic-addon">
                      <i className="fa fa-plus prefix" style={{Color:"blue"}}></i>
                    </span>
                    </div>
                    </div>
                </div>
            </div>
            <br></br>
           
            <div className="row">
                {/* category */}
                <div className="col-md-4">
                    <div className="form-group bmd-form-group">
                    <label className="bmd-label-floating">Category*:</label>
                        <Autocomplete
                          id="asynchronous-demo"               
                          open={open}
                          onOpen={() => {
                              setOpen(true);
                          }}
                          onClose={() => {
                              setOpen(false);
                          }}
                          getOptionSelected={(option, value) => option.name === value.name}
                          getOptionLabel={(option) => option.name}
                          options={options}
                          loading={loading}
                          renderInput={(params) => (
                              <TextField
                              {...params}
                              label="Enter Barcode Name"
                              variant="outlined"
                              InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (
                                  <React.Fragment>
                                      {loading ? <CircularProgress   /> : null}
                                      {params.InputProps.endAdornment}
                                  </React.Fragment>
                                  ),
                              }}
                              />
                             )}
                          />
                      </div>
                  </div>
                   {/* sub-category */}
                  <div className="col-md-4">
                      <div className="form-group bmd-form-group">
                      <label className="bmd-label-floating">Sub-Category *:</label>                              
                    <Autocomplete 
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        className="controllable-states-select"
                        options={options}                 
                          renderInput={(params) => <TextField {...params} label="Unit code" variant="outlined"  />}                         
                      ></Autocomplete>  
                      </div>
                  </div>
                 {/* bussiness section */}
                <div className="col-md-4">
                    <label className="bmd-label-floating">Bussineess *:</label>
                    <InfoIcon className="fa fa-info-circle" className="icon-superscript"  />
                    <Autocomplete
                       id="size-small-outlined"
                       className="controllable-states-select-bussiness"
                        size="large"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={top100Films[13]}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined"   placeholder="Bussiness " />
                        )}
                      />
                 </div>
            </div>
            <br></br>
            {/* check box */}
            <div className="row">                
                <div className="col-md-4">
                    <div className="form-group bmd-form-group">
                      <br></br>
                    <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedB}
                              onChange={handleChange}
                              name="checkedB"
                              color="primary"                      
                            />
                          }                          
                        />  
                         <label className="bmd-label-floating">Manage Stock *:</label>
                         <InfoIcon className="fa fa-info-circle" className="icon-superscript"  />                     
                      </div>
                  </div>
                 
                   {/* Alert quantity*/}
                   <br></br>
                  <div className="col-md-4">
                      <div className="form-group bmd-form-group">
                      <label className="bmd-label-floating">Alert quantity</label>
                            <InfoIcon className="fa fa-info-circle" className="icon-superscript"  />
                            <input type="text" className="form-control" id="outlined-basic" placeholder="Enter SkU Name" />                                                   
                      </div>
                  </div>                                        
            </div>
            <hr className="new4" />

            <div className="row">                
                <div className="col-md-4">
                    <div className="form-group bmd-form-group">
                      <br></br>
                        <FormControlLabel control={<Checkbox name="checkedC" />} />
                         <label className="bmd-label-floating">Enable Product Dicription IMI and serial Number  *:</label>
                         <InfoIcon className="fa fa-info-circle" className="icon-superscript"  />                     
                      </div>
                  </div>
                 
                   {/* not for seeling*/}
                   <br></br>
                  <div className="col-md-4">
                      <div className="form-group bmd-form-group">
                      <br></br>
                        <FormControlLabel control={<Checkbox name="checkedC" />} />
                         <label className="bmd-label-floating"> Not for seeling:</label>
                         <InfoIcon className="fa fa-info-circle" className="icon-superscript"  />                                                 
                      </div>
                  </div>                                        
            </div>
            <div className="row"> 
                {/* weight */}
                <div className="col-md-4">
                    <div className="form-group bmd-form-group">
                    <label className="bmd-label-floating">Weight</label>
                            <InfoIcon className="fa fa-info-circle" className="icon-superscript"  />
                            <input type="text" className="form-control" id="outlined-basic" placeholder="Enter SkU Name" />                     
                      </div>
                  </div>                                                  
            </div>
            <br></br>
            <div className="row"> 
             {/* Custom field */}
                <div className="col-md-3">
                    <div className="form-group bmd-form-group">
                        <label className="bmd-label-floating">Custom field1</label>                            
                            <input type="text" className="form-control" id="outlined-basic" placeholder="Enter Custom Name" />                     
                      </div>
                  </div>  
                  <div className="col-md-3">
                    <div className="form-group bmd-form-group">
                        <label className="bmd-label-floating">Custom field2</label>                            
                            <input type="text" className="form-control" id="outlined-basic" placeholder="Enter Custom Name" />                     
                      </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group bmd-form-group">
                        <label className="bmd-label-floating">Custom field3</label>                            
                            <input type="text" className="form-control" id="outlined-basic" placeholder="Enter Custom Name" />                     
                      </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group bmd-form-group">
                        <label className="bmd-label-floating">Custom field4</label>                            
                            <input type="text" className="form-control" id="outlined-basic" placeholder="Enter Custom Name" />                     
                      </div>
                  </div>                                                
            </div>
            <br></br>
            <div className="col-md-4">
                      <div className="form-group bmd-form-group">                
                        <FormControlLabel control={<Checkbox name="checkedC" />} />
                         <label className="bmd-label-floating"> Disable Woocommerce sync:</label>
                         <InfoIcon className="fa fa-info-circle" className="icon-superscript"  />                                                 
                      </div>
                  </div> 
                  {/* third section */}
                  <hr className="new4" />
        </div>
    </div>
  );
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  
];