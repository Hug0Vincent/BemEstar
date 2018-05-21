import React, { Component } from 'react';
import logo from './logo.svg';
import './SearchComponent.css';

import {InputText} from 'primereact/components/inputtext/InputText';

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

import {Redirect} from 'react-router-dom';

class SearchComponent extends Component {

    constructor() {
        super();
        this.state = {search:''};
        this.onSearchChange = this.onSearchChange.bind(this);
        this.SearchCoach = this.SearchCoach.bind(this);
        
    }

    onSearchChange(event){
        this.setState({search:event.target.value})
    }


  SearchCoach(){

    let redirect = '/in/'+escape(this.state.search)
    window.location.href=redirect;

  }

  render() {
    return (
        <div className="ui-g ui-fluid">
            <div className="ui-g-12 ui-md-4 input ">
                <div className="ui-inputgroup searchbar">
                                
                    <InputText placeholder="Keyword" onChange={this.onSearchChange}/>
                    <button className="button" onClick={this.SearchCoach}>Search</button>
                    
                </div>
            </div>
        </div>
    );
  }
}



export default SearchComponent;
