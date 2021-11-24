import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import SettingsPanel from './shared/SettingsPanel';
import Footer from './shared/Footer';


class App extends Component {
  
  render () {
   
    return (
      <div className="container-scroller">
       <Navbar/>
        <div className="container-fluid page-body-wrapper">
         <Sidebar/>
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>
              <SettingsPanel/>
            </div>
           <Footer/>
          </div>
        </div>
      </div>
    );
  }

  
}

export default withRouter(App);
