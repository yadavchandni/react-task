import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './_style.css';

class CartTable extends React.Component {

  static defaultProps = {
    list: []
  }
  constructor(props) {
    super(props);

    this.state = {
      quantity: {},
      list: []
    }
  }

  componentDidUpdate = (prevProps, newProps) => {
    if(!prevProps?.list || prevProps.list !== newProps.list) {
      this.setState({
        list: this.props.list
      })
    }
  }

  handleQuantityChange = (id, value) => {
    let quantity = this.state.quantity;
    quantity[id] =  quantity[id] &&  quantity[id] > 0 ?  Math.max(quantity[id] + value, 0) : Math.max(value, 0);
    this.setState({
      quantity
    });
  }
  
  removeItem = (row) => {
    let list = this.state.list;
      let index = list.indexOf(row);
      list.splice(index, 1);
      this.setState({
        list
      })
  }

  render() {
    
 
    return (
      <div className={'table-container'}>
      <TableContainer component={Paper}>
      <Table className={'tabel'} aria-label="spanning table" id="responsive-table">
        <TableHead >
         
          <TableRow className={'column-title '}>
            <TableCell  align="left"><h3>Title</h3></TableCell>
            <TableCell  align="left"><h3>Product Details</h3></TableCell>
            <TableCell align="leftt"><h3>Quantity</h3></TableCell>
            <TableCell align="leftt"><h3>Price</h3></TableCell>
         
            <TableCell align="leftt"><h3>Tax</h3></TableCell>
           
            <TableCell align="leftt"><h3>Sub Total</h3></TableCell>

            <TableCell align="leftt"><h3>Action</h3></TableCell>
            
           
          </TableRow>
        </TableHead>

        <TableBody>
          {this.state.list.map((row) => (
            <TableRow key={row.id}>

              <TableCell align="left">{row.title}</TableCell>
              
              
              <TableCell align="left" className={'info'}>{row.info}</TableCell>
          
              <TableCell align="left">      
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => {
                      // setCount(Math.max(count - 1, 0));
                      this.handleQuantityChange(row.id, -1)
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    aria-label="reduce"
                    style={{padding: "0 5px"}}
                  >
                   {this.state.quantity[row.id] || 1}
                  </Button>
                  <Button
                    aria-label="increase"
                    onClick={() => {
                      this.handleQuantityChange(row.id, 1)
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup> 
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>

              
              <TableCell align="left">{row.tax}</TableCell>
              <TableCell align="left">{row.price * (this.state.quantity[row.id] || 1)*row.tax}</TableCell>
              <TableCell align="left">
                  <Button variant="contained" color="secondary"
                  onClick={() => {
                    console.log('row.id', row.id);
                    this.removeItem(row);
                    
                  }}
                  >
                  <HighlightOffIcon />

                </Button>
              </TableCell>
              

              
             
            </TableRow>
           

                 
          ))}

            
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    )
  }

}
export default CartTable;

