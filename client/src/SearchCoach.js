import React, { Component } from 'react';
import logo from './logo.svg';
import './SearchCoach.css';

import SearchComponent from './SearchComponent'

import {InputText} from 'primereact/components/inputtext/InputText';

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

import {Redirect} from 'react-router-dom';
import { Button } from 'primereact/components/button/Button';

class SearchCoach extends Component {

    constructor() {
        super();
        this.getCoachs = this.getCoachs.bind(this);        
    }

    getCoachs(domain){

        let redirect = '/in/'+domain
        window.location.href=redirect;
    
    
      }


  render() {
    return (

       
    <div className="SearchCoach">
        
        <img src={logo} className="SearchCoach-logo" alt="logo" />
        <h1 className="SearchCoach-title">What do you want to be coached in?</h1>


        <div className="suggestions">
            <div className="ui-g">
                <div className="ui-g-12 ui-g-nopad">
                    <div className="ui-g-4">
                        <button label="Fitness" onClick={e => this.getCoachs("fitness")}>Fitness</button>
                    </div>
                    <div className="ui-g-4">
                        <button label="Surf" onClick={e => this.getCoachs("surf")}>Surf</button>
                    </div>
                    <div className="ui-g-4">
                        <button label="Gym" onClick={e => this.getCoachs("gym")}>Gym</button>
                    </div>
                </div>
                <div className="ui-g-12">
                    <div className="ui-g-2">
                        
                    </div>
                    <div className="ui-g-4">
                        <button label="Yoga" onClick={e => this.getCoachs("yoga")}>Yoga</button>
                    </div>
                    <div className="ui-g-4">
                        <button label="Sport" onClick={e => this.getCoachs("sport")}>Sport</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        <SearchComponent/>




        <footer>
        </footer>
    </div>
        



    );
  }
}



export default SearchCoach;
