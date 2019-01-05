import React, { Component } from 'react';
import Content from './Content'
class Header extends Component {

    render(){

        return( 
            <div>
               <center><h1>React is Awesome</h1></center> 
                <Content/>
            </div>

        )
    }
}

export default Header; 