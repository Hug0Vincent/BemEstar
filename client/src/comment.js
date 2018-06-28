import React, { Component } from 'react';
import logo from './logo.svg';
import './comment.css';

import {InputText} from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {Slider} from 'primereact/components/slider/Slider';

import {Messages} from 'primereact/components/messages/Messages';
import {Message} from 'primereact/components/message/Message';

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

import {Redirect} from 'react-router-dom';
import Service from './service/Service'

import {Checkbox} from 'primereact/components/checkbox/Checkbox';

class Comment extends Component {

    constructor(props) {
        super();
        this.state = {value:'',id:0, user:{loggedIn:""}, note: 10, message:'', checked:false};
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onChangeSlider1 = this.onChangeSlider1.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onLoggedIn = this.onLoggedIn.bind(this);
        
    }

    componentDidMount() {
    
        Service.getUserById(this.state.id)
        .then( response => {this.setState({user:response})})
        .catch(err => console.log(err));

      }


    

    onChangeSlider1(e) {
        this.setState({ note: e.value });
    }

    onSearchChange(event){
        this.setState({search:event.target.value})
    }

    onLoggedIn(e){


        let loggedInUser = {
            "id": 0,
            "firstName": "Hugo",
            "lastName": "VINCENT",
            "email": "string",
            "password": "string",
            "creationDate": "2018-06-28T13:18:58.757Z",
            "myCoach": "string",
            "coach": true,
            "loggedIn": true
          }

          let notLoggedInUser = {
            "id": 0,
            "firstName": "Hugo",
            "lastName": "VINCENT",
            "email": "string",
            "password": "string",
            "creationDate": "2018-06-28T13:18:58.757Z",
            "myCoach": "string",
            "coach": true,
            "loggedIn": false
          }
        
          if(e.checked)
            this.setState({user:loggedInUser,checked:true})
          else
            this.setState({user:notLoggedInUser, checked:false})
    }

    

    handleClick(){

        if(this.state.user.loggedIn == true){
            var comment = {
                firstname: this.state.user.firstName,
                lastname: this.state.user.lastName,
                mail: this.state.user.email,
                note: this.state.note,
                comments: this.state.value,
                coach: {
                  _id:this.props.id
                }
            }

            Service.postComment(comment)
            .then( response => {this.setState({message:'comment add'})})
            .catch(err => console.log(err));
        }else{
            this.setState({message:'your are not loggedIn ! '})
        }

        this.props.onClick()

        

    }

  render() {

    let message
    if(this.state.message != ''){
        message = <Message severity="info" text={this.state.message}></Message>
    }else{
        message = ''
    }
    return (
        <div className="ui-g ui-fluid">
                <div className="center">

                    <div className="commentElement">
                        <InputTextarea rows={5} cols={100} value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                    </div>
                    <div className="commentElement">
                        <Button label="Click" onClick={this.handleClick} />
                    </div>
                    <div className="commentElement">
                        <h3>Note: {this.state.note}</h3>
                        <Slider  value={this.state.note} onChange={this.onChangeRangeSlider} max={20} />
                    </div>
                    <div className="commentElement">
                        {message}
                    </div>
                    <div className="commentElement">

                        <h3>Loggin: </h3>
                        <Checkbox onChange={this.onLoggedIn} checked={this.state.checked}></Checkbox>

                    </div>

                </div>
        </div>
    );
  }
}



export default Comment;
