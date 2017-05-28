<<<<<<< HEAD
import React, { Component } from "react";

class SearchBar extends Component {
constructor(props){
  super(props);

  this.state = { term: " "};
}

  render(){
    return(
      <div>
    <input
    value={this.state.term}
     onChange={event => this.setState({term: event.target.value})}/>
    Value of the input:

</div>
   )
 }
}

// const SearchBar = () => {
//   return <input />;
// };
=======
import React, {Component} from 'react';

class SearchBar extends Component {
  constructor (props){
    super (props);
    this.state = {term:''};
  }
  render (){
    return (
      <div className='search-bar'>
      <input
      value = {this.state.term}
      onChange = {event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }
  onInputChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


>>>>>>> testing

export default SearchBar;
