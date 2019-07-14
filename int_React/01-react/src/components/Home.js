import React, { Component } from 'react'
import Square from './Square'


export class Home extends Component {
        constructor(props){
            super(props)
            this.state = {
                mensaje: 'Este es mi componente de Home desde State',
                squareHeight: 200,
                colors: ['yellow', 'red', 'blue', 'green']

            }
        }



    componentDidMount(){
       
            console.log(this);

        
        
    }

    componentWillMount(){
        console.log('el componente se montara');
    }



    render() {
        return (
            <div>
                <h3>{this.state.mensaje}</h3>
                <Square color={this.state.colors[0]} height='100'/>
                <Square color={this.state.colors[1]} height='100'/>
                <Square color={this.state.colors[2]} height='100'/>
                <Square color={this.state.colors[3]} height='100'/>
                
            </div>
        )
    }
}

export default Home
