import React, {Component} from 'react';

export default function(WrappedComponent){
    return class withToggle extends Component{  // not using constructor, super or state but he said there isnt a reason why its going to work the same. its a new way of doing react but isnt completey accepted yet by es6.
        state={
            toggle:false
        }
        handleChange=e=>{
            this.setState({
                toggle: !this.state.toggle
            })
        }
        render(){
            let toggle={
                value:this.state.toggle,
                handleChange:this.handleChange
            }
            return <WrappedComponent toggle={toggle}{...this.props}/>
        }
    }
}