import React, { Component } from 'react';

class LifeCycleInfo extends Component{

    render(){
        return(
            <div>
                <b><p>LifeCycleInfo: </p></b>
                <ul>
                    
              <li>constructor()</li>
                    <li> componentWillUnmount()</li>
                    <li>render()</li>
                    <li>componentDidMount()</li>
                    <li>componentDidUpdate()</li>
                </ul>

            </div>
        )
    }
}

export default LifeCycleInfo; 