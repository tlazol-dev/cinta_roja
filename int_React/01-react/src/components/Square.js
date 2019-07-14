import React, { Component } from 'react'


export class Square extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }

    render() {
        
    
        return (
            <div>
                <div style= {{backgroundColor:this.props.color,
                width:'100%', height: this.props.height+'px'}} ></div>
            </div>
        )
    }
}

export default Square
