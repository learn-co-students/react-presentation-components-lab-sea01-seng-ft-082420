// Code SimplerComponent Here
import { render } from 'enzyme';
import React, {Component} from 'react';


const SimplerComponent = (props) => {
return (
 <div onClick={props.handleClick}>I am just happy</div>
)
}

 export default SimplerComponent