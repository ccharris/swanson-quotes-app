import Unsplash, { toJson } from 'unsplash-js';
import React, {Component} from 'react';
import Quote from './Quote';
import config from '../config';

const html2canvas = window.html2canvas;

const unsplash = new Unsplash({
    applicationId: config.applicationId,
    secret: config.secret,
    callbackUrl: config.callbackUrl,
    Authorization: config.Authorization
});



class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: '',
            photogLink: '',
            name: ''
        }
        
    }
    printDocument(){
    const input = document.getElementById('print');
    html2canvas(input, {useCORS: true}) 
    .then((canvas) =>{
        console.log('trying to print');
      const imgData = canvas.toDataURL()
      window.open(imgData);
    });

  }
    componentWillMount(){
        unsplash.photos.getRandomPhoto({query: 'nature'})
        .then(toJson)
        .then(json => {
            if (json.height > json.width ){
                this.setState(() => {
                return{ url : json.urls.full,
                        photogLink: json.user.links.html,
                        name: json.user.name
                         };
                });
            } else {
                unsplash.photos.getRandomPhoto({query: 'nature'})
                .then(toJson)
                .then(json => {
                    this.setState(() => {
               return{ url : json.urls.full,
                        photogLink: json.user.links.html,
                        name: json.user.name};
                });
            })
        }
    })
    }

    
    render(){
        return (
            <div>
            <div id="print" className="image">
                <img crossOrigin="anonymous" id="specImg" src={this.state.url} alt="" />
                <Quote />
            </div>
             <p className="footer">Photo by <a href={`${this.state.photogLink}?utm_source=ron-swanson-app&utm_medium=referral&utm_campaign=api-credit`} >{this.state.name}</a> / <a href="https://unsplash.com/?utm_source=ron-swanson-app&utm_medium=referral&utm_campaign=api-credit">Unsplash</a></p>
             <button className="imgButton" onClick={() => this.printDocument()}>Download</button>
             </div>
        )
    }
}

export default Image;
