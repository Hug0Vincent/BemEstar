import React, { Component } from 'react';
import logo from './logo.svg';
import './SearchCoach.css';

import SearchComponent from './SearchComponent'

import {InputText} from 'primereact/components/inputtext/InputText';

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

import {Redirect} from 'react-router-dom';

class SearchCoach extends Component {

    constructor() {
        super();        
    }


  render() {
    return (

       
    <div className="SearchCoach">
        
        <img src={logo} className="SearchCoach-logo" alt="logo" />
        <h1 className="SearchCoach-title">Search a coach</h1>
        
        
        <SearchComponent/>




        <footer>
        </footer>
    </div>
        



    );
  }
}



export default SearchCoach;
