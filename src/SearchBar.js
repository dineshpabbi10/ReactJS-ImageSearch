import React from 'react';
import ButtonComponent from './Button';

class SearchBar extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.props.sub} className="ui form">
                    <label>Image Search</label>
                    <input className="field" value={this.props.value} onChange={this.props.inp} type = "text" />
                    <ButtonComponent fun={this.props.dec} cname="left arrow icon" content="Back" />
                    <ButtonComponent fun={this.props.inc} cname="right arrow icon" content="Next" />
                    <ButtonComponent fun={this.props.sub} cname="search icon" content="Search" />
                </form>
            </div>
        )
    }

};

export default SearchBar;