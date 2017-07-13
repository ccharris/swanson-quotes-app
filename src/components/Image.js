import Unsplash, { toJson } from 'unsplash-js';
import config from '../config';
import React, {Component} from 'react';
import Quote from './Quote';

const unsplash = new Unsplash({
     applicationId: 'fcf32339f5c50b1d7523e61de64918324a074492906171eec2fa74e573237e41',
    secret: 'bcfca4fac61d53a9eeb3257e3666880b3a89d7bb40fc8e5620c71fc799e8786b',
    callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
    Authorization: 'Client-ID fcf32339f5c50b1d7523e61de64918324a074492906171eec2fa74e573237e41'
});

class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
            photo: ''
        }
    }
    componentWillMount(){
        unsplash.photos.getRandomPhoto({query: 'nature'})
        .then(toJson)
        .then(json => {
            console.log(json.urls.regular);
            this.setState(() => {
               return{ photo : json.urls.regular };
            });
        })
    }

    
    render(){
        return (
            <div className="image">
                <img id="specImg" src={this.state.photo} alt="" />
                <Quote />
            </div>
        )
    }
}

export default Image;
