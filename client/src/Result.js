import React, { Component } from 'react';
import logo from './logo.svg';

import {Card} from 'primereact/components/card/Card';
import {Button} from 'primereact/components/button/Button';
import {Rating} from 'primereact/components/rating/Rating'

import avatar from './img_avatar.png';

import './Result.css';


import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

import SearchComponent from './SearchComponent'

import Service from './service/Service'

class Results extends Component {



  constructor() {
    super();
    this.state = {
        coaches: []
      };
    this.getProfile = this.getProfile.bind(this);
    
}




  componentDidMount() {
    
    Service.searchCoach(this.props.match.params.qualif)
    .then( response => {this.setState({coaches:response})})
    .catch(err => console.log(err));
  }


  getProfile(id){

    let redirect = '/coach/'+id
    window.location.href=redirect;


  }

  render() {

    let header = <div><SearchComponent/></div>;

    var Coaches = this.state.coaches.map(function(coach, key){
        return(
        <li key={key}>
            <div className="Coach">
                <Card style={{padding: '10px', margin:'10px'}} title={coach.firstname} >
                <div className="ui-g">
                    <div className="ui-g-2 seeMore center ">
                        <div className="ui-g-12 ">
                            <img src={avatar} alt="Avatar" className="avatar img-responsive"/>
                        </div>
                        <div className="ui-g-12 ">
                            <Button label="See more" icon="fa-chevron-circle-down" onClick={e => this.getProfile(coach._id)} />
                        </div>
                        <div className="ui-g-12 ">
                            <Rating value={coach.note/4} readonly={true} stars={5} cancel={false} />
                        </div>
                        
                    </div>
                    <div className="ui-g-10 ui-g-nopad">
                        <div className="ui-g-6">
                            <p><b>Mail</b> : {coach.mail}</p>
                        </div>
                        <div className="ui-g-6">
                            <p><b>Cellphone</b> : {coach.cellphone}</p>
                        </div>
                        <div className="ui-g-12">
                            <p><b>Description</b> : {coach.shortdescription}</p>
                        </div>
                    </div>
                </div>
                
                </Card>
            </div>
        </li>
        )
    },this);

    if(this.state.coaches.length == 0){

        return(


            <div>
                <header>
                    {header}
                </header>
                <p>No Coaches found for this query</p>
            </div>

        )

    }else{

        return(
            <div>
                <header>
                    {header}
                </header>
                {Coaches}
            </div>
        );
    }


  }
}



export default Results;
