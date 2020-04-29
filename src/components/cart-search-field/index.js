import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './_style.css';



class CartSearchField extends Component {

static defaultProps = {
    productList: [],
};

  constructor(props) {
    super(props);
    

    this.state = {
      selected: '',
      showSuggestions: false,
      searchData: '',
      suggestions: []
    };
    // this.customFilter = this.customFilter.bind(this);
  }

  handleChange = (event) => {
      let data = event.target.value;
    //   console.log('input data---', data, event.target);
      if(data.trim() === "") {
          this.setState({
              showSuggestions: false,
              searchData: ''
          })
        return
      }
      // logic to check in list
      let items = []
      if(this.props.productList  && this.props.productList.length > 0) {
          for(let each of this.props.productList) {              
              if(each.title.startsWith(data)) {
                console.log('eahc---',each);
                  items.push(each);
              }
          }
      }
      //

      this.setState({
          searchData: data,
          suggestions: items,
          showSuggestions: true,
      })
      
  }


  render() {
    const dense = true;
    const secondary = true;
   
    const sampleData = [{
        id: 1,
        title: "tshirtBlack",
        img: "img/0b4359323e74be6c4361c155706b147d_350x350.jpg",
        price: 10,
        company: "Club factory",
        info:
          " T-shirt that is associated with a concert or a concert tour, usually rock or metal. Bands and musical groups often promote themselves by creating and selling or giving away T-shirts at their shows, tours and events.",
        inCart: false,
        count: 0,
        total: 0
      },
      ];
    return (
      <>
        <div className={'container'}>
            <TextField className={'search-input'} id="search-input" placeholder="search here...." variant="outlined"
            onChange={ this.handleChange}
             />
            { this.state.showSuggestions && 
            <div className={'suggestions-section'}>
                <div className={'classes.demo'}>
                  
                    <List dense={dense}>
                    {this.state.suggestions && this.state.suggestions.map((item, key) => {
                        return (<ListItem className={'listitem'}
                                onClick={() => {
                                    this.props.handleSelect(item)
                                    this.setState({
                                        showSuggestions: false
                                    })
                                }}
                                >
                                <ListItemText
                                    primary={item.title}
                                    // secondary={secondary ? 'Secondary text' : null}
                                />
                                <Divider light />
                                </ListItem>)
                    })}
                    </List>
                </div>
            </div>
            }
        </div>

      </>
    );
  }
}

export default CartSearchField;
