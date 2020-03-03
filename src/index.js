import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';
import './index.css';

class App extends React.Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            search : '',
            images: [],
            loading : true,
            page: 1,
        };

    };


    componentDidMount() {
        this.setState({loading: false})
    };

    increment = async (event) =>{
        event.preventDefault();
        var c = this.state.page;
        c = c+1;

        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query: this.state.search,per_page:10,page:c},
            headers:{
                Authorization:'Client-ID df9ed1b25f6936b730f0540dae83b1f36f89b3704615951dc534bc25bb039dd8'
            }
        });

        this.setState({
            page:c,
            images: response.data.results,
        });
    };

    decrement = async (event) =>{
        event.preventDefault();
        var c = this.state.page;
        if(c>1){
            c = c-1;
        }
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query: this.state.search,per_page:10,page:c},
            headers:{
                Authorization:'Client-ID df9ed1b25f6936b730f0540dae83b1f36f89b3704615951dc534bc25bb039dd8'
            }
        });

        this.setState({
            page:c,
            images: response.data.results,
        });
    };

    onFormSubmit = async (event)=>{
        event.preventDefault();
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query: this.state.search,per_page:10,page:this.state.page},
            headers:{
                Authorization:'Client-ID df9ed1b25f6936b730f0540dae83b1f36f89b3704615951dc534bc25bb039dd8'
            }
        });

        this.setState({
            images: response.data.results,
        });

    }

    onInputChange = (event)=>{
        this.setState({
            search:event.target.value,
        });
    }

    render(){
        if(this.state.loading){
            return(
                <div className="ui segment" style={{height:'100%',width:'100%'}}>
                    <div className="ui active dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    <p></p>
            </div>
            )
        }
        else{
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar inc = {this.increment} dec={this.decrement} sub = {this.onFormSubmit} value ={this.state.search} inp ={this.onInputChange} />
                <ImageList images = {this.state.images} />
            </div>
        );
        }
    }
} 


ReactDOM.render(<App />,document.querySelector("#root"));