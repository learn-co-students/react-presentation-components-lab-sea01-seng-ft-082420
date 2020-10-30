import React from 'react';

class SimpleComponent extends React.Component{
  constructor(){
    super()

    this.state ={
      mood: 'happy'
    }
  }

  handleClick =() => {
    this.setState(prevState => {
      return {
        mood: 'sad'
      }
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
