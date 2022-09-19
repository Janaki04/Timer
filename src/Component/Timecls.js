import React, { Component } from 'react'


 
let value=null
class Timecls extends Component {

    
    constructor(props){
        super(props)
        this.state={
            count:0,
            start:false,
            reset:false,
            stop:false
        }
    }
    startDis=()=>{
        this.setState({start:true,reset:false,stop:false})

    }
    stopDis=()=>{
        this.setState({stop:true,start:false,reset:false})
    }
    rstDis=()=>{
        this.setState({reset:true,start:false,stop:false,count:0})
    }
    
componentDidUpdate(prevprops, prevState){
       if(this.state.start && prevState.start !==this.state.start){
       value = setInterval(()=>{
       this.setState({
        count:this.state.count+1
       }) 
        },1000)
    }else if(this.state.stop){
        clearInterval(value)
    }
    }
    componentWillUnmount(){
        clearInterval(value)
    }



  render() {
    return (
      <div>
    {this.state.count}<br/>
      <button onClick={this.startDis} disabled={this.state.start}>Start</button>
      <button onClick={this.stopDis} disabled={this.state.stop}>Stop</button>
      <button onClick={this.rstDis}  disabled={this.state.reset}>Reset</button>
    </div>
    )
  }
}
export default Timecls
