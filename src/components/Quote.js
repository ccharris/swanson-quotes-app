import React, { Component } from 'react';
import axios from 'axios';

class Quote extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: ''
        }
    }
    componentWillMount(){
        axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(request => {
            this.setState({
                quote: request.data
            });
        });
    }
    render(){
        return(
            <p id="quote"> {this.state.quote}</p>
        )
    }
}

export default Quote;