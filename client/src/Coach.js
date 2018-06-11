import React, { Component } from 'react';
import './Coach.css';

import {Card} from 'primereact/components/card/Card';
import {Button} from 'primereact/components/button/Button';
import {Rating} from 'primereact/components/rating/Rating'

import avatar from './img_avatar.png';

import SearchComponent from './SearchComponent'


import {InputText} from 'primereact/components/inputtext/InputText';

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

import {Redirect} from 'react-router-dom';

import Service from './service/Service'

class Coach extends Component {

    constructor() {
        super();
        this.state = {
            coache: '',
            comments:[]
        };
        this.getProfile = this.getProfile.bind(this);     
    }

    componentDidMount() {
    
        Service.searchCoachById(this.props.match.params.id)
        .then( response => {this.setState({coache:response})})
        .catch(err => console.log(err));

        Service.searchCommentsByCoachId(this.props.match.params.id)
        .then( response => {this.setState({comments:response})})
        .catch(err => console.log(err));

      }

    getProfile(){

        Service.getCoach(this.state.coache.id)
        .then( response => {console.log(response)})
        .catch(err => console.log(err));
        
    
    }


  render() {

        var comments = this.state.comments.map(function(comment, key){
            return(
            <li key={key}>
                <div className="Comments">
                    <Card style={{padding: '10px', margin:'10px'}} >
                    <div className="ui-g">
                        <div className="ui-g-2 seeMore center ">
                            <div className="ui-g-12 ">
                                <img src={avatar} alt="Avatar" className="avatar img-responsive"/>
                            </div>
                            <div className="ui-g-12 ">
                                <p>{comment.firstname} {comment.lastname}</p>
                            </div>
                            
                        </div>
                        <div className="ui-g-10 ui-g-nopad">
                            <div className="ui-g-6">
                                <p>{comment.comments}</p>
                                <Rating value={comment.note/4} readonly={true} stars={5} cancel={false} />
                            </div>
                        </div>
                    </div>
                    
                    </Card>
                </div>
            </li>
            )
        },this);

    


    return (


    
    
    

    <div className="Coach-result">

        {/* <header>
            <SearchComponent/>
        </header> */}

        <div className="content">
        

        <div className="personalDescription">
            <div className="short item">

            <p>Oi ! Eu sou {this.state.coache.firstname} {this.state.coache.lastname}</p>
            <p>{this.state.coache.shortdescription}</p>
            
            </div>
            <hr />
            <div className="whitme item">

                <p className="center"> With me as a coach : </p>
                <p>{this.state.coache.withme}</p>
            
            </div>
            <hr />
            <div className="location center item">

                <p>{this.state.coache.website} </p>
                <p>{this.state.coache.mail} </p>
                <div className="center">
                    <p  className="fa fa-facebook logo" > </p>
                    <p className="fa fa-twitter logo" > </p>
                </div>
                
            
            </div>
            <hr />
            <div className="center item">
                <p><i className="fa fa-certificate"></i> Digital Coaching Certified</p>
            </div>

        </div>
        <div className="LongDescription">


            <h1>Description : </h1>
            <p>{this.state.coache.longdescription} </p>

            <div className="center getcoach">
                <Button  label="Get this coach" onClick={e => this.getProfile(this.state.coach._id)} />
            </div>
            

        </div>

        <div className="comments">

            <h1>What Clients say about {this.state.coache.firstname} : </h1>

            {comments}

        </div>


    
    </div>
    </div>
    );
  }
}



export default Coach;
