import React, { Component } from 'react';

import StateInfo from './StateInfo';

import LifeCycleInfo from './LyfeCycleInfo';

import PropsInfo from './PropsInfo';

class ComponentInfo extends Component{

    render(){

        return(

            <div ComponentInfo>
               <h1>Component</h1>
                <h2>- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</h2>
                <PropsInfo/>
                <StateInfo/>
                <LifeCycleInfo/>
            </div>
        )
    }
}

export default ComponentInfo;